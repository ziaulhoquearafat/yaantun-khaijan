import ReviewSkeleton from "@/components/skeletons/ReviesSkeleton";

const ReviewLoading = () => {
  return (
    <div className="grid grid-cols-4 my-5 gap-5">
      {[...Array(12)].map((_, index) => (
        <ReviewSkeleton key={index}></ReviewSkeleton>
      ))}
    </div>
  );
};

export default ReviewLoading;
