import FoodItem from "./FoodItem";

const FoodList = (props) => {
  return (
    <>
      <div className="flex flex-col gap-3 md:gap-5">
        <h2 className="sticky top-0 z-10 bg-white px-2 py-1 text-lg font-semibold w-full">
          {props.name}
        </h2>
        {props.items.map((item) => (
          <FoodItem key={item} _id={item} />
        ))}
      </div>
    </>
  );
};

export default FoodList;
