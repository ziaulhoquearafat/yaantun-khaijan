import { Star, ThumbsUp } from "lucide-react";

const ReviewCard = ({ review }) => {
  return (
    <div className="max-w-2xl bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      {/* Header: User Info & Rating */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <img
            src={review.photo}
            alt={review.user}
            className="w-12 h-12 rounded-full object-cover border-2 border-orange-100"
          />
          <div>
            <h4 className="font-bold text-gray-900">{review.user}</h4>
            <p className="text-xs text-gray-400">
              {new Date(review.date).toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-center bg-orange-50 px-2 py-1 rounded-lg">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${i < review.rating ? "fill-orange-400 text-orange-400" : "text-gray-300"}`}
            />
          ))}
        </div>
      </div>

      {/* Review Text */}
      <p className="text-gray-600 leading-relaxed mb-6 italic">
        "{review.review}"
      </p>

      {/* Footer: Like Button */}
      <div className="flex items-center justify-between border-t border-gray-50 pt-4">
        <button className="flex items-center gap-2 text-gray-500 hover:text-orange-500 transition-colors group">
          <div className="p-2 rounded-full group-hover:bg-orange-50">
            <ThumbsUp size={18} />
          </div>
          <span className="text-sm font-medium">
            {review.likes.length} Likes
          </span>
        </button>

        <button className="text-sm text-gray-400 hover:underline">
          Report
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
