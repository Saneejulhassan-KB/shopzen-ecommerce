const FourLayerCard = ({ image, title, subtitle }) => {
    return (
      <div className="flex flex-col items-center text-center p-2 border rounded-lg bg-white hover:shadow-md transition-shadow">
        <img src={image} alt={title} className="w-20 h-24 object-cover rounded-md mb-2" />
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-xs text-green-600">{subtitle}</p>
      </div>
    );
  };
  
  export default FourLayerCard;
  