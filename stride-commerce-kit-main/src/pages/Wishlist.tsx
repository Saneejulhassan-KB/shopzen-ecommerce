import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, X } from "lucide-react";

const Wishlist = () => {
  const wishlistItems = [
    {
      id: "1",
      name: "Apple MacBook Air M2 Chip (13.6-inch, 8GB RAM, 256GB SSD)",
      price: 99900,
      originalPrice: 119900,
      rating: 4.7,
      reviewCount: 8920,
      image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=300&h=300&fit=crop",
      deliveryInfo: "Free delivery",
      isWishlisted: true
    },
    {
      id: "2",
      name: "Sony WH-1000XM5 Wireless Noise Canceling Headphones",
      price: 24990,
      originalPrice: 34990,
      rating: 4.6,
      reviewCount: 5670,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
      deliveryInfo: "Free delivery today",
      isWishlisted: true
    },
    {
      id: "3",
      name: "Canon EOS R6 Mark II Mirrorless Camera Body",
      price: 189900,
      originalPrice: 219900,
      rating: 4.8,
      reviewCount: 890,
      image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=300&h=300&fit=crop",
      isBestseller: true,
      deliveryInfo: "Free delivery",
      isWishlisted: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-text-primary">My Wishlist</h1>
            <p className="text-text-secondary">{wishlistItems.length} items</p>
          </div>
          
          {wishlistItems.length > 0 && (
            <Button variant="outline" className="flex items-center gap-2">
              <X className="h-4 w-4" />
              Clear All
            </Button>
          )}
        </div>

        {wishlistItems.length === 0 ? (
          <Card className="text-center py-16">
            <CardContent>
              <Heart className="h-16 w-16 text-text-muted mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                Your wishlist is empty
              </h2>
              <p className="text-text-secondary mb-6">
                Save items you love to your wishlist and never lose track of them!
              </p>
              <Button>Start Shopping</Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-8">
            {/* Wishlist Items */}
            <ProductGrid products={wishlistItems} />

            {/* Recommendations */}
            <section>
              <h2 className="text-2xl font-bold text-text-primary mb-6">
                You might also like
              </h2>
              <ProductGrid 
                products={wishlistItems.slice(0, 4)} 
                className="opacity-75"
              />
            </section>
          </div>
        )}
      </main>
    </div>
  );
};

export default Wishlist;