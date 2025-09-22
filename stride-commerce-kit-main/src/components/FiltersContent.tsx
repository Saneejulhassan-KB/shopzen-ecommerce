"use client";

import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface FiltersContentProps {
  priceRange: number[];
  setPriceRange: (value: number[]) => void;
  selectedBrands: string[];
  setSelectedBrands: (brands: string[]) => void;
}

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

export default function FiltersContent({
  priceRange,
  setPriceRange,
  selectedBrands,
  setSelectedBrands,
}: FiltersContentProps) {
  const activeFiltersCount =
    selectedBrands.length +
    (priceRange[0] > 0 || priceRange[1] < 100000 ? 1 : 0);

  return (
    <div className="space-y-6">
      {/* Active filters */}
      {activeFiltersCount > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedBrands.map((brand) => (
            <Badge
              key={brand}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {brand}
              <X
                className="h-3 w-3 cursor-pointer"
                onClick={() =>
                  setSelectedBrands(selectedBrands.filter((b) => b !== brand))
                }
              />
            </Badge>
          ))}
        </div>
      )}

      {/* Categories */}
      <div className="space-y-2">
        <h4 className="font-medium text-text-primary">Categories</h4>
        {categories.map((category) => (
          <div key={category} className="flex items-center space-x-2">
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

      {/* Price Range */}
      <div className="space-y-2">
        <h4 className="font-medium text-text-primary">Price Range</h4>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          max={100000}
          step={1000}
          className="w-full"
        />
        <div className="flex justify-between mt-1 text-sm text-text-secondary">
          <span>₹{priceRange[0].toLocaleString()}</span>
          <span>₹{priceRange[1].toLocaleString()}</span>
        </div>
      </div>

      {/* Brands */}
      <div className="space-y-2 max-h-48 overflow-y-auto">
        <h4 className="font-medium text-text-primary">Brands</h4>
        {brands.map((brand) => (
          <div key={brand} className="flex items-center space-x-2">
            <Checkbox
              id={brand}
              checked={selectedBrands.includes(brand)}
              onCheckedChange={(checked) => {
                if (checked) {
                  setSelectedBrands([...selectedBrands, brand]);
                } else {
                  setSelectedBrands(selectedBrands.filter((b) => b !== brand));
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

      {/* Customer Rating */}
      <div className="space-y-2">
        <h4 className="font-medium text-text-primary">Customer Rating</h4>
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
  );
}
