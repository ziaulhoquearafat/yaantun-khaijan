export const dynamic = "force-dynamic";
import { connect } from "@/app/lib/dbConnect";

const feedbackCollections = connect("customer_feedbacks");

export async function GET(request) {
  const result = await feedbackCollections.find().toArray();
  return Response.json(result);
}

export async function POST(request) {
  const { message } = await request.json();

  if (!message || typeof message !== "string") {
    return Response.json({
      status: 200,
      message: "pleasae send a valid message",
    });
  }

  const newFeedback = { message, date: new Date().toISOString() };
  const result = await feedbackCollections.insertOne(newFeedback);
  return Response.json(result);
}
