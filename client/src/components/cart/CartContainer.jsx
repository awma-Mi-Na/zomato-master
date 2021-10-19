import { useState } from "react";
import {
  IoMdArrowDropdown,
  IoMdArrowDropup,
  IoMdArrowDropright,
  IoMdClose,
} from "react-icons/io";

// components
import FoodItem from "./FoodItem";

const CartSM = ({ toggle }) => {
  return (
    <>
      <div className="flex items-center justify-between md:hidden">
        <div className="flex flex-col items-start ">
          <small className="flex items-center gap-1" onClick={toggle}>
            1 item <IoMdArrowDropup />
          </small>
          <h4>
            ₹300 <sub>(plus tax)</sub>
          </h4>
        </div>
        <button className="flex items-center bg-zmtcolor-400 gap-1 px-3 py-1 rounded-lg text-white">
          Continue <IoMdArrowDropright />
        </button>
      </div>
    </>
  );
};
const CartLG = ({ toggle }) => {
  return (
    <>
      <div className="hidden md:flex items-center justify-between container px-20 mx-auto">
        <div className="flex items-center gap-3 text-lg">
          <span
            className="rounded-md border border-gray-400 p-1"
            onClick={toggle}
          >
            <IoMdArrowDropup />
          </span>
          <h3 className="flex items-center gap-1">Your Order (1)</h3>
        </div>
        <div className="flex items-center gap-3">
          <h4 className="text-xl font-semibold">Subtotal: ₹300</h4>

          <button className="flex items-center bg-zmtcolor-400 gap-1 px-4 py-2 rounded-lg text-white text-md font-light">
            Continue <IoMdArrowDropright />
          </button>
        </div>
      </div>
    </>
  );
};

const CartContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => setIsOpen((prev) => !prev);
  const closeCart = () => setIsOpen((prev) => !prev);
  return (
    <>
      {/* order details  */}
      {isOpen && (
        <div className="fixed h-48 overflow-y-scroll w-full bg-white z-20 py-2 px-3 bottom-16 border-2 border-black ">
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">Your Orders</h4>
            <IoMdClose onClick={closeCart} />
          </div>
          <hr className="my-3" />
          <div className="flex flex-col gap-3">
            <FoodItem name="Cheese n Tomato" price="250" quantity="10" />
            <FoodItem name="Cheese n Tomato" price="250" quantity="10" />
            <FoodItem name="Cheese n Tomato" price="250" quantity="10" />
            <FoodItem name="Cheese n Tomato" price="250" quantity="10" />
          </div>
        </div>
      )}

      {/* floating cart order details */}
      <div className="fixed w-full bg-white z-20 p-2 bottom-0">
        <CartSM toggle={toggleCart} />
        <CartLG toggle={toggleCart} />
      </div>
    </>
  );
};

export default CartContainer;
