import FoodCard from "@/components/cards/FoodCard";

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
      <div className="grid grid-cols-4 my-5 gap-5">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food}></FoodCard>
        ))}
      </div>
    </div>
  );
};

export default FoodsPage;
