import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CategorySection from "@/components/CategorySection";
import ProductGrid from "@/components/ProductGrid";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Truck, Shield, Clock } from "lucide-react";

const Home = () => {
  // Mock product data
  const topDeals = [
    {
      id: "1",
      name: "Samsung Galaxy S23 Ultra 5G (Phantom Black, 256GB)",
      price: 89999,
      originalPrice: 124999,
      rating: 4.5,
      reviewCount: 12450,
      image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=300&h=300&fit=crop",
      isBestseller: true,
      deliveryInfo: "Free delivery tomorrow"
    },
    {
      id: "2", 
      name: "Apple MacBook Air M2 Chip (13.6-inch, 8GB RAM, 256GB SSD)",
      price: 99900,
      originalPrice: 119900,
      rating: 4.7,
      reviewCount: 8920,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
      deliveryInfo: "Free delivery"
    },
    {
      id: "3",
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: 24990,
      originalPrice: 34990,
      rating: 4.6,
      reviewCount: 5670,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      isWishlisted: true,
      deliveryInfo: "Free delivery today"
    },
    {
      id: "4",
      name: "Nike Air Max 270 Running Shoes",
      price: 8995,
      originalPrice: 12995,
      rating: 4.3,
      reviewCount: 3240,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
      deliveryInfo: "Free delivery"
    },
    {
      id: "5",
      name: "Canon EOS R6 Mark II Mirrorless Camera Body",
      price: 189900,
      originalPrice: 219900,
      rating: 4.8,
      reviewCount: 890,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop",
      isBestseller: true,
      deliveryInfo: "Free delivery"
    },
    {
      id: "6",
      name: "Xiaomi 55 inch 4K Ultra HD Smart LED TV",
      price: 32999,
      originalPrice: 54999,
      rating: 4.4,
      reviewCount: 15600,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=300&h=300&fit=crop",
      deliveryInfo: "Free installation"
    }
  ];

  const features = [
    {
      icon: Truck,
      title: "Free Delivery",
      description: "On orders above ₹499"
    },
    {
      icon: Shield,
      title: "Secure Payment",
      description: "100% safe & secure"
    },
    {
      icon: Clock,
      title: "Easy Returns",
      description: "7 days return policy"
    },
    {
      icon: Star,
      title: "Top Quality",
      description: "Guaranteed products"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="py-6">
          <div className="container mx-auto px-4">
            <HeroCarousel />
          </div>
        </section>

        {/* Features */}
        <section className="py-6 bg-surface">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3 text-center md:text-left">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="md:block">
  <h3 className="font-semibold text-text-primary text-sm sm:text-base md:text-lg">
    {feature.title}
  </h3>
  <p className="text-[10px] sm:text-xs md:text-sm text-text-secondary">
    {feature.description}
  </p>
</div>

                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <CategorySection />

        {/* Top Deals */}
        <section className="py-8 bg-surface">
          <div className="container mx-auto px-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold text-text-primary">
                  Top Deals of the Day
                </CardTitle>
                <Button variant="ghost" className="text-primary">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <ProductGrid products={topDeals} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Trending Products */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold text-text-primary">
                  Trending Now
                </CardTitle>
                <Button variant="ghost" className="text-primary">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <ProductGrid products={topDeals.slice(0, 5)} />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-12 bg-gradient-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Latest Offers
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and get exclusive deals, new arrivals, and special discounts delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <Button className="bg-accent hover:bg-accent-hover text-accent-foreground">
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-text-primary text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">ShopZen</h3>
              <p className="text-white/80 mb-4">
                Your one-stop destination for everything you need. Quality products, great prices, fast delivery.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/80">
                <li>About Us</li>
                <li>Contact</li>
                <li>Careers</li>
                <li>Press</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-white/80">
                <li>Help Center</li>
                <li>Track Order</li>
                <li>Returns</li>
                <li>Shipping Info</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-white/80">
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>Cookie Policy</li>
                <li>Refund Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 ShopZen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;