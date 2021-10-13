import { useParams } from "react-router";

// components
import Delivery from "./delivery";
import Dining from "./Dining";

const Master = () => {
  const { type } = useParams();

  return (
    <>
      <div className="my-5">{type === "delivery" && <Delivery />}</div>
      <div>{type === "dining" && <Dining />}</div>
    </>
  );
};

export default Master;
