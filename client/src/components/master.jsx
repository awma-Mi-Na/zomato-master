import { useParams } from "react-router";

// components
import Delivery from "./delivery";

const Master = () => {
  const { type } = useParams();

  return <div className="my-5">{type === "delivery" && <Delivery />}</div>;
};

export default Master;
