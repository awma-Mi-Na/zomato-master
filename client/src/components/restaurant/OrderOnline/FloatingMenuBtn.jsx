import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { MdClose } from "react-icons/md";

// componentes
import MenuListContainer from "./MenuListContainer";

const FloatingMenuBtn = () => {
  const [isClicked, setIsClicked] = useState(false);
  const toggleMenu = () => setIsClicked((prev) => !prev);

  return (
    <>
      <div className="flex flex-col items-end fixed bottom-2 right-2 w-8/12 gap-2 md:hidden">
        {isClicked && (
          <div className="bg-white w-full h-56 overflow-y-scroll p-3">
            <MenuListContainer />
          </div>
        )}
        <button
          className=" text-white flex items-center gap-2 bg-yellow-900 px-3 py-2 rounded-full md:hidden"
          onClick={toggleMenu}
        >
          {isClicked ? <MdClose /> : <HiMenu />}
          Menu
        </button>
      </div>
    </>
  );
};

export default FloatingMenuBtn;
