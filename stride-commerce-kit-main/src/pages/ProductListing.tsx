import { useState } from "react";
import Header from "@/components/Header";
import ProductGridNew from "@/components/ProductGridNew";
import SortFilterBar from "@/components/SortFilterBar"; // ✅ use this new component
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { X } from "lucide-react";
import { dummyProducts } from "@/data/dummyProducts";

const ProductListing = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [priceRange, setPriceRange] = useState([0, 200000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const products = dummyProducts;

  const brands = [
    "Samsung",
    "Apple",
    "Sony",
    "Nike",
    "Canon",
    "Xiaomi",
    "LG",
    "HP",
  ];
  const categories = [
    "All",
    "Electronics",
    "Fashion",
    "Home",
    "Sports",
    "Beauty",
  ];

  const activeFiltersCount =
    selectedBrands.length +
    (priceRange[0] > 0 || priceRange[1] < 100000 ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className=" mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-secondary mb-6">
          <span>Home</span> / <span>Electronics</span> /{" "}
          <span className="text-text-primary">Smartphones</span>
        </nav>

        {/* ✅ Replace the old sort & filter with SortFilterBar */}
        <SortFilterBar
          activeFiltersCount={activeFiltersCount}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
        />

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <aside
            className={`
              w-80 flex-shrink-0 space-y-6
              ${showFilters ? "block" : "hidden"} md:block
            `}
          >
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-text-primary">Filters</h3>
                  {activeFiltersCount > 0 && (
                    <Button variant="ghost" size="sm" className="text-primary">
                      Clear All
                    </Button>
                  )}
                </div>

                {/* Active filters */}
                {activeFiltersCount > 0 && (
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {selectedBrands.map((brand) => (
                        <Badge
                          key={brand}
                          variant="secondary"
                          className="flex items-center gap-1"
                        >
                          {brand}
                          <X className="h-3 w-3 cursor-pointer" />
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}

                {/* Categories */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Categories</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div
                        key={category}
                        className="flex items-center space-x-2"
                      >
                        <Checkbox id={category} />
                        <label
                          htmlFor={category}
                          className="text-sm text-text-secondary cursor-pointer"
                        >
                          {category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Price Range</h4>
                  <div className="px-2">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={100000}
                      step={1000}
                      className="w-full"
                    />
                    <div className="flex justify-between mt-2 text-sm text-text-secondary">
                      <span>₹{priceRange[0].toLocaleString()}</span>
                      <span>₹{priceRange[1].toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Brands */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Brands</h4>
                  <div className="space-y-2 max-h-48 overflow-y-auto">
                    {brands.map((brand) => (
                      <div key={brand} className="flex items-center space-x-2">
                        <Checkbox
                          id={brand}
                          checked={selectedBrands.includes(brand)}
                          onCheckedChange={(checked) => {
                            if (checked) {
                              setSelectedBrands([...selectedBrands, brand]);
                            } else {
                              setSelectedBrands(
                                selectedBrands.filter((b) => b !== brand)
                              );
                            }
                          }}
                        />
                        <label
                          htmlFor={brand}
                          className="text-sm text-text-secondary cursor-pointer"
                        >
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">
                    Customer Rating
                  </h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label
                          htmlFor={`rating-${rating}`}
                          className="text-sm text-text-secondary cursor-pointer"
                        >
                          {rating}★ & above
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGridNew products={products} />

            {/* Pagination */}
            <div className="hidden sm:flex justify-center items-center gap-2 mt-8">
              <Button variant="outline" size="sm">
                Previous
              </Button>
              {[1, 2, 3, 4, 5].map((page) => (
                <Button
                  key={page}
                  variant={page === 1 ? "default" : "outline"}
                  size="sm"
                  className="w-10"
                >
                  {page}
                </Button>
              ))}
              <Button variant="outline" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductListing;
