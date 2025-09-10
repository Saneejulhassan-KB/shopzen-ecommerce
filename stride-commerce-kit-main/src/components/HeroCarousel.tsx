import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Mega Electronics Sale",
      subtitle: "Up to 80% off on Smartphones, Laptops & More",
      image:
        "https://marketing.x.com/content/dam/marketing-twitter/apac/en_gb/success-stories/flipkart-bigbillionmuqabla-2021/masthead.jpg.twimg.1920.jpg",
      cta: "Shop Now",
      bgColor: "bg-gradient-primary",
    },
    {
      id: 2,
      title: "Fashion Fiesta",
      subtitle: "Trending Styles for Every Season",
      image:
        "https://cms.klubworks.com/content/images/2023/12/Artboard-1--23-.jpg",
      cta: "Explore Fashion",
      bgColor: "bg-gradient-accent",
    },
    {
      id: 3,
      title: "Home Makeover",
      subtitle: "Transform Your Space with Premium Furniture",
      image: "https://i.ytimg.com/vi/jSHbLcvgPFc/maxresdefault.jpg",
      cta: "Shop Home",
      bgColor: "bg-primary",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl bg-surface">
      {/* Slides */}
      <div
        className="flex h-full  transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full h-full relative flex items-center justify-center"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="sm"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={goToPrevious}
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      <Button
        variant="ghost"
        size="sm"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={goToNext}
      >
        <ChevronRight className="h-5 w-5" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
