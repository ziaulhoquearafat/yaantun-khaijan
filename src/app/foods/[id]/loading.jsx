const FoodDetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 animate-pulse">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Image Skeleton */}
          <div className="bg-gray-200 h-[400px] rounded-2xl"></div>

          {/* Content Skeleton */}
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <div className="h-4 bg-gray-200 rounded w-24"></div>
              <div className="h-10 bg-gray-200 rounded w-3/4"></div>
              <div className="h-10 bg-gray-200 rounded w-1/2"></div>
            </div>

            <div className="h-12 bg-gray-200 rounded w-1/3"></div>

            <div className="space-y-3 pt-4">
              <div className="h-14 bg-gray-200 rounded-xl w-full"></div>
              <div className="h-14 bg-gray-200 rounded-xl w-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDetailsSkeleton;
