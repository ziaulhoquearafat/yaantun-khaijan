const ReviewSkeleton = () => {
  return (
    <div className="max-w-2xl bg-white border border-gray-100 rounded-2xl p-6 animate-pulse">
      {/* Header Skeleton */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="h-3 bg-gray-200 rounded w-16"></div>
          </div>
        </div>
        <div className="h-6 bg-gray-200 rounded w-20"></div>
      </div>

      {/* Body Skeleton */}
      <div className="space-y-3 mb-6">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Footer Skeleton */}
      <div className="flex justify-between border-t border-gray-50 pt-4">
        <div className="h-8 bg-gray-200 rounded w-20"></div>
        <div className="h-4 bg-gray-200 rounded w-12"></div>
      </div>
    </div>
  );
};

export default ReviewSkeleton;
