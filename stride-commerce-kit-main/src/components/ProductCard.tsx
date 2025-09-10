import { Heart, Star, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    rating: number;
    reviewCount: number;
    image: string;
    discount?: number;
    isWishlisted?: boolean;
    isBestseller?: boolean;
    deliveryInfo?: string;
  };
  className?: string;
}

const ProductCard = ({ product, className = "" }: ProductCardProps) => {
  const discountPercentage = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className={`group relative overflow-hidden bg-card hover:shadow-card-hover transition-all duration-300 ${className}`}>
      <CardContent className="p-0">
        {/* Image container */}
        <div className="relative aspect-square overflow-hidden bg-surface">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isBestseller && (
              <Badge className="bg-accent text-accent-foreground text-xs px-2 py-1">
                Bestseller
              </Badge>
            )}
            {discountPercentage > 0 && (
              <Badge className="bg-success text-success-foreground text-xs px-2 py-1">
                {discountPercentage}% off
              </Badge>
            )}
          </div>

          {/* Wishlist button */}
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2 h-8 w-8 p-0 bg-background/80 hover:bg-background"
          >
            <Heart 
              className={`h-4 w-4 ${product.isWishlisted ? 'fill-accent text-accent' : 'text-text-secondary'}`} 
            />
          </Button>

          {/* Quick add button - appears on hover */}
          <div className="absolute bottom-2 left-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button 
              size="sm" 
              className="w-full bg-primary hover:bg-primary-hover"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product info */}
        <div className="p-3 space-y-2">
          {/* Product name */}
          <h3 className="font-medium text-sm text-text-primary line-clamp-2 leading-tight">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1 bg-success text-success-foreground px-2 py-1 rounded text-xs font-medium">
              <Star className="h-3 w-3 fill-current" />
              {product.rating}
            </div>
            <span className="text-xs text-text-secondary">
              ({product.reviewCount.toLocaleString()})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-text-primary">
              ₹{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-text-secondary line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          {/* Delivery info */}
          {product.deliveryInfo && (
            <div className="text-xs text-success font-medium">
              {product.deliveryInfo}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;