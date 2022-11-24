import { getAdById, updateAdById, deleteAdById } from "../../../../helpers/db";

export default async function handler(request, response) {
  const { id } = request.query;
  if (request.method === "GET") {
    const product = await getAdById(id);
    response.status(200).json(product);
  } else if (request.method === "PATCH") {
    const ad = JSON.parse(request.body);
    const updatedAd = await updateAdById(id, ad);
    response.status(200).json(updatedAd);
  } else if (request.method === "DELETE") {
    const ad = await deleteAdById(id);
    response.status(200).json(ad);
  } else {
    response.status(405).setHeader("Allow", ["GET", "PATCH", "DELETE"]).send();
  }
}
