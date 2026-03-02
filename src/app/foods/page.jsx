import FoodCard from "@/components/cards/FoodCard";
import CartItems from "./CartItems";

const getFoods = async () => {
  const res = await fetch(
    "https://taxi-kitchen-api.vercel.app/api/v1/foods/random",
  );
  const data = await res.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data.foods || [];
};

const FoodsPage = async () => {
  const foods = await getFoods();
  console.log(foods);
  return (
    <div>
      <div className="text-5xl font-bold">
        <h2>
          Total <span className="text-amber-400">{foods.length}</span> Foods
          Found
        </h2>
      </div>
      <div className="flex gap-5">
        <div className=" flex-1 grid grid-cols-4 my-5 gap-5">
          {foods.map((food) => (
            <FoodCard key={food.id} food={food}></FoodCard>
          ))}
        </div>
        <div className="w-62.5 border-2 rounded-xl p-4 border-gray-500">
          <h2 className="text-2xl font-bold">Cart Items</h2> <hr />
          <CartItems></CartItems>
        </div>
      </div>
    </div>
  );
};

export default FoodsPage;
