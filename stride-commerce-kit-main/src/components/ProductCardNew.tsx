import { Heart, ShoppingCart, RefreshCw, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    imageFront: string;
    imageBack?: string;
    colors?: string[];
    sizes?: string[];
    isHot?: boolean;
  };
  className?: string;
}

const ProductCardNew = ({ product, className = "" }: ProductCardProps) => {
  return (
    <Card
      className={`group relative overflow-hidden bg-white hover:shadow-lg transition-all duration-300 ${className}`}
    >
      <CardContent className="p-0">
        {/* Image container */}
        <div className="relative aspect-[3/4] overflow-hidden bg-surface">
          {/* Two images (front/back on hover) */}
          <img
            src={product.imageFront}
            alt={product.name}
            className="w-full h-full object-cover absolute inset-0 transition-opacity duration-500 group-hover:opacity-0"
          />
          {product.imageBack && (
            <img
              src={product.imageBack}
              alt={`${product.name} back`}
              className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
          )}

          {/* Hot badge */}
          {product.isHot && (
            <div className="absolute top-2 left-2">
              <Badge className="bg-orange-500 text-white text-xs px-2 py-1">
                Hot
              </Badge>
            </div>
          )}

          {/* Hover Right Side Buttons */}
          <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-white">
              <ShoppingCart className="h-4 w-4 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-white">
              <Heart className="h-4 w-4 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-white">
              <RefreshCw className="h-4 w-4 text-gray-600" />
            </Button>
            <Button variant="ghost" size="sm" className="h-8 w-8 p-0 bg-white">
              <Eye className="h-4 w-4 text-gray-600" />
            </Button>
          </div>

          {/* Hover bottom sizes */}
          {product.sizes && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {product.sizes.map((size) => (
                <Button
                  key={size}
                  variant="outline"
                  size="sm"
                  className="rounded-full px-3 py-1 text-xs bg-white"
                >
                  {size}
                </Button>
              ))}
            </div>
          )}
        </div>

        {/* Info Section */}
        <div className="p-3 space-y-2 text-center">
          {/* Product name */}
          <h3 className="font-medium text-sm text-gray-800 line-clamp-2 leading-tight">
            {product.name}
          </h3>

          {/* Price */}
          <div className="flex items-center justify-center gap-2">
            <span className="text-base font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          {/* Colors */}
          {product.colors && (
            <div className="flex justify-center gap-2">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className="w-4 h-4 rounded-full border cursor-pointer"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCardNew;
