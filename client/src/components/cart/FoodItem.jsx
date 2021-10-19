/*

name: Cheese n Tomato
price: 300
quantity: 21
*/

const FoodItem = (props) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <h5 className="text-md font-semibold">{props.name}</h5>
          <small className="text-xs font-light">dfdfdfd </small>
        </div>
        <div className="flex flex-col items-end">
          <small>₹{parseInt(props.quantity) * parseInt(props.price)}</small>
          <div className="flex items-center text-sm bg-zmtcolor-400 px-2 py-1 rounded-md text-white gap-2">
            <button>-</button>
            <small>{props.quantity}</small>
            <button>+</button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default FoodItem;
