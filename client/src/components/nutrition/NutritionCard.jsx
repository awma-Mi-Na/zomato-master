import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import ReactStars from "react-rating-stars-component";

const NutritionCard = (props) => {
  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3 p-4 ">
        <div className="rounded-2xl bg-white w-full shadow-lg">
          {/* supplement image */}
          <div className={`w-full h-1/2 bg-${props.bg}-100 rounded-t-2xl`}>
            <img
              src={props.image}
              alt="supplements"
              className="w-full h-full p-16 "
            />
          </div>

          {/* description of supplements */}

          <div className="mt-2 flex flex-col px-2 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-4 w-4">
                <img
                  src="https://www.pngkey.com/png/detail/261-2619381_chitr-veg-symbol-svg-veg-and-non-veg.png"
                  alt="veg"
                  className="w-full h-full"
                />
              </div>
              <ReactStars
                count={5}
                //   onChange={ratingChanged}
                size={16}
                isHalf={true}
                value={3}
                emptyIcon={<BsStar />}
                halfIcon={<BsStarHalf />}
                fullIcon={<BsStarFill />}
                activeColor="#ffd700"
              />
              <span className="text-gray-400">15</span>
            </div>
            <h3 className="text-xl font-bold text-gray-700">
              Burn - Weight Balanace
            </h3>
            <p className="text-sm font-light text-gray-400">
              This formula with VFill™ technology will help improve metabolism
              and support fat burn.
            </p>
            <div className="my-2">
              <hr />
            </div>
            <div>
              <span>
                <s className="text-gray-300 font-light mr-3">₹600</s>{" "}
                <strong>₹320</strong>
              </span>
              <p>Monthly pack - 30 capsules</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NutritionCard;
