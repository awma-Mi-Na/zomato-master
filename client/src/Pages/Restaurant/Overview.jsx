import { Link } from "react-router-dom";
import { IoMdArrowDropright } from "react-icons/io";
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../../components/CarouselArrow";
import ReactStars from "react-rating-stars-component";

// components
import MenuCollection from "../../components/restaurant/MenuCollection";
import OverviewSimilarRestaurantCard from "../../components/restaurant/OverviewSimilarRestaurantCard";
import ReviewCard from "../../components/restaurant/reviews/ReviewCard";
import MapView from "../../components/restaurant/MapView";

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

  const sideData = {
    phno: ["+918022496586", "+919916795692"],
    coord: [12.9734401359, 77.6202210411],
    name: "SMOOR",
    address:
      "Ground Floor, Trinity Circle, 1 MG Road Mall, Near MG Road, Bangalore",
  };
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
            <MenuCollection
              title="Food Menu"
              image={[
                "https://b.zmtcdn.com/data/menus/971/52971/98e728872b6f968251d239411455d54f.jpg",
                "https://b.zmtcdn.com/data/menus/971/52971/0425c595f12e2e5bd0dcc439bf787ff5.jpg",
              ]}
            />
          </div>

          {/* cuisine list */}
          <div className="my-6">
            <h4 className="text-lg font-medium mb-4">Cuisines</h4>
            <div className="flex items-center gap-3 text-blue-600">
              <span className="border border-gray-400 rounded-full py-1 px-2">
                Desserts
              </span>
              <span className="border border-gray-400 rounded-full py-1 px-2">
                Beverages
              </span>
              <span className="border border-gray-400 rounded-full py-1 px-2">
                Bakery
              </span>
              <span className="border border-gray-400 rounded-full py-1 px-2">
                Shakes
              </span>
            </div>
          </div>

          {/* average cost */}
          <div className="my-6">
            <h4 className="text-lg font-medium">Average Cost</h4>
            <h6>₹400 for one order (approx.)</h6>
            <small>Exclusive of applicable taxes and charges, if any</small>
          </div>

          {/* similar restaurants */}
          <div className="w-full">
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
              <MapView {...sideData} />
            </div>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </div>
        </div>

        {/* side overview */}
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex sticky top-2 md:w-1/3 bg-white p-3 shadow-md gap-4 md:flex-col"
        >
          <MapView {...sideData} />
        </aside>
      </div>
    </>
  );
};

export default Overview;
