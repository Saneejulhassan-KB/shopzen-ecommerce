import { useState } from "react";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Filter, Grid, List, X } from "lucide-react";

const ProductListing = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  // Mock product data with more items for pagination
  const products = Array.from({ length: 24 }, (_, index) => ({
    id: `product-${index + 1}`,
    name: `Premium Product ${index + 1} - High Quality Specification`,
    price: Math.floor(Math.random() * 50000) + 5000,
    originalPrice: Math.floor(Math.random() * 70000) + 10000,
    rating: Number((Math.random() * 2 + 3).toFixed(1)),
    reviewCount: Math.floor(Math.random() * 10000) + 100,
    image: `https://images.unsplash.com/photo-${1500000000000 + index}?w=300&h=300&fit=crop`,
    isBestseller: Math.random() > 0.7,
    isWishlisted: Math.random() > 0.8,
    deliveryInfo: Math.random() > 0.5 ? "Free delivery" : "Free delivery tomorrow"
  }));

  const brands = ["Samsung", "Apple", "Sony", "Nike", "Canon", "Xiaomi", "LG", "HP"];
  const categories = ["All", "Electronics", "Fashion", "Home", "Sports", "Beauty"];

  const activeFiltersCount = selectedBrands.length + (priceRange[0] > 0 || priceRange[1] < 100000 ? 1 : 0);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Breadcrumb */}
        <nav className="text-sm text-text-secondary mb-6">
          <span>Home</span> / <span>Electronics</span> / <span className="text-text-primary">Smartphones</span>
        </nav>

        {/* Results header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Smartphones</h1>
            <p className="text-text-secondary">Showing {products.length} results</p>
          </div>
          
          <div className="flex items-center gap-4">
            {/* View mode toggle */}
            <div className="hidden md:flex border border-border rounded-lg p-1">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>

            {/* Sort dropdown */}
            <Select defaultValue="popularity">
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Popularity</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Customer Rating</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
              </SelectContent>
            </Select>

            {/* Filter toggle for mobile */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden"
            >
              <Filter className="h-4 w-4 mr-2" />
              Filters
              {activeFiltersCount > 0 && (
                <Badge className="ml-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {activeFiltersCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>

        <div className="flex gap-6">
          {/* Filters Sidebar */}
          <aside className={`
            w-80 flex-shrink-0 space-y-6
            ${showFilters ? 'block' : 'hidden'} md:block
          `}>
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
                        <Badge key={brand} variant="secondary" className="flex items-center gap-1">
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
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox id={category} />
                        <label htmlFor={category} className="text-sm text-text-secondary cursor-pointer">
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
                              setSelectedBrands(selectedBrands.filter(b => b !== brand));
                            }
                          }}
                        />
                        <label htmlFor={brand} className="text-sm text-text-secondary cursor-pointer">
                          {brand}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className="space-y-4">
                  <h4 className="font-medium text-text-primary">Customer Rating</h4>
                  <div className="space-y-2">
                    {[4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox id={`rating-${rating}`} />
                        <label htmlFor={`rating-${rating}`} className="text-sm text-text-secondary cursor-pointer">
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
            <ProductGrid products={products} />

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2 mt-8">
              <Button variant="outline" size="sm">Previous</Button>
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
              <Button variant="outline" size="sm">Next</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductListing;