import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import CategorySection from "@/components/CategorySection";
import ProductGridTopDeals from "@/components/ProductGridTopDeals";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, Star, Truck, Shield, Clock } from "lucide-react";
import FourLayerGrid from "@/components/FourLayerGrid";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Home = () => {
  // Mock product data
  const topDeals = [
    {
      id: "1",
      name: "Fans And Geysers",
      price: 89999,
      originalPrice: 124999,
      image:
        "https://rukminim2.flixcart.com/image/120/120/xif0q/water-geyser/m/9/7/-original-imahd77j8jh7hmge.jpeg?q=80",
      captionType: "discount",
    },
    {
      id: "2",
      name: "Home Essentials",
      price: 99900,
      image:
        "https://rukminim2.flixcart.com/image/120/120/xif0q/water-purifier/a/u/x/-original-imahdt5pq9bzzstb.jpeg?q=80",
      captionType: "shop",
    },
    {
      id: "3",
      name: "Projector",
      price: 24990,
      originalPrice: 124999,
      image:
        "https://rukminim2.flixcart.com/image/120/120/xif0q/projector/8/v/g/i9-pro-10-ei9027-led-projector-egate-original-imah5f7xgdsqhb9d.jpeg?q=80",
      captionType: "discount",
    },
    {
      id: "4",
      name: "Speakers",
      price: 4000,
      image:
        "https://rukminim2.flixcart.com/image/120/120/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=80",
      captionType: "price",
    },
    {
      id: "5",
      name: "Sonata",
      price: 5599,
      image:
        "https://rukminim2.flixcart.com/image/120/120/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=80",
      captionType: "price",
    },
    {
      id: "6",
      name: "Monitors",
      price: 24990,
      image:
        "https://rukminim2.flixcart.com/image/120/120/xif0q/monitor/3/y/r/b277-d6-full-hd-27-2025-um-hb7si-601-acer-original-imahef7gpxnc7t3m.jpeg?q=80",
      captionType: "shop",
    },
    {
      id: "7",
      name: "TV",
      price: 24990,
      image:
        "https://freepngimg.com/save/52653-led-television-free-png-hq/650x650",
      captionType: "shop",
    },
    {
      id: "8",
      name: "Samsung s22 Ultra",
      price: 24990,
      image:
        "https://img.global.news.samsung.com/in/wp-content/uploads/2022/01/SM-G990_S21FE_BackFront_ZW.png",
      captionType: "shop",
    },
    {
      id: "9",
      name: "Console Sony PlayStation",
      price: 24990,
      image:
        "https://horizonplay.fbitsstatic.net/img/p/console-sony-playstation-5-pro-cfi-7019-2-tb-versao-digital-branco-152252/338855-2.jpg?w=670&h=670&v=202509011310",
      captionType: "shop",
    },
  ];

  // const features = [
  //   {
  //     icon: Truck,
  //     title: "Free Delivery",
  //     description: "On orders above ₹499",
  //   },
  //   {
  //     icon: Shield,
  //     title: "Secure Payment",
  //     description: "100% safe & secure",
  //   },
  //   {
  //     icon: Clock,
  //     title: "Easy Returns",
  //     description: "7 days return policy",
  //   },
  //   {
  //     icon: Star,
  //     title: "Top Quality",
  //     description: "Guaranteed products",
  //   },
  // ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="">
          <div className=" mx-auto ">
            <HeroCarousel />
          </div>
        </section>

        {/* Features */}
        {/* <section className="py-6 bg-surface">
          <div className="mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center max-w-xs"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-text-primary text-sm sm:text-base md:text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs md:text-sm text-text-secondary">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Categories */}
        <CategorySection />

        {/* Top Deals */}
        <section className="py-8 bg-surface">
          <div className="mx-auto px-4">
            {/* Grid layout: cards + ad */}
            <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">
              {/* Deals Section */}
              <div
                className="relative rounded-lg shadow p-4 
             bg-gradient-to-r from-[#0F2027] via-[#2C5364] to-[#D4AF37] 
             lg:bg-white"
              >
                {/* Heading inside the container */}
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-white ">
                    Top Deals of the Day
                  </h2>
                </div>

                {/* Scroll arrows */}
                <button
                  className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hidden lg:flex z-10"
                  onClick={() => {
                    const container = document.getElementById("deals-scroll");
                    container?.scrollBy({ left: -300, behavior: "smooth" });
                  }}
                >
                  ‹
                </button>
                <button
                  className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hidden lg:flex z-10"
                  onClick={() => {
                    const container = document.getElementById("deals-scroll");
                    container?.scrollBy({ left: 300, behavior: "smooth" });
                  }}
                >
                  ›
                </button>

                {/* Scrollable cards */}
                <div
                  id="deals-scroll"
                  className="flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
                >
                  <ProductGridTopDeals products={topDeals} />
                </div>
              </div>

              {/* Ad Banner */}
              <div className="w-full  lg:w-[270px] xl:w-[445px]">
                <img
                  src="https://adespresso.com/wp-content/uploads/2020/02/ecommerce-advertising-the-complete-guide.png"
                  alt="Ad Banner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-background overflow-x-hidden">
          <div className="mx-auto px-4 max-w-full">
            <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-6 items-stretch">
              {/* Left Side – Ad Banner */}
              <div className="w-full order-2 lg:order-1">
                <div className="bg-white shadow overflow-hidden h-full flex">
                  <img
                    src="https://adespresso.com/wp-content/uploads/2020/02/ecommerce-advertising-the-complete-guide.png"
                    alt="Fashion Ad"
                    className="w-full h-full object-cover max-w-full"
                  />
                </div>
              </div>

              {/* Right Side – Two Grids side by side */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 order-1 lg:order-2 w-full">
                <FourLayerGrid
                  title="Top Selection"
                  gradient="linear-gradient(90deg, rgba(63, 99, 114, 0.7), rgba(109, 66, 37, 0.7), rgba(212, 55, 55, 0.7))"
                  items={[
                    {
                      image:
                        "https://rukminim2.flixcart.com/image/120/120/xif0q/water-geyser/m/9/7/-original-imahd77j8jh7hmge.jpeg?q=80",
                      title: "Televisions",
                      subtitle: "New Range",
                    },
                    {
                      image:
                        "https://rukminim2.flixcart.com/image/120/120/xif0q/water-purifier/a/u/x/-original-imahdt5pq9bzzstb.jpeg?q=80",
                      title: "Cotton Blend Women's T-Shirts",
                      subtitle: "Bestsellers",
                    },
                    {
                      image:
                        "https://rukminim2.flixcart.com/image/120/120/xif0q/projector/8/v/g/i9-pro-10-ei9027-led-projector-egate-original-imah5f7xgdsqhb9d.jpeg?q=80",
                      title: "Men's T-shirts",
                      subtitle: "In Focus Now",
                    },
                    {
                      image:
                        "https://rukminim2.flixcart.com/image/120/120/kcf4lu80/speaker/mobile-tablet-speaker/h/u/f/srs-xb23-sony-original-imaftk66vjxp86h5.jpeg?q=80",
                      title: "Fitness Accessories",
                      subtitle: "Don't Miss",
                    },
                  ]}
                />

                <FourLayerGrid
                  title="Wardrobes For You"
                  gradient="linear-gradient(90deg, rgba(36,0,70,0.7), rgba(90,24,154,0.7), rgba(255,215,0,0.7))"
                  items={[
                    {
                      image:
                        "https://rukminim2.flixcart.com/image/120/120/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=80",
                      title: "Best Discounts",
                      subtitle: "Min. 50% Off",
                    },
                    {
                      image:
                        "https://rukminim2.flixcart.com/image/120/120/xif0q/monitor/3/y/r/b277-d6-full-hd-27-2025-um-hb7si-601-acer-original-imahef7gpxnc7t3m.jpeg?q=80",
                      title: "0% Interest",
                      subtitle: "No Cost EMI",
                    },
                    {
                      image:
                        "https://freepngimg.com/save/52653-led-television-free-png-hq/650x650",
                      title: "Top Rated",
                      subtitle: "4 Stars and Above",
                    },
                    {
                      image:
                        "https://img.global.news.samsung.com/in/wp-content/uploads/2022/01/SM-G990_S21FE_BackFront_ZW.png",
                      title: "Affordable Options",
                      subtitle: "Under ₹6,999",
                    },
                  ]}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Trending Products */}
        {/* <section className="py-8">
          <div className="container mx-auto px-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-2xl font-bold text-text-primary">
                  Trending Now
                </CardTitle>
                <Button variant="ghost" className="text-primary">
                  View All <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </CardHeader>
              <CardContent>
                <ProductGridTopDeals products={topDeals.slice(0, 5)} />
              </CardContent>
            </Card>
          </div>
        </section> */}

        {/* Newsletter */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
