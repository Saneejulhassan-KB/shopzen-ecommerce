import { Card, CardContent } from "@/components/ui/card";

const CategorySection = () => {
  const categories = [
    {
      id: 1,
      name: "Mobiles",
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=200&fit=crop",
      offers: "Up to 40% off",
    },
    {
      id: 2,
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=200&fit=crop",
      offers: "50-80% off",
    },
    {
      id: 3,
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=300&h=200&fit=crop",
      offers: "Up to 60% off",
    },
    {
      id: 4,
      name: "Home & Kitchen",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop",
      offers: "From ₹199",
    },
    {
      id: 5,
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=200&fit=crop",
      offers: "Up to 50% off",
    },
    {
      id: 6,
      name: "Sports",
      image:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
      offers: "Up to 70% off",
    },
    {
      id: 7,
      name: "Books",
      image:
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop",
      offers: "Up to 30% off",
    },
    {
      id: 8,
      name: "Toys",
      image:
        "https://images.unsplash.com/photo-1558877385-99de4cf8c26a?w=300&h=200&fit=crop",
      offers: "Up to 60% off",
    },
  ];

  return (
    <section className="py-8">
      <div className="mx-auto px-4">
        <h2 className="text-2xl font-bold text-text-primary mb-6">
          Top Categories
        </h2>

        {/* Horizontal scroll on all screens */}
        <div className="flex gap-4 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group cursor-pointer hover:shadow-card-hover transition-all duration-300 overflow-hidden 
                         min-w-[140px] sm:min-w-[160px] lg:min-w-[180px]" // fixed width for scroll
            >
              <CardContent className="p-0">
                <div className="aspect-square relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-2 left-2 right-2 text-white">
                    <h3 className="font-semibold text-sm mb-1">
                      {category.name}
                    </h3>
                    <p className="text-xs opacity-90">{category.offers}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
