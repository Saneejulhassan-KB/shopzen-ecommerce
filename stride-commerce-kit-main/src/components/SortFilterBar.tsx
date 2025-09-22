"use client";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";
import FiltersContent from "./FiltersContent";

const SortFilterBar = ({
  activeFiltersCount = 0,
  priceRange,
  setPriceRange,
  selectedBrands,
  setSelectedBrands,
}) => {
  const [sort, setSort] = useState("popularity");

  const sortOptions = [
    { label: "Popularity", value: "popularity" },
    { label: "Price – Low to High", value: "price-low" },
    { label: "Price – High to Low", value: "price-high" },
    { label: "Newest First", value: "newest" },
    { label: "Customer Rating", value: "rating" },
    { label: "Discount", value: "discount" },
  ];

  return (
    <div className="w-full mb-4 sticky top-[64px] bg-background z-40">
      {/* ---------- Mobile View (Sort + Filter) ---------- */}
      <div className="flex justify-between items-center border border-border rounded-md md:hidden">
        {/* SORT Drawer */}
        <Drawer>
          <DrawerTrigger asChild>
            <button className="flex-1 py-2 text-center text-sm font-medium border-r border-border">
              Sort
            </button>
          </DrawerTrigger>
          <DrawerContent className="rounded-t-2xl p-4 w-full max-h-fit">
            <DrawerHeader>
              <DrawerTitle className="text-center">SORT BY</DrawerTitle>
            </DrawerHeader>

            <div className="flex flex-col gap-2 mt-2">
              {sortOptions.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSort(option.value)}
                  className={`flex justify-between items-center py-2 border-b last:border-0 ${
                    sort === option.value
                      ? "text-primary font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {option.label}
                  {sort === option.value && (
                    <span className="h-4 w-4 rounded-full border-2 border-primary flex items-center justify-center">
                      <span className="h-2 w-2 bg-primary rounded-full"></span>
                    </span>
                  )}
                </button>
              ))}
            </div>

            <div className="mt-4">
              <DrawerClose asChild>
                <Button className="w-full">Apply</Button>
              </DrawerClose>
            </div>
          </DrawerContent>
        </Drawer>

        {/* FILTER Sheet (slide in from right) */}
        {/* FILTER Sheet (slide in from left like Flipkart) */}
        {/* FILTER Sheet (slide in from left like Flipkart) */}
        <Sheet>
          {/* ✅ This makes your button actually open the sheet */}
          <SheetTrigger asChild>
            <button className="flex-1 py-2 text-center text-sm font-medium relative">
              <Filter className="h-4 w-4 inline mr-2" />
              Filter
              {activeFiltersCount > 0 && (
                <Badge className="ml-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                  {activeFiltersCount}
                </Badge>
              )}
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="w-[80%] sm:w-[400px] p-6 overflow-y-auto"
          >
            <SheetHeader>
              <SheetTitle>Filters</SheetTitle>
            </SheetHeader>

            <FiltersContent
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              selectedBrands={selectedBrands}
              setSelectedBrands={setSelectedBrands}
            />

            <div className="mt-6">
              <SheetClose asChild>
                <Button className="w-full">Apply Filters</Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* ---------- Tablet & Desktop View (Horizontal Sort Options) ---------- */}
      <div className="hidden md:flex items-center gap-6 text-sm font-medium text-text-secondary">
        {sortOptions.map((option) => (
          <button
            key={option.value}
            onClick={() => setSort(option.value)}
            className={`hover:text-primary ${
              sort === option.value ? "text-primary" : ""
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SortFilterBar;
