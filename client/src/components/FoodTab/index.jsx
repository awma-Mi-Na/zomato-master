import { useState, useEffect } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";

const MobileTab = () => {
  const [allTypes, setAllTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line className="text-2xl" />,
      name: "Delivery",
      isActive: false,
    },
    {
      id: "dining",
      icon: <IoFastFoodOutline className="text-2xl" />,
      name: "Dining Out",
      isActive: false,
    },
    {
      id: "night_life",
      icon: <BiDrink className="text-2xl" />,
      name: "Night life",
      isActive: false,
    },
    {
      id: "nutrition",
      icon: <IoNutritionOutline className="text-2xl" />,
      name: "Nutrition",
      isActive: false,
    },
  ]);
  const { type } = useParams();

  //   useEffect(() => {
  //     if (type) {
  //       const updateType = allTypes.map((item) => {
  //         if (item.id === type) return { ...item, isActive: true };
  //         return item;
  //       });
  //       setAllTypes(updateType);
  //     }
  //   }, [type]);

  return (
    <>
      <div className="lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex justify-between md:justify-evenly text-gray-400 border">
        {allTypes.map((item) => {
          return (
            <Link to={`/${item.id}`}>
              <div
                className={
                  type === item.id
                    ? "flex flex-col relative items-center text-black "
                    : "flex flex-col items-center"
                }
              >
                <div
                  className={
                    type === item.id &&
                    "border-t-2 border-zmtcolor-500 -top-2 absolute w-full"
                  }
                />
                {item.icon}
                <h5 className="text-sm">{item.name}</h5>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

const LargeTab = () => {
  return (
    <>
      <div className="hidden lg:flex gap-14 container px-20 mx-auto">
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png"
              alt="delivery"
              className="w-full h-full"
            />
          </div>
          <h5 className="text-xl text-gray-600">Delivery</h5>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png"
              alt="dining out"
              className="w-full h-full"
            />
          </div>
          <h5 className="text-xl text-gray-600">Dining Out</h5>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png"
              alt="nightlife"
              className="w-full h-full"
            />
          </div>
          <h5 className="text-xl text-gray-600">Nightlife</h5>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-16 h-16 bg-gray-100 p-4 rounded-full">
            <img
              src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png"
              alt="nutrition"
              className="w-full h-full"
            />
          </div>
          <h5 className="text-xl text-gray-600">Nutrition</h5>
        </div>
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <div className="my-6">
        <MobileTab />
        <LargeTab />
      </div>
    </>
  );
};

export default FoodTab;
