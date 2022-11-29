import { getUserById } from "../../../../services/userServices";

export default async function handler(request, response) {
  const { id } = request.query;
  if (request.method === "GET") {
    const user = await getUserById(id);
    response.status(200).json(user);
  } else {
    response
      .status(405)
      .setHeader("Allow", ["GET", "POST"])
      .send("only the Method GET and POST is allowed!");
  }
}
