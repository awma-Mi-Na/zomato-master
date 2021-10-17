import classnames from "classnames";

const MenuCategory = (props) => {
  return (
    <>
      <div
        className={classnames({
          "text-zmtcolor-400 px-1 py-2 border-r-2 border-zmtcolor-400 bg-zmtcolor-50":
            props.isActive,
        })}
      >
        <h3 id={props.name} onClick={props.onClickHandler}>
          {props.name}({props.items.length})
        </h3>
      </div>
    </>
  );
};

export default MenuCategory;
