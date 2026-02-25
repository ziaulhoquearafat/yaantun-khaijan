const getSignleFoods = async (id) => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );
  const data = await res.json();
  return data.details;
};

const page = async ({ params }) => {
  const { id } = await params;
  return <div>{id}</div>;
};

export default page;
