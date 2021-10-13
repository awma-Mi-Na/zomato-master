import { IoMdArrowDropright } from "react-icons/io";

const PictureCarouselCard = () => {
  return (
    <>
      <div className="w-full h-80 relative px-4">
        <div className="w-full h-full relative">
          <img
            src="https://b.zmtcdn.com/data/collections/b22194cb38ed18a5200b387ad8f243f0_1582015789.jpg"
            alt="collection"
            className="w-full h-full object-cover rounded-lg"
          />
          <div
            className="w-full h-full absolute bottom-0 rounded-lg"
            style={{
              backgroundImage:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.05) 50%, rgba(0, 0, 0, 0.05) 85%)",
            }}
          />
        </div>
        <div className="absolute bottom-2 left-4 text-white w-full ">
          <h4 className="z-10">Newly Opened</h4>
          <h6 className="flex items-center z-10">
            18 places <IoMdArrowDropright />
          </h6>
        </div>
      </div>
    </>
  );
};

export default PictureCarouselCard;
