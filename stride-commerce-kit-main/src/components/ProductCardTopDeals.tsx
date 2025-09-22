interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    image: string;
    captionType?: "price" | "discount" | "shop"; // caption type
  };
  className?: string;
}

const ProductCardTopDeals = ({ product, className = "" }: ProductCardProps) => {
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : product.discount || 0;

  let caption = "";
  if (product.captionType === "price") {
    caption = `From ₹${product.price.toLocaleString()}`;
  } else if (product.captionType === "discount" && discountPercentage > 0) {
    caption = `${discountPercentage}% Off`;
  } else {
    caption = "Shop Now";
  }

  return (
    <div
      className={`group flex-shrink-0 w-32 sm:w-40 md:w-48 ${className}`}
    >
      <div className="bg-white rounded-lg shadow-sm p-3 flex flex-col items-center text-center hover:shadow-md transition-shadow">
        {/* Image */}
        <div className="relative w-24 h-24 sm:w-32 sm:h-32 flex items-center justify-center overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Name */}
        <h3 className="mt-2 text-xs sm:text-sm font-medium text-gray-800 line-clamp-1">
          {product.name}
        </h3>

        {/* Caption */}
        <p className="mt-1 text-xs sm:text-sm font-semibold text-blue-600">
          {caption}
        </p>
      </div>
    </div>
  );
};

export default ProductCardTopDeals;
