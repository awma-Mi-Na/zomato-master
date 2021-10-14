const NutritionCarouselCard = ({ image }) => {
  return (
    <div>
      <div className="w-full h-72">
        <img src={image} alt="nutrition" className="w-full h-full" />
      </div>
    </div>
  );
};

export default NutritionCarouselCard;
