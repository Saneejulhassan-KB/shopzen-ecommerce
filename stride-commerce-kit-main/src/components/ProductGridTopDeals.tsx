import ProductCardTopDeals from "./ProductCardTopDeals";

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

const ProductGridTopDeals = ({ products, className = "" }: ProductGridProps) => {
    return (
      <>
        {products.map((product) => (
          <ProductCardTopDeals
            key={product.id}
            product={product}
            className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-36 cursor-pointer"
          />
        ))}
      </>
    )
  };
  
  
  


export default ProductGridTopDeals;