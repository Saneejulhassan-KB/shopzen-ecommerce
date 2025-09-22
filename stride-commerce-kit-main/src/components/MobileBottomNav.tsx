import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Home, Search, ShoppingCart, User, Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const navItems = [
  { name: "Home", icon: Home, path: "/" },
  { name: "Wishlist", icon: Heart, path: "/wishlist", badge: 2 },
  { name: "Cart", icon: ShoppingCart, path: "/cart", badge: 3 },
  { name: "Account", icon: User, path: "/account" },
];

const MobileBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIndex, setActiveIndex] = useState(
    navItems.findIndex((item) => item.path === location.pathname) || 0
  );

  const handleNavigation = (index, path) => {
    setActiveIndex(index);
    navigate(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-inner z-50 md:hidden">
      <div className="flex justify-around items-center py-3">
        {navItems.map((item, index) => {
          const isActive = index === activeIndex;
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => handleNavigation(index, item.path)}
              className="relative flex flex-col items-center text-sm"
            >
              <div
                className={`flex items-center justify-center h-10 w-10 rounded-full transition-all ${
                  isActive ? "bg-primary text-white" : "text-gray-500"
                }`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <span className={`text-[10px] mt-1 ${isActive ? "text-primary" : "text-gray-500"}`}>
                {item.name}
              </span>
              {item.badge && (
                <Badge className="absolute -top-1 -right-1 h-4 w-4 flex items-center justify-center p-0 text-xs bg-red-500 text-white rounded-full">
                  {item.badge}
                </Badge>
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileBottomNav;
