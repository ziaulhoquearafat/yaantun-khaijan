export const feedback = [
  {
    id: 1,
    message: "food is very delicious",
  },
  {
    id: 2,
    message: "Waiters behavior is very rood",
  },
];

export async function GET(request) {
  return Response.json({
    status: 200,
    message: "Created An api successfully",
  });
}
