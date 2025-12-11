import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, Package } from 'lucide-react';

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    cardNumber: '',
    expiryDate: '',
    cvc: '',
  });

  const [shippingMethod, setShippingMethod] = useState('standard');
  const [isProcessing, setIsProcessing] = useState(false);

  const shippingCosts = {
    standard: 5.99,
    express: 12.99,
    overnight: 24.99,
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.email || !formData.firstName || !formData.lastName || !formData.address || !formData.cardNumber) {
      alert('Please fill in all required fields');
      return;
    }

    // Simulate payment processing
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      alert('Order placed successfully!');
      clearCart();
      navigate('/');
    }, 2000);
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <Package className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-3xl font-serif font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-8">
            Add items to your cart before checking out.
          </p>
          <Link to="/shop">
            <Button size="lg">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    );
  }

  const shippingCost = shippingCosts[shippingMethod as keyof typeof shippingCosts];
  const finalTotal = totalPrice + shippingCost;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link to="/cart" className="flex items-center gap-2 text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="h-4 w-4" />
        Back to Cart
      </Link>

      <h1 className="text-4xl font-serif font-bold mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Contact Information */}
          <div className="bg-card p-6 rounded-sm border border-border">
            <h2 className="text-2xl font-serif font-bold mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Shipping Address */}
          <div className="bg-card p-6 rounded-sm border border-border">
            <h2 className="text-2xl font-serif font-bold mb-6">Shipping Address</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name *</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="address">Street Address *</Label>
                <Input
                  id="address"
                  name="address"
                  placeholder="123 Main St"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="mt-2"
                />
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="city">City *</Label>
                  <Input
                    id="city"
                    name="city"
                    placeholder="New York"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="state">State/Province *</Label>
                  <Input
                    id="state"
                    name="state"
                    placeholder="NY"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="zipCode">ZIP/Postal Code *</Label>
                  <Input
                    id="zipCode"
                    name="zipCode"
                    placeholder="10001"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
              </div>
              <div>
                <Label htmlFor="country">Country *</Label>
                <Input
                  id="country"
                  name="country"
                  placeholder="United States"
                  value={formData.country}
                  onChange={handleInputChange}
                  className="mt-2"
                />
              </div>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="bg-card p-6 rounded-sm border border-border">
            <h2 className="text-2xl font-serif font-bold mb-6">Shipping Method</h2>
            <RadioGroup value={shippingMethod} onValueChange={setShippingMethod}>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 border border-border rounded-sm hover:bg-secondary cursor-pointer">
                  <RadioGroupItem value="standard" id="standard" />
                  <Label htmlFor="standard" className="cursor-pointer flex-1">
                    <span className="font-semibold">Standard Shipping</span>
                    <p className="text-sm text-muted-foreground">5-7 business days</p>
                  </Label>
                  <span className="font-semibold">${shippingCosts.standard.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-4 p-4 border border-border rounded-sm hover:bg-secondary cursor-pointer">
                  <RadioGroupItem value="express" id="express" />
                  <Label htmlFor="express" className="cursor-pointer flex-1">
                    <span className="font-semibold">Express Shipping</span>
                    <p className="text-sm text-muted-foreground">2-3 business days</p>
                  </Label>
                  <span className="font-semibold">${shippingCosts.express.toFixed(2)}</span>
                </div>
                <div className="flex items-center gap-4 p-4 border border-border rounded-sm hover:bg-secondary cursor-pointer">
                  <RadioGroupItem value="overnight" id="overnight" />
                  <Label htmlFor="overnight" className="cursor-pointer flex-1">
                    <span className="font-semibold">Overnight Shipping</span>
                    <p className="text-sm text-muted-foreground">Next business day</p>
                  </Label>
                  <span className="font-semibold">${shippingCosts.overnight.toFixed(2)}</span>
                </div>
              </div>
            </RadioGroup>
          </div>

          {/* Payment Information */}
          <div className="bg-card p-6 rounded-sm border border-border">
            <h2 className="text-2xl font-serif font-bold mb-6">Payment Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="cardNumber">Card Number *</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="mt-2"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date *</Label>
                  <Input
                    id="expiryDate"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="cvc">CVC *</Label>
                  <Input
                    id="cvc"
                    name="cvc"
                    placeholder="123"
                    value={formData.cvc}
                    onChange={handleInputChange}
                    className="mt-2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-card p-6 rounded-sm border border-border sticky top-20 space-y-6">
            <div>
              <h2 className="text-2xl font-serif font-bold mb-4">Order Summary</h2>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {items.map((item) => (
                  <div key={`${item.id}-${item.size}`} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.name} x {item.quantity}
                    </span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <Button
              onClick={handleSubmit}
              className="w-full mb-3"
              size="lg"
              disabled={isProcessing}
            >
              {isProcessing ? 'Processing...' : 'Place Order'}
            </Button>

            <Link to="/shop">
              <Button variant="outline" className="w-full">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
