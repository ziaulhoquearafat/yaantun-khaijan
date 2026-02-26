"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const ReviewPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews);
        setLoading(false);
      });
  }, []);
  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }
  return (
    <div>
      <div className="text-5xl font-bold">
        <h2>
          Total <span className="text-amber-400">{reviews.length}</span> Reviews
          Found
        </h2>
      </div>
      <div className="grid grid-cols-4 my-5 gap-5">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;
