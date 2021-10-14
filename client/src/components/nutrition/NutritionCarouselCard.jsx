const NutritionCard = ({ image, title }) => {
  return (
    <div className="bg-white shadow rounded-md w-24 md:w-56 px-3 md:px-4 ">
      <div className="w-full h-24 md:h-36 ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div>
        <h3 className="text-sm font-light text-center my-1 md:text-xl">
          {title}
        </h3>
      </div>
    </div>
  );
};

const NutritionCarouselCard = (props) => {
  return (
    <>
      <NutritionCard {...props} />
    </>
  );
};

export default NutritionCarouselCard;
