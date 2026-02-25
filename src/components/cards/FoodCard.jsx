import { Eye, ShoppingCart } from "lucide-react";
import Link from "next/link";

const FoodCard = ({ food }) => {
  const { title, foodImg, price, category, id } = food;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      {/* Image Section */}
      <div className="relative group">
        <img className="w-full h-56 object-cover" src={foodImg} alt={title} />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-orange-600 shadow-sm">
          {category}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 line-clamp-1">
          {title}
        </h5>

        <div className="flex items-center justify-between mt-4">
          <span className="text-2xl font-extrabold text-gray-900">
            ৳{price}
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-3 mt-6">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-orange-500 rounded-lg hover:bg-orange-600 transition-colors">
            <ShoppingCart size={18} />
            Add to Cart
          </button>

          <Link
            href={`/foods/${id}`}
            className="px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 border border-transparent rounded-lg hover:bg-gray-200 transition-colors"
          >
            <Eye size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
