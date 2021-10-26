import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// redux action
import { getFood } from "../../../Redux/Reducer/food/food.action";
import { getImage } from "../../../Redux/Reducer/image/image.action";

const FoodItem = (props) => {
  const [food, setFood] = useState({});

  const dispatch = useDispatch();
  console.log(props);

  useEffect(() => {
    dispatch(getFood(props._id)).then((data) => {
      setFood(data.payload.food);

      dispatch(getImage(data?.payload.food.photos)).then((data) => {
        if (data.payload.image) {
          const { images } = data.payload.image;

          images.length &&
            setFood((prev) => ({ ...prev, image: images[0].location }));
        }
        // console.log("location: ", images[0].location);
        return;
      });
    });
  }, []);

  return (
    <>
      {food?.name && (
        <div className="flex items-start justify-between gap-2 w-full">
          {food?.image && (
            <div className="w-1/4 h-24 md:w-3/12 md:h-28 lg:h-36 rounded-lg md:px-3">
              <img
                src={food?.image}
                alt="food"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          )}
          <div className="w-3/4 md:w-7/12 flex flex-col gap-1">
            <h2 className="text-md md:text-xl font-semibold flex items-start">
              {food?.name}
              <button className="md:hidden border border-zmtcolor-400 bg-zmtcolor-50 flex items-center p-1 text-xs rounded-lg gap-2 text-zmtcolor-600">
                <AiOutlinePlus /> Add
              </button>{" "}
            </h2>
            <ReactStars count={5} value={food?.rating || 0} />
            <h4 className="text-gray-500">₹{food?.price}</h4>
            <p className="truncate text-gray-500">{food?.descript}</p>
          </div>
          <div className="w-2/12 h-full hidden md:block">
            <button className="border border-zmtcolor-400 bg-zmtcolor-50 flex items-center px-2 py-1 rounded-lg gap-2 text-zmtcolor-600">
              <AiOutlinePlus /> Add
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodItem;
