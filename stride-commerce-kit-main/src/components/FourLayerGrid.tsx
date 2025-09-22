import FourLayerCard from "@/components/FourLayerCard";
import { Button } from "@/components/ui/button";

const FourLayerGrid = ({ title, items, gradient, showButton = false, buttonText = "Shop Now" }) => {
  return (
    <div
      className="rounded-lg shadow p-4"
      style={{
        background: gradient,
      }}
    >
      <h3 className="text-lg font-bold mb-4 text-white">{title}</h3>

      <div className="grid grid-cols-2 gap-4">
        {items.map((item, index) => (
          <FourLayerCard
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
          />
        ))}
      </div>

      {showButton && (
        <div className="mt-4 text-center">
          <Button className="bg-primary hover:bg-primary-hover text-white">
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );
};

export default FourLayerGrid;
