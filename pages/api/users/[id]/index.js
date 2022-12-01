import {
  getUserById,
  updateCurrentUserById,
} from "../../../../services/userServices";

export default async function handler(request, response) {
  const { id } = request.query;
  if (request.method === "GET") {
    const user = await getUserById(id);
    response.status(200).json(user);
  } else if (request.method === "PATCH") {
    const user = JSON.parse(request.body);
    const updatedUser = await updateCurrentUserById(id, user);
    response.status(200).json(updatedUser);
  } else {
    response
      .status(405)
      .setHeader("Allow", ["GET", "PATCH"])
      .send("only the Methods GET and PATCH are allowed!");
  }
}
