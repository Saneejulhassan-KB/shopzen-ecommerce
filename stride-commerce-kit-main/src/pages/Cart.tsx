import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Minus, Plus, X, ShieldCheck, Truck, ArrowLeft } from "lucide-react";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Samsung Galaxy S23 Ultra 5G (Phantom Black, 256GB)",
      price: 89999,
      originalPrice: 124999,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=200&h=200&fit=crop",
      quantity: 1,
      inStock: true,
      seller: "TechWorld Store"
    },
    {
      id: "2",
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: 24990,
      originalPrice: 34990,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop",
      quantity: 2,
      inStock: true,
      seller: "AudioHub"
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const savings = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const delivery = subtotal > 499 ? 0 : 40;
  const total = subtotal + delivery;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-text-secondary mb-6">
          <Link to="/" className="hover:text-primary">Home</Link>
          <span>/</span>
          <span className="text-text-primary">Shopping Cart</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-text-primary mb-4">Your cart is empty</h2>
            <p className="text-text-secondary mb-6">Add some products to get started!</p>
            <Link to="/">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-text-primary">
                  Shopping Cart ({cartItems.length} items)
                </h1>
                <Link to="/">
                  <Button variant="ghost" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Continue Shopping
                  </Button>
                </Link>
              </div>

              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 object-cover rounded-lg bg-surface"
                      />
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between">
                          <h3 className="font-medium text-text-primary line-clamp-2">
                            {item.name}
                          </h3>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-text-secondary hover:text-destructive"
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>

                        <p className="text-sm text-text-secondary">
                          Sold by: {item.seller}
                        </p>

                        <div className="flex items-center gap-2">
                          <span className="text-lg font-bold text-text-primary">
                            ₹{item.price.toLocaleString()}
                          </span>
                          <span className="text-sm text-text-secondary line-through">
                            ₹{item.originalPrice.toLocaleString()}
                          </span>
                          <Badge variant="secondary" className="text-success">
                            {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% off
                          </Badge>
                        </div>

                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center gap-3">
                            <span className="text-sm text-text-secondary">Qty:</span>
                            <div className="flex items-center border border-border rounded">
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, -1)}
                                disabled={item.quantity <= 1}
                                className="h-8 w-8 p-0"
                              >
                                <Minus className="h-3 w-3" />
                              </Button>
                              <span className="px-3 py-1 text-sm font-medium">
                                {item.quantity}
                              </span>
                              <Button
                                variant="ghost"
                                size="sm"
                                onClick={() => updateQuantity(item.id, 1)}
                                className="h-8 w-8 p-0"
                              >
                                <Plus className="h-3 w-3" />
                              </Button>
                            </div>
                          </div>

                          <div className="text-right">
                            <div className="font-bold text-text-primary">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </div>
                            {item.quantity > 1 && (
                              <div className="text-sm text-text-secondary">
                                ₹{item.price.toLocaleString()} each
                              </div>
                            )}
                          </div>
                        </div>

                        {item.inStock && (
                          <div className="flex items-center gap-2 text-sm text-success">
                            <ShieldCheck className="h-4 w-4" />
                            In stock
                          </div>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardContent className="p-6 space-y-4">
                  <h2 className="text-xl font-bold text-text-primary">Order Summary</h2>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Subtotal ({cartItems.length} items)</span>
                      <span className="font-medium">₹{subtotal.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Delivery</span>
                      <span className="font-medium">
                        {delivery === 0 ? (
                          <span className="text-success">FREE</span>
                        ) : (
                          `₹${delivery}`
                        )}
                      </span>
                    </div>

                    {savings > 0 && (
                      <div className="flex justify-between text-success">
                        <span>Total Savings</span>
                        <span className="font-medium">-₹{savings.toLocaleString()}</span>
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>₹{total.toLocaleString()}</span>
                    </div>
                  </div>

                  {delivery > 0 && (
                    <div className="bg-accent-light text-accent p-3 rounded-lg text-sm">
                      <Truck className="h-4 w-4 inline mr-2" />
                      Add ₹{(499 - subtotal).toLocaleString()} more for FREE delivery
                    </div>
                  )}

                  <Link to="/checkout" className="block w-full">
                    <Button className="w-full h-12 text-lg">
                      Proceed to Checkout
                    </Button>
                  </Link>

                  <div className="text-center text-sm text-text-secondary">
                    <ShieldCheck className="h-4 w-4 inline mr-1" />
                    Safe and secure payments
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Cart;