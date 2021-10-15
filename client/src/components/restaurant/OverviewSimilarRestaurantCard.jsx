import { TiStarFullOutline } from "react-icons/ti";

const OverviewSimilarRestaurantCard = (props) => {
  return (
    <>
      <div className="mx-2 my-4">
        <div className="bg-white shadow rounded-md">
          <div className="w-full h-44 ">
            <img
              src={props.image}
              alt={props.name}
              className="w-full h-full object-cover rounded-md shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-2 p-3">
            <h1 className="text-lg md:text-xl font-semibold ">{props.name}</h1>
            <div className="flex items-center text-sm justify-between">
              <div className="flex items-center gap-1 ">
                <span className="flex rounded items-center gap-1 text-white bg-green-600 p-1 text-sm">
                  <span className="text-xs">{props.restaurantRating}</span>
                  <TiStarFullOutline />
                </span>
                <span>Dining</span>
              </div>
              <span className="border border-gray-300 h-6" />
              <div className="flex items-center gap-2">
                <span className="flex rounded items-center gap-1 text-white bg-green-600 p-1 text-sm">
                  <span className="text-xs">{props.deliveryRating}</span>

                  <TiStarFullOutline />
                </span>
                <span>Delivery</span>
              </div>
            </div>
            <div>
              <span className="truncate">{props.cuisine}</span>
              <h3 className="text-gray-400">{props.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverviewSimilarRestaurantCard;
