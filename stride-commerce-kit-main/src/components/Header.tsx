import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Search, ShoppingCart, User, MapPin, Heart, Menu, X, ChevronRight  } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

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
      image: "https://img.icons8.com/color/96/000000/laptop.png",
    },
    {
      name: "Fashion",
      image: "https://img.icons8.com/color/96/000000/t-shirt.png",
      subcategories: [
        {
          title: "Men",
          items: ["Men's Top Wear", "Men's Bottom Wear", "Men Footwear"],
        },
        {
          title: "Women Ethnic",
          items: [
            "Women Sarees",
            "Women Kurtas & Kurtis",
            "Ethnic Dresses",
            "Women Gowns",
            "Women Blouse",
          ],
        },
        {
          title: "Women Western",
          items: ["Dresses", "Tops", "Jeans", "Skirts"],
        },
      ],
    },
    {
      name: "Home & Kitchen",
      image: "https://img.icons8.com/color/96/000000/sofa.png",
    },
    {
      name: "Books",
      image: "https://img.icons8.com/color/96/000000/books.png",
    },
    {
      name: "Sports",
      image: "https://img.icons8.com/color/96/000000/football.png",
    },
    {
      name: "Toys",
      image: "https://img.icons8.com/color/96/000000/teddy-bear.png",
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
      image: "https://img.icons8.com/color/96/000000/grocery-bag.png",
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
    <header className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      {/* Top bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2">
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
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <Link to="/" className="flex items-center gap-2">
              <h1 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                ShopZen
              </h1>
            </Link>
          </div>

          {/* Location */}
          <div className="hidden md:flex items-center gap-2 text-sm">
            <MapPin className="h-4 w-4 text-text-secondary" />
            <div>
              <div className="text-text-secondary">Deliver to</div>
              <div className="font-medium">Mumbai 400001</div>
            </div>
          </div>

          {/* Search */}
          <form
            onSubmit={handleSearch}
            className="hidden md:block flex-1 max-w-2xl mx-4"
          >
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
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

          {/* Actions */}
          <div className="flex items-center gap-2">

            {/* Mobile Search Icon */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsSearchOpen(true)}
            >
              <Search className="h-5 w-5" />
            </Button>

            <Link to="/account">
              <Button
                variant="ghost"
                size="sm"
                className=" md:flex items-center gap-2"
              >
                <User className="h-5 w-5" />
                <span className="hidden lg:inline">Account</span>
              </Button>
            </Link>

            <Link to="/wishlist">
              <Button
                variant="ghost"
                size="sm"
                className=" md:flex items-center gap-2"
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
              <Button variant="ghost" size="sm" onClick={() => setIsSearchOpen(false)}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Categories menu */}
      <div className="border-t border-border bg-surface sticky top-0 z-40">
        <div className="container mx-auto px-2 sm:px-4">
          <div
            ref={scrollRef}
            className="flex items-center gap-4 sm:gap-6 py-3 overflow-x-auto scrollbar-hide cursor-grab"
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
                className="flex-shrink-0 w-16 sm:w-20 md:w-24 text-center group"
              >
                <div className="flex flex-col items-center">
                  {!isCompact && (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 object-contain mb-1 transition-transform group-hover:scale-110"
                    />
                  )}
                  <span
                    className={`font-medium truncate transition-all duration-200 text-[10px] sm:text-xs md:text-sm group-hover:text-primary`}
                  >
                    {category.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
