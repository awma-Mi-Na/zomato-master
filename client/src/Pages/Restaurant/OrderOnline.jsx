import FloatingMenuBtn from "../../components/restaurant/OrderOnline/FloatingMenuBtn";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// components
import MenuListContainer from "../../components/restaurant/OrderOnline/MenuListContainer";
import FoodList from "../../components/restaurant/OrderOnline/FoodList";

// redux actions
import { getFoodList } from "../../Redux/Reducer/food/food.action";

const OrderOnline = () => {
  const [menu, setMenu] = useState([]);
  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );
  // console.log({ orderonline: reduxState });
  const dispatch = useDispatch();

  useEffect(() => {
    reduxState &&
      dispatch(getFoodList(reduxState.menu)).then((data) =>
        setMenu(data.payload.menus.menus)
      );
  }, [reduxState]);

  console.log({ menu: menu });

  return (
    <>
      <div className="w-full flex">
        {/* side menu */}
        <aside className="hidden md:flex flex-col gap-3 border-r border-gray-200 w-1/4 h-screen overflow-y-scroll">
          <MenuListContainer />
          <MenuListContainer />
        </aside>

        {/* main component */}
        <div className="w-full md:w-3/4 px-3">
          <div className="pl-3 mb-4">
            <h2 className="text-lg font-semibold">Order Online</h2>
            <h4 className="flex items-center text-gray-400 gap-2">
              <AiOutlineCompass /> Live tracking not available | <BiTimeFive />{" "}
              47 min
            </h4>
          </div>
          <section className="flex flex-col gap-3 md:gap-5 md:h-screen overflow-y-scroll">
            {menu.map(
              (item) => (
                <FoodList key={item._id} {...item} />
              )
              // console.log({ "inside order online": item })
            )}
          </section>
        </div>
      </div>
      <FloatingMenuBtn />
    </>
  );
};

export default OrderOnline;
