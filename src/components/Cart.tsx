
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '@/hooks/useCart';
import { products } from '@/data/products';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface CartProps {
  userId: string;
}

const Cart = ({ userId }: CartProps) => {
  const { cartItems, updateQuantity, removeFromCart } = useCart(userId);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const { toast } = useToast();

  const getCartItemsWithProducts = () => {
    return cartItems.map(item => {
      const product = products.find(p => p.id === item.product_id);
      return { ...item, product };
    }).filter(item => item.product);
  };

  const cartItemsWithProducts = getCartItemsWithProducts();
  
  const totalAmount = cartItemsWithProducts.reduce(
    (sum, item) => sum + (item.product!.price * item.quantity), 
    0
  );

  const handleCheckout = async () => {
    if (cartItemsWithProducts.length === 0) return;

    setIsCheckingOut(true);
    try {
      const { data, error } = await supabase.functions.invoke('create-payment', {
        body: {
          items: cartItemsWithProducts.map(item => ({
            product_id: item.product_id,
            name: item.product!.name,
            price: item.product!.price,
            quantity: item.quantity,
          })),
          total_amount: Math.round(totalAmount * 100), // Convert to paise
        },
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error: any) {
      toast({
        title: "Checkout Error",
        description: error.message || "Failed to initiate checkout",
        variant: "destructive",
      });
    } finally {
      setIsCheckingOut(false);
    }
  };

  if (cartItemsWithProducts.length === 0) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="flex flex-col items-center justify-center py-12">
          <ShoppingCart className="h-16 w-16 text-gray-400 mb-4" />
          <h3 className="text-xl font-semibold text-gray-600 mb-2">Your cart is empty</h3>
          <p className="text-gray-500">Add some items to get started!</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5" />
          Shopping Cart ({cartItemsWithProducts.length} items)
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {cartItemsWithProducts.map((item) => (
          <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg">
            <img
              src={item.product!.image}
              alt={item.product!.name}
              className="w-16 h-16 object-cover rounded"
            />
            <div className="flex-1">
              <h4 className="font-semibold">{item.product!.name}</h4>
              <p className="text-gray-600">₹{item.product!.price.toLocaleString('en-IN')}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span className="w-8 text-center">{item.quantity}</span>
              <Button
                size="sm"
                variant="outline"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-right">
              <p className="font-semibold">
                ₹{(item.product!.price * item.quantity).toLocaleString('en-IN')}
              </p>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}
        
        <div className="border-t pt-4">
          <div className="flex justify-between items-center mb-4">
            <span className="text-xl font-semibold">Total:</span>
            <span className="text-2xl font-bold text-green-600">
              ₹{totalAmount.toLocaleString('en-IN')}
            </span>
          </div>
          <Button 
            onClick={handleCheckout} 
            className="w-full" 
            size="lg"
            disabled={isCheckingOut}
          >
            {isCheckingOut ? 'Processing...' : 'Proceed to Checkout'}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Cart;
