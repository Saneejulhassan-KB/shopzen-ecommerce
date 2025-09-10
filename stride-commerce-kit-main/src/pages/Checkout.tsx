import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { 
  ArrowLeft, MapPin, Edit, CreditCard, 
  Smartphone, Shield, Truck, Gift, 
  Check, Plus, Minus 
} from "lucide-react";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState("1");
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [couponCode, setCouponCode] = useState("");

  const cartItems = [
    {
      id: "1",
      name: "Samsung Galaxy S23 Ultra 5G (Phantom Black, 256GB)",
      price: 89999,
      originalPrice: 124999,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&h=100&fit=crop",
      quantity: 1,
      seller: "TechWorld Store"
    },
    {
      id: "2",
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: 24990,
      originalPrice: 34990,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
      quantity: 1,
      seller: "AudioHub"
    }
  ];

  const addresses = [
    {
      id: "1",
      type: "Home",
      name: "Rajesh Kumar",
      address: "123, MG Road, Bangalore, Karnataka - 560001",
      phone: "+91 9876543210",
      isDefault: true
    },
    {
      id: "2",
      type: "Office", 
      name: "Rajesh Kumar",
      address: "456, Tech Park, Electronic City, Bangalore - 560100",
      phone: "+91 9876543210",
      isDefault: false
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const delivery = 0; // Free delivery
  const couponDiscount = couponCode === "SAVE10" ? Math.floor(subtotal * 0.1) : 0;
  const total = subtotal + delivery - couponDiscount;

  const steps = [
    { id: 1, title: "Address", completed: currentStep > 1 },
    { id: 2, title: "Payment", completed: currentStep > 2 },
    { id: 3, title: "Review", completed: false }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/cart">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Cart
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-text-primary">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className={`
                flex items-center justify-center w-10 h-10 rounded-full border-2 
                ${step.completed 
                  ? 'bg-success border-success text-success-foreground' 
                  : currentStep === step.id 
                    ? 'bg-primary border-primary text-primary-foreground'
                    : 'border-border text-text-secondary'
                }
              `}>
                {step.completed ? (
                  <Check className="h-5 w-5" />
                ) : (
                  step.id
                )}
              </div>
              <span className={`ml-2 font-medium ${
                currentStep === step.id ? 'text-primary' : 'text-text-secondary'
              }`}>
                {step.title}
              </span>
              {index < steps.length - 1 && (
                <div className="w-16 h-0.5 bg-border mx-4" />
              )}
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Step 1: Address */}
            {currentStep === 1 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Delivery Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <RadioGroup value={selectedAddress} onValueChange={setSelectedAddress}>
                    {addresses.map((address) => (
                      <div key={address.id} className="space-y-2">
                        <div className="flex items-center space-x-3 p-4 border border-border rounded-lg">
                          <RadioGroupItem value={address.id} id={address.id} />
                          <Label htmlFor={address.id} className="flex-1 cursor-pointer">
                            <div className="space-y-1">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-text-primary">
                                  {address.name}
                                </span>
                                <Badge variant="secondary">{address.type}</Badge>
                                {address.isDefault && (
                                  <Badge className="bg-primary text-primary-foreground">
                                    Default
                                  </Badge>
                                )}
                              </div>
                              <p className="text-text-secondary">{address.address}</p>
                              <p className="text-sm text-text-secondary">
                                Phone: {address.phone}
                              </p>
                            </div>
                          </Label>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </RadioGroup>
                  
                  <Button variant="outline" className="w-full">
                    <Plus className="h-4 w-4 mr-2" />
                    Add New Address
                  </Button>
                  
                  <Button 
                    className="w-full" 
                    onClick={() => setCurrentStep(2)}
                  >
                    Continue to Payment
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Step 2: Payment */}
            {currentStep === 2 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-lg">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <CreditCard className="h-5 w-5 text-text-secondary" />
                            <span className="font-medium">Credit/Debit Card</span>
                          </div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-lg">
                        <RadioGroupItem value="upi" id="upi" />
                        <Label htmlFor="upi" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <Smartphone className="h-5 w-5 text-text-secondary" />
                            <span className="font-medium">UPI Payment</span>
                          </div>
                        </Label>
                      </div>
                      
                      <div className="flex items-center space-x-3 p-4 border border-border rounded-lg">
                        <RadioGroupItem value="netbanking" id="netbanking" />
                        <Label htmlFor="netbanking" className="flex-1 cursor-pointer">
                          <div className="flex items-center gap-3">
                            <Shield className="h-5 w-5 text-text-secondary" />
                            <span className="font-medium">Net Banking</span>
                          </div>
                        </Label>
                      </div>
                    </div>
                  </RadioGroup>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 p-4 bg-surface rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="cardName">Name on Card</Label>
                          <Input id="cardName" placeholder="John Doe" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="cardNumber">Card Number</Label>
                          <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" className="mt-1" />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" className="mt-1" />
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex gap-4">
                    <Button 
                      variant="outline" 
                      onClick={() => setCurrentStep(1)}
                      className="flex-1"
                    >
                      Back
                    </Button>
                    <Button 
                      className="flex-1" 
                      onClick={() => setCurrentStep(3)}
                    >
                      Review Order
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Step 3: Review */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Review Your Order</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Order Items */}
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex gap-4 p-4 border border-border rounded-lg">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium text-text-primary line-clamp-2">
                              {item.name}
                            </h3>
                            <p className="text-sm text-text-secondary">
                              Sold by: {item.seller}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              <span className="font-bold text-text-primary">
                                ₹{item.price.toLocaleString()}
                              </span>
                              <span className="text-sm text-text-secondary line-through">
                                ₹{item.originalPrice.toLocaleString()}
                              </span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="text-sm text-text-secondary">Qty: {item.quantity}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Separator />

                    {/* Delivery Address */}
                    <div>
                      <h4 className="font-semibold text-text-primary mb-2">Delivery Address</h4>
                      <div className="p-3 bg-surface rounded-lg">
                        <p className="font-medium">{addresses.find(a => a.id === selectedAddress)?.name}</p>
                        <p className="text-text-secondary">
                          {addresses.find(a => a.id === selectedAddress)?.address}
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <Button 
                        variant="outline" 
                        onClick={() => setCurrentStep(2)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button className="flex-1 bg-success hover:bg-success/90">
                        <Shield className="h-4 w-4 mr-2" />
                        Place Order
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Items */}
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-text-secondary line-clamp-1 flex-1 mr-2">
                        {item.name}
                      </span>
                      <span className="font-medium">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>
                  ))}
                </div>

                <Separator />

                {/* Coupon */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1"
                    />
                    <Button variant="outline" size="sm">
                      Apply
                    </Button>
                  </div>
                  {couponDiscount > 0 && (
                    <div className="flex items-center gap-2 text-sm text-success">
                      <Gift className="h-4 w-4" />
                      <span>Coupon applied successfully!</span>
                    </div>
                  )}
                </div>

                <Separator />

                {/* Totals */}
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Subtotal</span>
                    <span>₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Delivery</span>
                    <span className="text-success">FREE</span>
                  </div>
                  {couponDiscount > 0 && (
                    <div className="flex justify-between text-success">
                      <span>Coupon Discount</span>
                      <span>-₹{couponDiscount.toLocaleString()}</span>
                    </div>
                  )}
                  {savings > 0 && (
                    <div className="flex justify-between text-success">
                      <span>Total Savings</span>
                      <span>-₹{savings.toLocaleString()}</span>
                    </div>
                  )}
                </div>

                <Separator />

                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>₹{total.toLocaleString()}</span>
                </div>

                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <Truck className="h-4 w-4" />
                  <span>Expected delivery: Dec 25, 2024</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;