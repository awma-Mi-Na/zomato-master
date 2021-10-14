import { AiOutlineCamera } from "react-icons/ai";

const ImageGrid = (props) => {
  return (
    <>
      <div className="container mx-auto px-4 lg:px-20">
        <div className="w-full h-60 md:hidden rounded-lg">
          <img
            src={props.images[0]}
            alt="restaurant"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="hidden w-full h-96 md:flex gap-1 rounded-lg">
          <div className="w-7/12 h-full overflow-hidden">
            <img
              src={props.images[0]}
              alt="restaurant"
              className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110"
            />
          </div>
          <div className="w-1/6 h-full flex flex-col gap-1">
            <div className="w-full h-full overflow-hidden">
              <img
                src={props.images[1]}
                alt="restaurant"
                className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110 "
              />
            </div>
            <div className="w-full h-full overflow-hidden">
              <img
                src={props.images[2]}
                alt="restaurant"
                className="w-full h-full object-cover rounded-lg transform transition duration-700 hover:scale-110"
              />
            </div>
          </div>
          <div className="w-1/6 h-full flex flex-col gap-1">
            <div className="w-full h-full relative">
              <img
                src={props.images[3]}
                alt="restaurant"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="w-full h-full inset-0 bg-opacity-40 bg-black absolute rounded-lg" />
              <h4 className="inset-y-2/4 text-white absolute text-center z-20 font-semibold w-full h-full">
                View Gallery
              </h4>
            </div>
            <div className="w-full h-full relative">
              <img
                src={props.images[4]}
                alt="restaurant"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="w-full h-full inset-0 bg-opacity-90 bg-gray-400 absolute rounded-lg" />
              <div className="text-white font-semibold w-full h-full z-20 inset-y-1/3 absolute flex flex-col items-center">
                <div className="bg-black bg-opacity-50 w-10 h-10 rounded-full">
                  <AiOutlineCamera className="text-2xl text-gray-300 m-2" />
                </div>
                <h4>Add Photos</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageGrid;
