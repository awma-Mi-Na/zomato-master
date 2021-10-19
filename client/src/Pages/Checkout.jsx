// components
import { BsShieldLockFill } from "react-icons/bs";
import FoodItem from "../components/cart/FoodItem";
import AddressList from "../components/checkout/AddressList";

const Checkout = () => {
  const address = [
    {
      for: "Home",
      detail: "Bawngkawn, Aizawl, Mizoram",
    },
    {
      for: "Gym",
      detail: "Bawngkawn, Aizawl, Mizoram",
    },
    {
      for: "Office",
      detail: "Bawngkawn, Aizawl, Mizoram",
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center ">
        <h1 className="text-xl text-center md:text-2xl font-bold">Checkout</h1>
        <div className="w-full md:w-3/5 rounded-lg  py-3 shadow-lg bg-white flex flex-col items-center shadow-lg">
          <h3 className="text-lg font-semibold">Summary</h3>
          <div className="flex w-full flex-col gap-2 items-center">
            <h5 className="text-base tracking-wider">ORDER FROM</h5>
            <div className="flex w-full  flex-col items-center text-gray-600">
              <h4>Domino's Pizza</h4>
              <small>GT World Mall, Magadi Road, Bangalore</small>
            </div>
            <div className="my-4 h-32 overflow-y-scroll px-4 flex flex-col gap-2 w-full md:w-3/5 ">
              <FoodItem name="Pizza" price={350} quantity={4} />
            </div>
            <div className="px-4 flex flex-col gap-2 w-full ">
              <h1 className="text-xl text-center md:text-2xl font-bold">
                Choose address
              </h1>

              <AddressList address={address} />
            </div>
          </div>
          <button className="flex items-center justify-center gap-3 my-4 md:my-8 w-full px-4 md:w-4/5 text-lg text-white bg-zmtcolor-400 rounded-md h-16">
            Pay Securely <BsShieldLockFill />
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
