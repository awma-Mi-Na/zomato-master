import { useState } from "react";
import Rating from "react-rating-stars-component";

// components
import ReviewCard from "../../components/restaurant/reviews/ReviewCard";
import AddReviewCard from "../../components/restaurant/reviews/AddReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState(["", "", "", ""]);
  const handleRating = (value) => console.log(value);
  return (
    <>
      <div className="flex flex-col md:flex-row relative gap-3 md:gap-4">
        <div className="md:hidden">
          <AddReviewCard />
        </div>
        <div className="flex flex-col gap-3 w-full md:w-2/3">
          {reviews.map((review) => (
            <ReviewCard {...review} />
          ))}
        </div>
        <aside
          style={{ height: "fit-content" }}
          className="hidden md:flex sticky top-2 md:w-1/3 bg-white p-3 shadow-md gap-3 md:flex-col items-start"
        >
          <AddReviewCard />
        </aside>
      </div>
    </>
  );
};

export default Reviews;
