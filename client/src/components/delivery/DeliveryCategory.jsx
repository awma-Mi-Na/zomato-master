const DeliverySmCard = ({ image, title }) => {
  return (
    <div className="bg-white shadow rounded-md w-24 md:w-56 lg:hidden">
      <div className="w-full h-24 ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div>
        <h3 className="text-sm font-light text-center my-1">{title}</h3>
      </div>
    </div>
  );
};

const DeliveryLgCard = ({ image, title }) => {
  return (
    <div className="hidden lg:inline w-64 h-48 ">
      <div className="w-60 h-44 ">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-md shadow-lg"
        />
      </div>
      <div className="">
        <h3 className="text-xl font-medium my-1">{title}</h3>
      </div>
    </div>
  );
};

const DeliveryCategory = (props) => {
  return (
    <>
      <DeliverySmCard {...props} />
      <DeliveryLgCard {...props} />
    </>
  );
};

export default DeliveryCategory;
