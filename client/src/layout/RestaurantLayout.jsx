// libraries
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

// icons
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import RestaurantNavbar from "../components/navbar/RestaurantNavbar";
import ImageGrid from "../components/restaurant/ImageGrid";
import RestaurantInfo from "../components/restaurant/RestaurantInfo";
import InfoButtons from "../components/restaurant/InfoButtons";

import TabContainer from "../components/restaurant/Tabs";
import CartContainer from "../components/cart/CartContainer";

// redux actions
import { getSpecificRestaurant } from "../Redux/Reducer/restaurant/restaurant.action";
import { getImage } from "../Redux/Reducer/image/image.action";

const RestaurantLayout = (props) => {
  const [restaurant, setRestaurant] = useState({
    name: "",
    images: [],
    cuisine: "",
    address: "",
  });
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSpecificRestaurant(id)).then((data) => {
      console.log(data);
      setRestaurant((prev) => ({ ...prev, ...data.payload.restaurant }));

      // dispatch(getImage(data.payload.restaurant.photos)).then((images) =>
      //   setRestaurant((prev) => {
      //     return { ...prev, ...images.payload.image };
      //   })
      // );
    });
  }, []);
  // const images = [
  //   "https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/1/52971/f79c42fd86224e5cc3abe93e94159b91.jpg",
  //   "https://b.zmtcdn.com/data/pictures/chains/1/52971/e3b10e1e51bdf0cadd740d8466b87463.jpg",
  //   "https://b.zmtcdn.com/data/reviews_photos/47b/3309fdd65029299815e9bc9efbd9247b_1504853365.jpg",
  //   "https://b.zmtcdn.com/data/reviews_photos/8da/6cb0c15e83088b91dc4561848ff088da_1567944418.jpg",
  // ];

  const restaurantDetails = {
    name: restaurant.name,
    restaurantRating: restaurant.rating || 0,
    deliveryRating: restaurant.rating || 0,
    cuisine: restaurant.cuisine,
    address: restaurant.address,
  };
  console.log(restaurant);
  return (
    <>
      <RestaurantNavbar />
      <CartContainer />
      <div className="container mx-auto px-4 md:px-20">
        <ImageGrid images={restaurant.images} />

        {/* restaurant details */}
        <RestaurantInfo {...restaurantDetails} />

        {/* Feature buttons */}
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons>
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons>
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons>
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>

        {/* tabs */}
        <div className="my-10">
          <TabContainer />
        </div>
        <div>{props.children}</div>
      </div>
    </>
  );
};

export default RestaurantLayout;
