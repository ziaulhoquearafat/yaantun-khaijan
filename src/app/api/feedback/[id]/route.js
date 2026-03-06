import { connect } from "@/app/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = await params;

  const feedbackCollections = await connect("customer_feedbacks");

  const query = { _id: new ObjectId(id) };

  const result = await feedbackCollections.findOne(query);

  return Response.json(result);
}
