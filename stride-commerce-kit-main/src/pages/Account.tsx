import Header from "@/components/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  User, MapPin, CreditCard, Package, 
  Heart, Bell, Shield, HelpCircle,
  Edit, Plus, Truck, Star
} from "lucide-react";

const Account = () => {
  const user = {
    name: "Rajesh Kumar",
    email: "rajesh.kumar@email.com",
    phone: "+91 9876543210",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  };

  const addresses = [
    {
      id: 1,
      type: "Home",
      name: "Rajesh Kumar",
      address: "123, MG Road, Bangalore, Karnataka - 560001",
      phone: "+91 9876543210",
      isDefault: true
    },
    {
      id: 2,
      type: "Office",
      name: "Rajesh Kumar",
      address: "456, Tech Park, Electronic City, Bangalore - 560100",
      phone: "+91 9876543210",
      isDefault: false
    }
  ];

  const orders = [
    {
      id: "ORD001",
      date: "Dec 20, 2024",
      status: "Delivered",
      total: 89999,
      items: [
        {
          name: "Samsung Galaxy S23 Ultra",
          image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=100&h=100&fit=crop",
          price: 89999
        }
      ]
    },
    {
      id: "ORD002", 
      date: "Dec 15, 2024",
      status: "In Transit",
      total: 24990,
      items: [
        {
          name: "Sony WH-1000XM5 Headphones",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
          price: 24990
        }
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Delivered": return "bg-success text-success-foreground";
      case "In Transit": return "bg-primary text-primary-foreground";
      case "Processing": return "bg-warning text-warning-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>RK</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-text-primary">{user.name}</h3>
                    <p className="text-sm text-text-secondary">{user.email}</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <User className="h-4 w-4" />
                    Profile
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <Package className="h-4 w-4" />
                    Orders
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <MapPin className="h-4 w-4" />
                    Addresses
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <CreditCard className="h-4 w-4" />
                    Payment Methods
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <Heart className="h-4 w-4" />
                    Wishlist
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <Bell className="h-4 w-4" />
                    Notifications
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <Shield className="h-4 w-4" />
                    Privacy
                  </Button>
                  <Button variant="ghost" className="w-full justify-start gap-3">
                    <HelpCircle className="h-4 w-4" />
                    Help & Support
                  </Button>
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="profile">Profile</TabsTrigger>
                <TabsTrigger value="orders">Orders</TabsTrigger>
                <TabsTrigger value="addresses">Addresses</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Personal Information</CardTitle>
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4 mr-2" />
                      Edit
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="text-sm font-medium text-text-secondary">Full Name</label>
                        <p className="text-text-primary">{user.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-secondary">Email</label>
                        <p className="text-text-primary">{user.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-secondary">Phone</label>
                        <p className="text-text-primary">{user.phone}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-secondary">Gender</label>
                        <p className="text-text-primary">Male</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-secondary">Date of Birth</label>
                        <p className="text-text-primary">January 15, 1990</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-text-secondary">Location</label>
                        <p className="text-text-primary">Bangalore, Karnataka</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>Order History</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {orders.map((order) => (
                      <Card key={order.id} className="border border-border">
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between mb-4">
                            <div>
                              <div className="flex items-center gap-3">
                                <span className="font-semibold text-text-primary">
                                  Order #{order.id}
                                </span>
                                <Badge className={getStatusColor(order.status)}>
                                  {order.status}
                                </Badge>
                              </div>
                              <p className="text-sm text-text-secondary">{order.date}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-semibold text-text-primary">
                                ₹{order.total.toLocaleString()}
                              </p>
                              <Button variant="outline" size="sm" className="mt-2">
                                <Truck className="h-4 w-4 mr-2" />
                                Track Order
                              </Button>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4">
                            <img
                              src={order.items[0].image}
                              alt={order.items[0].name}
                              className="w-16 h-16 object-cover rounded-lg bg-surface"
                            />
                            <div>
                              <h4 className="font-medium text-text-primary">
                                {order.items[0].name}
                              </h4>
                              <p className="text-text-secondary">
                                ₹{order.items[0].price.toLocaleString()}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Saved Addresses</CardTitle>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Address
                    </Button>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {addresses.map((address) => (
                      <Card key={address.id} className="border border-border">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="font-semibold text-text-primary">
                                  {address.type}
                                </span>
                                {address.isDefault && (
                                  <Badge variant="secondary">Default</Badge>
                                )}
                              </div>
                              <p className="font-medium text-text-primary">{address.name}</p>
                              <p className="text-text-secondary">{address.address}</p>
                              <p className="text-text-secondary">Phone: {address.phone}</p>
                            </div>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">Edit</Button>
                              <Button variant="outline" size="sm">Delete</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Payments Tab */}
              <TabsContent value="payments">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Payment Methods</CardTitle>
                    <Button size="sm">
                      <Plus className="h-4 w-4 mr-2" />
                      Add Card
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <CreditCard className="h-16 w-16 text-text-muted mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        No payment methods added
                      </h3>
                      <p className="text-text-secondary mb-4">
                        Add a payment method to make checkout faster
                      </p>
                      <Button>Add Payment Method</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Account;