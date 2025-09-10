import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import ProductGrid from "@/components/ProductGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, X } from "lucide-react";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Mock search results
  const searchResults = Array.from({ length: 16 }, (_, index) => ({
    id: `search-${index + 1}`,
    name: `${query} Product ${index + 1} - Premium Quality`,
    price: Math.floor(Math.random() * 50000) + 5000,
    originalPrice: Math.floor(Math.random() * 70000) + 10000,
    rating: Number((Math.random() * 2 + 3).toFixed(1)),
    reviewCount: Math.floor(Math.random() * 10000) + 100,
    image: `https://images.unsplash.com/photo-${1500000000000 + index}?w=300&h=300&fit=crop`,
    isBestseller: Math.random() > 0.8,
    isWishlisted: Math.random() > 0.9,
    deliveryInfo: Math.random() > 0.5 ? "Free delivery" : "Free delivery tomorrow"
  }));

  const suggestions = [
    `${query} case`,
    `${query} accessories`,
    `${query} charger`,
    `${query} cover`,
    `best ${query}`,
    `${query} price`
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Search Info */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-sm text-text-secondary mb-2">
            <Search className="h-4 w-4" />
            <span>Search results for</span>
            <Badge variant="secondary" className="font-medium">
              "{query}"
            </Badge>
          </div>
          <p className="text-text-secondary">
            Showing {searchResults.length} results
          </p>
        </div>

        {/* Search Suggestions */}
        {suggestions.length > 0 && (
          <Card className="mb-6">
            <CardContent className="p-4">
              <h3 className="font-medium text-text-primary mb-3">Related Searches</h3>
              <div className="flex flex-wrap gap-2">
                {suggestions.map((suggestion, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-primary hover:bg-primary-light"
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Sort and Filter */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>
          
          <div className="flex items-center gap-4">
            <select className="px-3 py-2 border border-border rounded-lg bg-background text-text-primary">
              <option>Sort by Relevance</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Customer Rating</option>
              <option>Newest First</option>
            </select>
          </div>
        </div>

        {/* Results */}
        {searchResults.length > 0 ? (
          <div className="space-y-8">
            <ProductGrid products={searchResults} />
            
            {/* Load More */}
            <div className="text-center">
              <Button variant="outline" size="lg">
                Load More Results
              </Button>
            </div>
          </div>
        ) : (
          <Card className="text-center py-16">
            <CardContent>
              <Search className="h-16 w-16 text-text-muted mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-text-primary mb-2">
                No results found for "{query}"
              </h2>
              <p className="text-text-secondary mb-6">
                Try different keywords or check your spelling
              </p>
              <div className="space-y-2">
                <p className="text-sm font-medium text-text-primary">Suggestions:</p>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Check your spelling</li>
                  <li>• Use different keywords</li>
                  <li>• Try more general terms</li>
                  <li>• Browse our categories instead</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Popular Categories */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text-primary mb-6">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {["Electronics", "Fashion", "Home", "Sports", "Beauty", "Books"].map((category) => (
              <Card key={category} className="cursor-pointer hover:shadow-card-hover transition-shadow">
                <CardContent className="p-4 text-center">
                  <h3 className="font-medium text-text-primary">{category}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default SearchResults;