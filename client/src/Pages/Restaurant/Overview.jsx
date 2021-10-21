import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../components/CarouselArrow";
import ReactStars from "react-rating-stars-component";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// components
import MenuCollection from "../../components/restaurant/MenuCollection";
import OverviewSimilarRestaurantCard from "../../components/restaurant/OverviewSimilarRestaurantCard";
import ReviewCard from "../../components/restaurant/reviews/ReviewCard";
import MapView from "../../components/restaurant/MapView";

// redux actions
import { getImage } from "../../Redux/Reducer/image/image.action";
import { getReview } from "../../Redux/Reducer/review/review.action";

const Overview = () => {
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const similarRestaurants = [
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/5/59175/3cf700b71ee1ac8b54c322e84bdab78d_featured_v2.jpg?output-format=webp",
      name: "Aubree",
      restaurantRating: 3.5,
      deliveryRating: 4.5,
      cuisine: "Thai, Bakery, Fast Food, Italian",
      address: "MG Road, Bangaluru",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/0/19626640/4c5d3a34f36ab9546d786cce2cfae0ea_featured_v2.jpg?output-format=webp",
      name: "Toscano's Bakes",
      restaurantRating: 4.5,
      deliveryRating: 4.1,
      cuisine: "Desserts, Bakery, Shake",
      address: "Lavelle Road, Bangaluru",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/8/18560378/73c3ad8607a1690b4adb4a1e2ba1587a_featured_v2.jpg?output-format=webp",
      name: "Happy Belly Bakes",
      restaurantRating: 3.5,
      deliveryRating: 4.1,
      cuisine: "Bakery, Desserts, Beverages",
      address: "MG Road, Bangaluru",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/6/51576/d49137dcac79bfa629a6fff4215f0751_featured_v2.jpg?output-format=webp",
      name: "Sweet Chariot Cafe",
      restaurantRating: 3.7,
      deliveryRating: 4.8,
      cuisine: "Bakery, Desserts, Fast Food",
      address: "Residency Road, Bangaluru",
    },
    {
      image:
        "https://b.zmtcdn.com/data/pictures/chains/5/18620715/70713119f8b014f11dcdcfde72a1a532_featured_v2.jpg?output-format=webp",
      name: "Indulge by Innerchef",
      restaurantRating: 2.8,
      deliveryRating: 3.4,
      cuisine: "Desserts, Bakery",
      address: "Indiranagar, Bangaluru",
    },
  ];

  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  const getLatLong = (address) => {
    return address?.split(",").map((item) => parseFloat(item));
  };
  const mapData = {
    phno: reduxState?.contactNumber.split(","),
    coord: reduxState?.mapLocation?.split(",").map((item) => parseFloat(item)),
    name: reduxState?.name,
    address: getLatLong(reduxState?.address),
  };

  const reduxState = useSelector(
    (globalStore) => globalStore.restaurant.selectedRestaurant.restaurant
  );

  // local states to be updated with the redux state
  const [menuImage, setMenuImage] = useState({ images: [] });
  const [reviews, setReviews] = useState([]);
  const dispatch = useDispatch();

  useEffect((data) => {
    if (reduxState) {
      dispatch(getImage(reduxState?.menuImage)).then((data) => {
        const images = [];
        data.payload.image.images.map((location) => images.push(location));

        setMenuImage(images);
      });
      dispatch(getReview(reduxState?._id)).then((data) =>
        setReviews(data.payload.reviews)
      );
    }
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row relative md:gap-4">
        {/* main overview */}
        <div className="w-full md:w-2/3">
          <h2 className="font-semibold text-lg md:text-xl my-4">
            About this place
          </h2>

          {/* menu */}
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-medium">Menu</h4>
            <Link to="menu">
              <span className="flex items-center text-zmtcolor-400 ">
                See all menu <IoMdArrowDropright />{" "}
              </span>
            </Link>
          </div>

          {/* menu pics */}
          <div className="flex flex-wrap gap-3">
            <MenuCollection title="Food Menu" image={menuImage} />
          </div>

          {/* cuisine list */}
          <div className="my-6">
            <h4 className="text-lg font-medium mb-4">Cuisines</h4>
            <div className="flex items-center gap-3 text-blue-600">
              {reduxState?.cuisine.map((data) => (
                <span className="border border-gray-400 rounded-full py-1 px-2">
                  {data}
                </span>
              ))}
            </div>
          </div>

          {/* average cost */}
          <div className="my-6">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹{reduxState?.averageCost} for one order (approx.)</h6>
            <small>Exclusive of applicable taxes and charges, if any</small>
          </div>

          {/* similar restaurants */}
          <div className="w-full overflow-hidden">
            <h4 className="text-lg font-medium mb-2">Similar Restaurants</h4>
            <Slider {...settings}>
              {similarRestaurants.map((restaurant) => (
                <OverviewSimilarRestaurantCard {...restaurant} />
              ))}
            </Slider>
          </div>

          {/* rate your experience */}
          <div>
            <h4 className="text-lg font-medium mb-2">
              Rate your delivery experience
            </h4>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
            <div className="md:hidden my-4 flex flex-col gap-4">
              <MapView {...mapData} />
            </div>
            {reviews.map((review) => (
              <ReviewCard {...review} />
            ))}
          </div>
        </div>

        {/* side overview */}
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex sticky top-2 md:w-1/3 bg-white p-3 shadow-md gap-4 md:flex-col"
        >
          <MapView {...mapData} />
        </aside>
      </div>
    </>
  );
};

export default Overview;
