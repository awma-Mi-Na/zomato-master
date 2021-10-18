const PhotoCollection = (props) => {
  return (
    <>
      <div className="w-32 h-32 md:w-52 md:h-60 my-6">
        <div
          className="h-full w-full overflow-hidden rounded-lg"
          onClick={props.openViewer(props.index)}
        >
          <img
            src={props.image}
            alt="menu"
            className="w-full h-full transform transition duration-500 hover:scale-110 rounded-lg object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default PhotoCollection;
