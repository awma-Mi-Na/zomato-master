import { AiOutlineArrowLeft } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const CheckoutNavbar = () => {
  return (
    <div className="container px-4 md:px-20 mx-auto">
      <div className="flex w-full items-center justify-between my-8">
        <span className="text-zmtcolor-400 flex items-center">
          <AiOutlineArrowLeft />
          <small className="">Back to Restaurant</small>
        </span>
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className="flex items-center gap-3">
          <button className="bg-zmtcolor-400 text-white py-2 px-3 rounded-full">
            Use App
          </button>
          <span className="border flex items-center gap-2 p-2 border-gray-300 text-zmtcolor-400 rounded-full">
            <FaUserAlt />
          </span>
          Awma
        </div>
      </div>
    </div>
  );
};

export default CheckoutNavbar;
