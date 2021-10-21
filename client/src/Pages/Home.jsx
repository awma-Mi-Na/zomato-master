import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// components
import Delivery from "../components/delivery";
import Dining from "../components/Dining";
import NightLife from "../components/NightLife";
import Nutrition from "../components/nutrition";

// redux actions
import { getRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";

const Master = () => {
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant()).then((data) => console.log(data));
  }, []);

  return (
    <>
      <div className="my-5">{type === "delivery" && <Delivery />}</div>
      <div>{type === "dining" && <Dining />}</div>
      <div>{type === "night_life" && <NightLife />}</div>
      <div>{type === "nutrition" && <Nutrition />}</div>
    </>
  );
};

export default Master;
