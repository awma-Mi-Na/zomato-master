import { useLocation } from "react-router";

const Temp = () => {
  const loc = useLocation();
  return <div>This is a temp component in {loc.pathname} </div>;
};

export default Temp;
