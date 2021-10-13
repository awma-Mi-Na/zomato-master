import DeliveryCarousel from "./DeliveryCarousel";
import Brand from "./Brand";
import RestaurantCard from "../RestaurantCard";
import { useState } from "react";

const Delivery = () => {
  const [restList] = useState([
    {
      _id: "12345",
      name: "Kerela Food Club",
      isPro: 15,
      isOff: 30,
      durationOfDelivery: 57,
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/1/18975421/ea98e99cc8c5e6d0bb5688d10e3b4f9d_o2_featured_v2.jpg?output-format=webp",
      ],
      restaurantReviewValue: 4.7,
      cuisine: ["Kerela", "Seafood"],
      averageCost: 200,
    },
    {
      _id: "12346",
      name: "FreshMenu",
      isPro: 20,
      isOff: 50,
      durationOfDelivery: 51,
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/9/59179/a27b0a7128ad0035df8c14fabf52cdef_o2_featured_v2.jpg?output-format=webp",
      ],
      restaurantReviewValue: 3.8,
      cuisine: ["Continental", "North Indian", "Biryani"],
      averageCost: 200,
    },
    {
      _id: "12346",
      name: "FreshMenu",
      isPro: 20,
      isOff: 50,
      durationOfDelivery: 51,
      photos: [
        "https://b.zmtcdn.com/data/pictures/chains/9/59179/a27b0a7128ad0035df8c14fabf52cdef_o2_featured_v2.jpg?output-format=webp",
      ],
      restaurantReviewValue: 3.8,
      cuisine: ["Continental", "North Indian", "Biryani"],
      averageCost: 200,
    },
  ]);
  return (
    <>
      <DeliveryCarousel />
      {/* <Brand /> */}
      <div className="flex flex-wrap justify-between">
        {restList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
};

export default Delivery;
