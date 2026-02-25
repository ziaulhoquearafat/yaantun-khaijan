const FoodCardSkeleton = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-56 bg-gray-200"></div>

      {/* Content Placeholder */}
      <div className="p-5">
        {/* Title Placeholder */}
        <div className="h-6 bg-gray-200 rounded-md w-3/4 mb-4"></div>

        {/* Price Placeholder */}
        <div className="h-8 bg-gray-200 rounded-md w-1/4 mt-4"></div>

        {/* Buttons Placeholder */}
        <div className="flex gap-3 mt-6">
          <div className="h-10 bg-gray-200 rounded-lg flex-1"></div>
          <div className="h-10 bg-gray-200 rounded-lg w-12"></div>
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;
