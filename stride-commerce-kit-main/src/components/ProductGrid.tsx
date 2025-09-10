import ProductCard from "./ProductCard";

interface Product {
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
}

interface ProductGridProps {
  products: Product[];
  className?: string;
}

const ProductGrid = ({ products, className = "" }: ProductGridProps) => {
  return (
    <div className={`grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          className="cursor-pointer"
        />
      ))}
    </div>
  );
};

export default ProductGrid;