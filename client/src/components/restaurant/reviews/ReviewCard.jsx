import { AiFillStar } from "react-icons/ai";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

// redux actions
import { getUser } from "../../../Redux/Reducer/user/user.action";

const ReviewCard = (props) => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser(props.user))
      .then
      // (data) => setUser(data.payload.user.user.user) // user(in root reducer) -> user(in reducer) -> user(in backend api)
      ();
  }, []);
  return (
    <div className="flex flex-col gap-4 ">
      {/* header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/user_profile_pictures/019/ef2d1602c99d76536d30bb1984aad019.jpg"
              alt="avatar"
              className="w-full h-full rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <h5>{user?.fullname}</h5>
            <small className="text-gray-600">
              2 reviews &#8226; 2 Followers
            </small>
          </div>
        </div>
        <button className="border border-zmtcolor-400 text-zmtcolor-400 rounded-lg px-4 py-2">
          Follow
        </button>
      </div>

      {/* review summary */}
      <div className="flex items-center gap-2">
        <span className="text-xs flex items-center bg-yellow-400 text-white p-1 rounded-md">
          3 <AiFillStar />{" "}
        </span>
        <h5 className="text-sm   uppercase">
          {props.isRestaurantReview ? "Dining" : "Delivery"}
        </h5>
        <small className="text-gray-500">
          {dayjs(props.createdAt).format("DD MM YYYY")}
        </small>
      </div>
      {/* review text */}
      <div className="w-full">
        <p className="text-gray-600 font-light w-full">{props.reviewText}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
