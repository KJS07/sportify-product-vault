
import { useState } from "react";
import { Search, ShoppingCart, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/hooks/useAuth";
import { useCart } from "@/hooks/useCart";
import Auth from "./Auth";
import Cart from "./Cart";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const Header = () => {
  const { user, signOut } = useAuth();
  const { cartItems } = useCart(user?.id);
  const [showAuth, setShowAuth] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleAuthSuccess = () => {
    setShowAuth(false);
  };

  const cartItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold text-gray-900">SportStore</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-600 hover:text-gray-900">Cricket</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Football</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Hockey</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Tennis</a>
              <a href="#" className="text-gray-600 hover:text-gray-900">Basketball</a>
            </nav>
          </div>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="search"
                placeholder="Search for sports equipment..."
                className="pl-10 pr-4"
              />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <Dialog open={showCart} onOpenChange={setShowCart}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="sm" className="relative">
                      <ShoppingCart className="h-5 w-5" />
                      {cartItemCount > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                          {cartItemCount}
                        </span>
                      )}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle>Shopping Cart</DialogTitle>
                    </DialogHeader>
                    <Cart userId={user.id} />
                  </DialogContent>
                </Dialog>

                <div className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{user.email}</span>
                  <Button variant="ghost" size="sm" onClick={signOut}>
                    <LogOut className="h-4 w-4" />
                  </Button>
                </div>
              </>
            ) : (
              <Dialog open={showAuth} onOpenChange={setShowAuth}>
                <DialogTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-5 w-5 mr-2" />
                    Login
                  </Button>
                </DialogTrigger>
                <DialogContent>
                  <Auth onAuthSuccess={handleAuthSuccess} />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
