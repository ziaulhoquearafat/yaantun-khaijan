import { feedback } from "../../route";

export async function GET(request, { params }) {
  const { id } = await params;

  const singlFeedback = feedback.find((fd) => fd.id == id) || {};

  return Response.json(singlFeedback);
}
