import { FaUserAlt } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { RiSearch2Line } from "react-icons/ri";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { AiOutlineArrowLeft } from "react-icons/ai";

const MobileNav = () => {
  return (
    <div className="flex w-full items-center justify-between lg:hidden">
      <AiOutlineArrowLeft />
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
        <span className="border p-2 border-gray-300 text-zmtcolor-400 rounded-full">
          <FaUserAlt />
        </span>
      </div>
    </div>
  );
};

const LargeNav = () => {
  return (
    <div className="hidden container mx-auto px-20 lg:inline">
      <div className="hidden w-full items-center justify-between gap-4 lg:flex ">
        <div className="w-36">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>

        {/* for drop down and search */}
        <div className="w-3/4 bg-white shadow-md p-3 border border-gray-200 rounded flex items-center gap-3">
          <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
            <span className="text-zmtcolor-400">
              <HiLocationMarker />
            </span>
            <input
              type="text"
              placeholder="Aizawl"
              className="focus:outline-none"
            />
            <IoMdArrowDropdown />
          </div>
          <div className="flex items-center gap-2 w-3/5">
            <RiSearch2Line />
            <input
              type="text"
              placeholder="Search for restaurant, cuisine or a dish"
              className="w-full focus:outline-none"
            />
          </div>
        </div>

        {/* for login and signup button */}
        <div className="flex gap-2 w-1/6">
          <button className="text-lg text-gray-500 hover:text-gray-800 w-full">
            Log in
          </button>
          <button className="text-lg text-gray-500 hover:text-gray-800 w-full">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

const RestaurantNavbar = () => {
  return (
    <>
      <nav className="p-4 bg-white shadow-md lg:shadow-none flex items-center ">
        <MobileNav />
        <LargeNav />
      </nav>
    </>
  );
};

export default RestaurantNavbar;
