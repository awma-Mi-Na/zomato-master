import FloatingMenuBtn from "../../components/restaurant/OrderOnline/FloatingMenuBtn";
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// components
import MenuListContainer from "../../components/restaurant/OrderOnline/MenuListContainer";
import FoodList from "../../components/restaurant/OrderOnline/FoodList";
const OrderOnline = () => {
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
            <FoodList
              title="Recommended"
              items={[
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
              ]}
            />
            <FoodList
              title="Dessert"
              items={[
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
                {
                  image:
                    "https://b.zmtcdn.com/data/dish_photos/5be/3fcf7f559b4dd21a925ea67e42ea45be.jpg?output-format:webp",
                  title: "Belgium Chocolate Truffle half Kg",
                  rating: "4",
                  price: "810",
                  description:
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam at natus culpa dicta obcaecati recusandae quibusdam libero temporibus ad in? Qui consequatur ratione, natus eaque totam nobis deserunt eius! Voluptate!",
                },
              ]}
            />
          </section>
        </div>
      </div>
      <FloatingMenuBtn />
    </>
  );
};

export default OrderOnline;
