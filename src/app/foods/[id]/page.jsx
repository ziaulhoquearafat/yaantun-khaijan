const getSignleFoods = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await res.json();
  // API response structure onujayi data.details ba data.data check koro
  return data.details;
};

const Page = async ({ params }) => {
  const { id } = await params;
  const food = await getSignleFoods(id);

  if (!food) {
    return (
      <div className="h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold text-red-500">Food Not Found</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-10">
          {/* Image Section */}
          <div className="relative">
            <img
              src={food.foodImg}
              alt={food.title}
              className="w-full h-[400px] object-cover rounded-2xl"
            />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-orange-600 shadow-sm">
                {food.category}
              </span>
              <span className="bg-gray-800/80 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-semibold text-white shadow-sm">
                {food.area}
              </span>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-400 font-mono mb-2">
              Item ID: #{id}
            </p>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {food.title}
            </h1>

            <div className="flex items-baseline gap-2 mb-8">
              <span className="text-4xl font-black text-orange-500">
                ৳{food.price}
              </span>
              <span className="text-gray-400 line-through">
                ৳{food.price + 100}
              </span>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-orange-200">
                Add to Cart
              </button>

              {food.video && (
                <a
                  href={food.video}
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 border-2 border-gray-100 hover:bg-gray-50 text-gray-700 font-bold py-4 rounded-xl transition-all"
                >
                  Watch Recipe Video
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
