// import Rating from "react-rating--component";
import { useState } from "react";

// components
import ReviewModal from "./ReviewModal";

const AddReviewCard = () => {
  //   const handleRating = (value) => console.log(value);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  return (
    <>
      <ReviewModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className="text-xl">Rate your experience for</h1>
      <div className="flex items-center gap-6">
        <div className="flex items-center">
          <input type="radio" name="rating" id="dining" />
          <label htmlFor="dining">Dining</label>
        </div>
        <div className="flex items-center gap-2">
          <input type="radio" name="rating" id="delivery" />
          <label htmlFor="delivery">Delivery</label>
        </div>
      </div>
      <button onClick={openModal} className="text-zmtcolor-400">
        Write a review
      </button>
    </>
  );
};
export default AddReviewCard;
