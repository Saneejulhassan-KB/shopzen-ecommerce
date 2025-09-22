import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, Heart, Share2, Truck, Shield, RotateCcw, 
  Plus, Minus, MapPin 
} from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  // Mock product data
  const product = {
    id: id || "1",
    name: "Samsung Galaxy S23 Ultra 5G (Phantom Black, 256GB)",
    price: 89999,
    originalPrice: 124999,
    rating: 4.5,
    reviewCount: 12450,
    images: [
      "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&h=600&fit=crop",
      "https://images.unsplash.com/photo-1567581935884-3349723552ca?w=600&h=600&fit=crop"
    ],
    description: "Experience the ultimate in mobile technology with the Samsung Galaxy S23 Ultra. Featuring a stunning 6.8-inch Dynamic AMOLED display, advanced camera system with 200MP main sensor, and powerful performance that handles everything you throw at it.",
    features: [
      "6.8-inch Dynamic AMOLED 2X Display",
      "200MP + 12MP + 10MP + 10MP Quad Camera",
      "Snapdragon 8 Gen 2 Processor",
      "5000mAh Battery with 45W Fast Charging",
      "S Pen Included",
      "5G Ready"
    ],
    specifications: {
      "Display": "6.8-inch Dynamic AMOLED 2X",
      "Processor": "Snapdragon 8 Gen 2",
      "RAM": "12GB",
      "Storage": "256GB",
      "Camera": "200MP + 12MP + 10MP + 10MP",
      "Battery": "5000mAh",
      "OS": "Android 13"
    },
    seller: "TechWorld Store",
    inStock: true,
    deliveryDate: "Tomorrow, Dec 25"
  };

  const reviews = [
    {
      id: 1,
      user: "Rajesh K.",
      rating: 5,
      comment: "Excellent phone! Camera quality is outstanding and performance is smooth.",
      date: "2 days ago",
      verified: true
    },
    {
      id: 2,
      user: "Priya S.",
      rating: 4,
      comment: "Great display and battery life. S Pen is very useful for productivity.",
      date: "1 week ago",
      verified: true
    }
  ];

  const relatedProducts = [
    {
      id: "2",
      name: "iPhone 15 Pro Max",
      price: 134900,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=300&h=300&fit=crop",
      rating: 4.6
    },
    {
      id: "3",
      name: "Google Pixel 8 Pro",
      price: 84999,
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=300&fit=crop",
      rating: 4.4
    }
  ];

  const discountPercentage = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-secondary mb-6">
          <span>Home</span> / <span>Electronics</span> / <span>Smartphones</span> / 
          <span className="text-text-primary ml-1">{product.name}</span>
        </nav>

        <div className="grid lg:grid-cols-[40%_60%] gap-8 mb-12">
          {/* Product Images - Sticky */}
          <div className="relative">
            <div className="sticky top-20 space-y-4 max-h-[calc(100vh-5rem)] overflow-hidden">
              {/* Main Image */}
              <div className="h-[400px] bg-surface rounded-xl overflow-hidden relative flex items-center justify-center">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className="bg-background/80 hover:bg-background"
                  >
                    <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-accent text-accent' : ''}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="bg-background/80 hover:bg-background"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Thumbnails (scrollable if overflow) */}
              <div className="grid grid-cols-4 gap-2 max-h-[140px] overflow-y-auto pr-1">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary' : 'border-border'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Product ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-text-primary mb-2">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1 bg-success text-success-foreground px-2 py-1 rounded text-sm font-medium">
                <Star className="h-4 w-4 fill-current" />
                {product.rating}
              </div>
              <span className="text-text-secondary">{product.reviewCount.toLocaleString()} ratings</span>
            </div>

            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl font-bold text-text-primary">₹{product.price.toLocaleString()}</span>
              <span className="text-lg text-text-secondary line-through">₹{product.originalPrice.toLocaleString()}</span>
              <Badge className="bg-success text-success-foreground">{discountPercentage}% off</Badge>
            </div>

            <p className="text-text-secondary leading-relaxed">{product.description}</p>

            {/* Key Features */}
            <div>
              <h3 className="font-semibold text-text-primary mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-text-secondary">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Delivery Info */}
            <Card>
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-success" />
                  <div>
                    <div className="font-medium text-text-primary">Free Delivery</div>
                    <div className="text-sm text-text-secondary">{product.deliveryDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <RotateCcw className="h-5 w-5 text-primary" />
                  <div>
                    <div className="font-medium text-text-primary">7 Days Return</div>
                    <div className="text-sm text-text-secondary">Easy return policy</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <div>
                    <div className="font-medium text-text-primary">1 Year Warranty</div>
                    <div className="text-sm text-text-secondary">Brand warranty included</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            

            {/* Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-text-secondary">Quantity:</span>
                <div className="flex items-center border border-border rounded">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-10 w-10 p-0"
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-10 w-10 p-0"
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button className="h-12" variant="outline">Add to Cart</Button>
                <Button className="h-12">Buy Now</Button>
              </div>
            </div>

            <div className="text-sm text-text-secondary">
              <MapPin className="h-4 w-4 inline mr-1" />
              Sold by: <span className="text-text-primary font-medium">{product.seller}</span>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <Tabs defaultValue="reviews" className="mb-12">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="specifications">Specifications</TabsTrigger>
            <TabsTrigger value="qna">Q&A</TabsTrigger>
          </TabsList>
          
          <TabsContent value="reviews" className="space-y-6">
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="text-3xl font-bold text-text-primary mb-2">{product.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`h-4 w-4 ${star <= product.rating ? 'fill-warning text-warning' : 'text-border'}`}
                      />
                    ))}
                  </div>
                  <div className="text-text-secondary">{product.reviewCount.toLocaleString()} ratings</div>
                </CardContent>
              </Card>
              
              <div className="md:col-span-2 space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-text-primary">{review.user}</span>
                          {review.verified && (
                            <Badge variant="secondary" className="text-xs">Verified</Badge>
                          )}
                        </div>
                        <span className="text-sm text-text-secondary">{review.date}</span>
                      </div>
                      <div className="flex items-center gap-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`h-3 w-3 ${star <= review.rating ? 'fill-warning text-warning' : 'text-border'}`}
                          />
                        ))}
                      </div>
                      <p className="text-text-secondary">{review.comment}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="specifications">
            <Card>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-border">
                      <span className="text-text-secondary">{key}</span>
                      <span className="font-medium text-text-primary">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="qna">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-text-secondary">No questions yet. Be the first to ask!</p>
                <Button className="mt-4">Ask a Question</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Related Products */}
        <section>
          <h2 className="text-2xl font-bold text-text-primary mb-6">Related Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-card-hover transition-shadow">
                <CardContent className="p-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full aspect-square object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-text-primary mb-2 line-clamp-2">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-3 w-3 fill-warning text-warning" />
                      <span className="text-sm text-text-secondary">{product.rating}</span>
                    </div>
                    <div className="font-bold text-text-primary">₹{product.price.toLocaleString()}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetail;
