import { useState, useEffect, useRef } from "react";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const slidesRef = useRef<HTMLDivElement | null>(null);

  const slides = [
    {
      id: 1,
      title: "Mega Electronics Sale",
      subtitle: "Up to 80% off on Smartphones, Laptops & More",
      image:
        "https://marketing.x.com/content/dam/marketing-twitter/apac/en_gb/success-stories/flipkart-bigbillionmuqabla-2021/masthead.jpg.twimg.1920.jpg",
    },
    {
      id: 2,
      title: "Fashion Fiesta",
      subtitle: "Trending Styles for Every Season",
      image: "https://i.ytimg.com/vi/s1RSOfoeJm4/maxresdefault.jpg",
    },
    {
      id: 3,
      title: "Home Makeover",
      subtitle: "Transform Your Space with Premium Furniture",
      image: "https://i.ytimg.com/vi/jSHbLcvgPFc/maxresdefault.jpg",
    },
  ];

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  // Touch Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].clientX - startX;
    setTranslateX(diff);
  };

  const handleTouchEnd = () => {
    finishDrag();
  };

  // Mouse Handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.clientX - startX;
    setTranslateX(diff);
  };

  const handleMouseUp = () => {
    finishDrag();
  };

  const handleMouseLeave = () => {
    if (isDragging) finishDrag();
  };

  // Common function for finishing drag
  const finishDrag = () => {
    if (translateX > 50) {
      // swipe right → previous
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    } else if (translateX < -50) {
      // swipe left → next
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }
    setIsDragging(false);
    setTranslateX(0);
  };

  return (
    <div
      className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides */}
      <div
        ref={slidesRef}
        className={`flex h-full transition-transform duration-500 ease-in-out ${
          isDragging ? "transition-none" : ""
        }`}
        style={{
          transform: `translateX(calc(-${
            currentSlide * 100
          }% + ${translateX}px))`,
        }}
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

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide ? "bg-white w-6" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
