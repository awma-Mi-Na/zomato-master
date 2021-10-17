import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";

const FoodItem = (props) => {
  return (
    <>
      <div className="flex items-start justify-between gap-2 w-full">
        <div className="w-1/4 h-24 md:w-3/12 md:h-28 lg:h-36 rounded-lg md:px-3">
          <img
            src={props.image}
            alt="food"
            className="w-full h-full rounded-lg object-cover"
          />
        </div>
        <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
          <h2 className="text-md md:text-xl font-semibold flex items-start">
            {props.title}
            <button className="md:hidden border border-zmtcolor-400 bg-zmtcolor-50 flex items-center p-1 text-xs rounded-lg gap-2 text-zmtcolor-600">
              <AiOutlinePlus /> Add
            </button>{" "}
          </h2>
          <ReactStars count={5} value={props.rating} />
          <h4 className="text-gray-500">₹{props.price}</h4>
          <p className="truncate text-gray-500">{props.description}</p>
        </div>
        <div className="w-2/12 h-full hidden md:block">
          <button className="border border-zmtcolor-400 bg-zmtcolor-50 flex items-center px-2 py-1 rounded-lg gap-2 text-zmtcolor-600">
            <AiOutlinePlus /> Add
          </button>
        </div>
      </div>
    </>
  );
};

export default FoodItem;
