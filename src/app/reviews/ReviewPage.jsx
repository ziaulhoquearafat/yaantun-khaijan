"use client";
import ReviewCard from "@/components/cards/ReviewCard";
import { Anek_Bangla } from "next/font/google";
import { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

export const metadata = {
  title: "Satisfied Client",
};

const anek = Anek_Bangla({
  weight: ["400", "500", "600", "700", "800"],
});

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://taxi-kitchen-api.vercel.app/api/v1/reviews")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data.reviews || []);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <ReviewLoading></ReviewLoading>;
  }
  return (
    <div className={anek.className}>
      <h2 className="text-4xl font-bold">
        Total <span className="text-yellow-500">{reviews.length} </span> Reviews
        Found
      </h2>
      <div className="grid my-5 grid-cols-3 gap-5">
        {reviews.map((rev) => (
          <ReviewCard review={rev} key={rev.id}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default ReviewsPage;
