const MenuCollection = (props) => {
  return (
    <>
      <div className="w-32 h-32 md:w-52 md:h-60 my-6">
        <div className="h-full w-full overflow-hidden rounded-lg">
          <img
            src={props.image}
            alt="menu"
            className="w-full h-full transform transition duration-400 hover:scale-110 rounded-lg"
          />
        </div>
        <strong>{props.menuTitle}</strong>
        <p>{props.pages} page(s)</p>
      </div>
    </>
  );
};

export default MenuCollection;
