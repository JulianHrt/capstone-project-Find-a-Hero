import { getAdById } from "../../../../helpers/db";

export default async function handler(request, response) {
  console.log(request.query.id);
  const { id } = request.query;
  if (request.method === "GET") {
    const product = await getAdById(id);
    response.status(200).json(product);
  } else {
    response.status(405).setHeader("Allow", ["GET"]).send();
  }
}
