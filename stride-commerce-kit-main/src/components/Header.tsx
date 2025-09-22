import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCart,
  User,
  MapPin,
  Heart,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import MobileBottomNav from "./MobileBottomNav";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const navigate = useNavigate();

  const scrollRef = useRef<HTMLDivElement>(null);

  // Mouse drag scroll state
  let isDown = false;
  let startX: number;
  let scrollLeft: number;

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDown = true;
    startX = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDown = false;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // speed factor
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const categories = [
    {
      name: "Electronics",
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/af646c36d74c4be9.png?q=100",
    },
    {
      name: "Fashion",
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/ff559cb9d803d424.png?q=100",
    },
    {
      name: "Furniture",
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/1788f177649e6991.png?q=100",
    },
    {
      name: "TV and Appliances",
      image:
        "https://rukminim1.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100",
    },
    {
      name: "Sports",
      image: "./sports.png",
    },
    {
      name: "Toys",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/b3020c99672953b9.png?q=100",
    },
    {
      name: "Automotive",
      image: "https://img.icons8.com/color/96/000000/car.png",
    },
    {
      name: "Health",
      image: "https://img.icons8.com/color/96/000000/heart-health.png",
    },
    {
      name: "Grocery",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e730a834ad950bae.png?q=100",
    },
    {
      name: "Jewelry Accessories",
      image: "https://img.icons8.com/color/96/000000/necklace.png",
    },
    {
      name: "Appliances",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/e90944802d996756.jpg?q=100",
    },
    {
      name: "Mobile & Tablets",
      image:
        "https://rukminim2.flixcart.com/fk-p-flap/64/64/image/5f2ee7f883cdb774.png?q=100",
    },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
    }
  };

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsCompact(true);
      } else {
        setIsCompact(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        {/* Top bar */}
        <div className="bg-primary">
          <div className=" mx-auto px-4 py-2">
            <div className="flex items-center justify-between text-primary-foreground text-sm">
              <div className="flex items-center gap-4">
                <span>Free delivery on orders above ₹499</span>
              </div>
              <div className="hidden md:flex items-center gap-4">
                <span>Customer Care</span>
                <span>Track Order</span>
              </div>
            </div>
          </div>
        </div>

        
        {/* Main header */}
        <div className="mx-auto px-4 py-3">
          {/* 🔹 Mobile: Logo (left) + Location (right) */}
          <div className="flex items-center justify-between md:hidden">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <h1 className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ShopZen
              </h1>
            </Link>

            {/* Location → right aligned on mobile */}
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-text-secondary" />
              <div>
                <div className="text-text-secondary text-xs leading-none">
                  Deliver to
                </div>
                <div className="font-medium text-sm">Mumbai 400001</div>
              </div>
            </div>
          </div>

          {/* 🔹 Desktop: Logo + Location + Search + Actions */}
          <div className="hidden md:flex items-center justify-between gap-6">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ShopZen
              </h1>
            </Link>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm">
              <MapPin className="h-4 w-4 text-text-secondary" />
              <div>
                <div className="text-text-secondary">Deliver to</div>
                <div className="font-medium">Mumbai 400001</div>
              </div>
            </div>

            {/* Desktop Search */}
            <form onSubmit={handleSearch} className="flex-1 max-w-2xl mx-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-4 pr-12 h-12 bg-surface border border-border rounded-lg 
                     focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-1 top-1 h-10"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <Link to="/account">
                <Button
                  variant="ghost"
                  size="sm"
                  className="items-center gap-2"
                >
                  <User className="h-5 w-5" />
                  <span className="hidden lg:inline">Account</span>
                </Button>
              </Link>
              <Link to="/wishlist">
                <Button
                  variant="ghost"
                  size="sm"
                  className="items-center gap-2"
                >
                  <Heart className="h-5 w-5" />
                  <span className="hidden lg:inline">Wishlist</span>
                </Button>
              </Link>
              <Link to="/cart">
                <Button variant="ghost" size="sm" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent">
                    3
                  </Badge>
                </Button>
              </Link>
            </div>
          </div>

          {/* 🔹 Mobile Search (always below logo+location row) */}
          <form onSubmit={handleSearch} className="block md:hidden mt-3">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-4 pr-12 h-10 bg-surface border border-border rounded-lg 
                   focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-sm"
              />
              <Button
                type="submit"
                size="sm"
                className="absolute right-1 top-1 h-8"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>

        {/* 🔹 Mobile Search Popup */}
        {isSearchOpen && (
          <div className="fixed inset-0 z-50 flex flex-col justify-end bg-black/40">
            <div className="bg-background p-4 rounded-t-2xl shadow-lg animate-slide-up">
              <div className="flex items-center gap-2">
                <form onSubmit={handleSearch} className="flex-1">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search for products, brands and more"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      autoFocus
                      className="w-full pl-4 pr-12 h-12 bg-surface border border-border rounded-lg focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      className="absolute right-1 top-1 h-10"
                    >
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSearchOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Categories menu */}
        <div className="border-t border-border bg-surface sticky top-0 z-40">
          <div className="w-full">
            <div
              ref={scrollRef}
              className="flex items-center gap-4 sm:gap-6 py-3 overflow-x-auto scrollbar-hide cursor-grab "
              style={{ scrollSnapType: "x mandatory" }}
              onMouseDown={handleMouseDown}
              onMouseLeave={handleMouseLeave}
              onMouseUp={handleMouseUp}
              onMouseMove={handleMouseMove}
            >
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={`/category/${category.name
                    .toLowerCase()
                    .replace(/\s+/g, "-")}`}
                  className="flex-shrink-0 w-16 sm:w-20 md:w-24 text-center group scroll-snap-align-start"
                >
                  <div className="flex flex-col items-center">
                    {!isCompact && (
                      <img
                        src={category.image}
                        alt={category.name}
                        className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain mb-1 transition-transform group-hover:scale-110"
                        style={{ width: "800px" }}
                      />
                    )}
                    <span className="font-medium truncate transition-all duration-200 text-[10px] sm:text-xs md:text-sm group-hover:text-primary">
                      {category.name}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </header>
      <MobileBottomNav />
    </>
  );
};

export default Header;
