
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Input } from '@/components/ui/input';
import { CreditCard, QrCode, ArrowLeft } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface PaymentMethodProps {
  totalAmount: number;
  onPaymentSuccess: () => void;
  onBack: () => void;
}

const PaymentMethod = ({ totalAmount, onPaymentSuccess, onBack }: PaymentMethodProps) => {
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'qr'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: ''
  });
  const { toast } = useToast();

  const handleCardPayment = async () => {
    // Validate card details
    if (!cardDetails.cardNumber || !cardDetails.expiryDate || !cardDetails.cvv || !cardDetails.cardholderName) {
      toast({
        title: "Missing Information",
        description: "Please fill in all card details",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: "Your card payment has been processed successfully.",
      });
      setIsProcessing(false);
      onPaymentSuccess();
    }, 2000);
  };

  const handleQRPayment = async () => {
    setIsProcessing(true);
    
    // Simulate QR payment processing
    setTimeout(() => {
      toast({
        title: "Payment Successful!",
        description: "Your QR code payment has been processed successfully.",
      });
      setIsProcessing(false);
      onPaymentSuccess();
    }, 3000);
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={onBack}>
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <CardTitle>Choose Payment Method</CardTitle>
        </div>
        <div className="text-right">
          <span className="text-2xl font-bold text-green-600">
            ₹{totalAmount.toLocaleString('en-IN')}
          </span>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <RadioGroup value={paymentMethod} onValueChange={(value) => setPaymentMethod(value as 'card' | 'qr')}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="card" id="card" />
            <label htmlFor="card" className="flex items-center gap-2 cursor-pointer">
              <CreditCard className="h-5 w-5" />
              Credit/Debit Card
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="qr" id="qr" />
            <label htmlFor="qr" className="flex items-center gap-2 cursor-pointer">
              <QrCode className="h-5 w-5" />
              QR Code Payment
            </label>
          </div>
        </RadioGroup>

        {paymentMethod === 'card' && (
          <div className="space-y-4 p-4 border rounded-lg">
            <h3 className="font-semibold">Card Details</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Cardholder Name</label>
                <Input
                  placeholder="John Doe"
                  value={cardDetails.cardholderName}
                  onChange={(e) => setCardDetails(prev => ({ ...prev, cardholderName: e.target.value }))}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Card Number</label>
                <Input
                  placeholder="1234 5678 9012 3456"
                  value={cardDetails.cardNumber}
                  onChange={(e) => setCardDetails(prev => ({ ...prev, cardNumber: formatCardNumber(e.target.value) }))}
                  maxLength={19}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Expiry Date</label>
                  <Input
                    placeholder="MM/YY"
                    value={cardDetails.expiryDate}
                    onChange={(e) => setCardDetails(prev => ({ ...prev, expiryDate: formatExpiryDate(e.target.value) }))}
                    maxLength={5}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">CVV</label>
                  <Input
                    placeholder="123"
                    value={cardDetails.cvv}
                    onChange={(e) => setCardDetails(prev => ({ ...prev, cvv: e.target.value.replace(/[^0-9]/g, '') }))}
                    maxLength={4}
                    type="password"
                  />
                </div>
              </div>
            </div>
            <Button 
              onClick={handleCardPayment} 
              className="w-full" 
              size="lg"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing Payment...' : 'Pay with Card'}
            </Button>
          </div>
        )}

        {paymentMethod === 'qr' && (
          <div className="space-y-4 p-4 border rounded-lg text-center">
            <h3 className="font-semibold">QR Code Payment</h3>
            <div className="flex justify-center">
              <div className="w-48 h-48 border-2 border-gray-300 rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/341cb4d4-a069-4053-a40d-0c57ba2970da.png" 
                  alt="QR Code for Payment" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-600 font-medium">
                Amount to Pay: ₹{totalAmount.toLocaleString('en-IN')}
              </p>
              <p className="text-sm text-gray-600">
                1. Open your payment app (PhonePe, Paytm, GPay, etc.)
              </p>
              <p className="text-sm text-gray-600">
                2. Scan the QR code above
              </p>
              <p className="text-sm text-gray-600">
                3. Confirm the payment amount
              </p>
            </div>
            <Button 
              onClick={handleQRPayment} 
              className="w-full" 
              size="lg"
              disabled={isProcessing}
            >
              {isProcessing ? 'Waiting for Payment...' : 'I have completed the payment'}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PaymentMethod;
