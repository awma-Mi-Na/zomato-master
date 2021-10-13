// components
import DeliveryCategory from "./DeliveryCategory";

// slick
import Slider from "react-slick";
import { NextArrow, PrevArrow } from "../CarouselArrow";

const DeliveryCarousel = () => {
  const categories = [
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/8dc39742916ddc369ebeb91928391b931632716660.png",
      title: "Dosa",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/780403fcbed36322cf7b7c244704025d1632716601.png",
      title: "Idli",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/bf4bde7b78d517ac8460ea03d4c64a7f1632716550.png",
      title: "Vada",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png",
      title: "Paratha",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/d85fd7a8a69097b4663d94fc438f62421632716547.png",
      title: "Sandwich",
    },
    {
      image:
        "https://b.zmtcdn.com/data/o2_assets/5eaeb937e587bf567320c1da955f62e71632716548.png",
      title: "Tea",
    },
  ];

  // settings for slider
  const settings = {
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
      <div>
        <h1 className="text-xl font-semibold">
          Inspiration for your first order
        </h1>

        {/* display for small screen */}

        <div className="flex gap-3 flex-wrap justify-between lg:hidden">
          {categories.map((food) => (
            <DeliveryCategory {...food} />
          ))}
        </div>

        {/* pc screen carousel */}

        <div className="hidden lg:block">
          <Slider {...settings}>
            {categories.map((food) => (
              <DeliveryCategory {...food} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default DeliveryCarousel;
