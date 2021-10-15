// components
import RestaurantNavbar from "../components/navbar/RestaurantNavbar";
import ImageGrid from "../components/restaurant/ImageGrid";
import RestaurantInfo from "../components/restaurant/RestaurantInfo";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import InfoButtons from "../components/restaurant/InfoButtons";

const RestaurantLayout = () => {
  const images = [
    "https://b.zmtcdn.com/data/pictures/1/52971/ce5427a36e10f1bd0d4683593a1e6cff.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/1/52971/f79c42fd86224e5cc3abe93e94159b91.jpg",
    "https://b.zmtcdn.com/data/pictures/chains/1/52971/e3b10e1e51bdf0cadd740d8466b87463.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/47b/3309fdd65029299815e9bc9efbd9247b_1504853365.jpg",
    "https://b.zmtcdn.com/data/reviews_photos/8da/6cb0c15e83088b91dc4561848ff088da_1567944418.jpg",
  ];

  const restaurantDetails = {
    name: "SMOOR",
    restaurantRating: 2.3,
    deliveryRating: 4.5,
    cuisine: "Mizo, North Indian, Dessert, Chinese",
    address: "45, Down Street, Bangaluru",
  };
  return (
    <>
      <RestaurantNavbar />
      <div className="container mx-auto px-4 md:px-20">
        <ImageGrid images={images} />

        {/* restaurant details */}
        <RestaurantInfo {...restaurantDetails} />

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
      </div>
    </>
  );
};

export default RestaurantLayout;
