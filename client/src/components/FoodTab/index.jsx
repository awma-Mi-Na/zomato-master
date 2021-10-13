import { useState } from "react";
import { RiShoppingBag3Line } from "react-icons/ri";
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { BiDrink } from "react-icons/bi";
import { useParams, Link } from "react-router-dom";
import classNames from "classnames";

const MobileTab = () => {
  const [allTypes] = useState([
    {
      id: "delivery",
      icon: <RiShoppingBag3Line className="text-2xl" />,
      name: "Delivery",
    },
    {
      id: "dining",
      icon: <IoFastFoodOutline className="text-2xl" />,
      name: "Dining Out",
    },
    {
      id: "night_life",
      icon: <BiDrink className="text-2xl" />,
      name: "Night life",
    },
    {
      id: "nutrition",
      icon: <IoNutritionOutline className="text-2xl" />,
      name: "Nutrition",
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
  const [allTypes] = useState([
    {
      id: "delivery",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png",
      name: "Delivery",
      activeColor: "yellow",
    },
    {
      id: "dining",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/30fa0a844f3ba82073e5f78c65c18b371616149662.png",
      name: "Dining Out",
      activeColor: "blue",
    },
    {
      id: "night_life",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/855687dc64a5e06d737dae45b7f6a13b1616149818.png",
      name: "Night life",
      activeColor: "indigo",
    },
    {
      id: "nutrition",
      imageDefault:
        "https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png",
      imageActive:
        "https://b.zmtcdn.com/data/o2_assets/0f6dcb1aef93fa03ea3f91f37918f3bc1616649503.png",
      name: "Nutrition",
      activeColor: "yellow",
    },
  ]);
  const { type } = useParams();
  return (
    <>
      <div className="hidden lg:flex gap-14 container px-20 my-8 mx-auto">
        {allTypes.map((item) => (
          <Link to={`/${item.id}`}>
            <div
              className={classNames(
                "flex items-center gap-3 pb-2 transition duration-700 ease-in-out",
                {
                  "border-b-2 border-zmtcolor-400": type === item.id,
                }
              )}
            >
              <div
                className={classNames(
                  "w-16 h-16 bg-gray-100 p-4 rounded-full",
                  { [`bg-${item.activeColor}-100`]: type === item.id }
                )}
              >
                <img
                  src={type === item.id ? item.imageActive : item.imageDefault}
                  alt={item.name}
                  className="w-full h-full"
                />
              </div>
              <h5
                className={
                  type === item.id
                    ? "text-xl font-semibold text-zmtcolor-400 "
                    : "text-xl text-gray-500"
                }
              >
                {item.name}
              </h5>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

const FoodTab = () => {
  return (
    <>
      <div>
        <MobileTab />
        <LargeTab />
      </div>
    </>
  );
};

export default FoodTab;
