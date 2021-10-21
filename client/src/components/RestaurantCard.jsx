import { AiTwotoneStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// redux actions
import { getImage } from "../Redux/Reducer/image/image.action";

const RestaurantCard = (props) => {
  const [image, setImage] = useState({
    images: [{ location: "" }],
  });

  const dispatch = useDispatch();
  useEffect(() => {
    props.photos &&
      dispatch(getImage(props.photos)).then((data) => {
        console.log("data.payload.image", data.payload.image);
        setImage(data.payload.image.images);
        console.log("image state", image);
      });
  }, [props.photos]);
  return (
    <Link to={`/restaurant/${props._id}`} className="w-full">
      <div className="bg-white p-4 mb-4 w-full rounded-2xl md:w-1/2 lg:w-1/3 transition duration-700 ease-in-out hover:shadow-lg">
        <div className="w-full h-56 lg:h-64 relative">
          <div className="absolute w-full flex items-end justify-between bottom-4">
            <div className="flex flex-col items-start gap-2">
              {props.isPro && (
                <span className="bg-zmtcolor-400 p-1 rounded text-white text-sm">
                  Pro extra {`${props.isPro}`}% off
                </span>
              )}
              {props.isOff && (
                <span className="bg-blue-500 p-1 rounded text-white text-sm">
                  {`${props.isOff}`}% off
                </span>
              )}
            </div>
            <span className="bg-white bg-opacity-75 p-1 rounded mr-2">
              {`${props.avgDeliveryInMin}`} min
            </span>
          </div>
          <img
            src={image.length && image[5].location}
            alt="food"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-2 flex flex-col gap-1">
          <div className="flex items-center justify-between">
            <h4 className="text-xl font-medium">{props.name}</h4>
            <span className="bg-green-800 text-white text-sm p-1 rounded flex items-center ">
              {props.restaurantReviewValue} <AiTwotoneStar />
            </span>
          </div>
          <div className="flex items-center justify-between text-gray-500 text-sm">
            <p>{props.cuisine.join(", ")}</p>
            <p>₹{props.averageCost} for one</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
