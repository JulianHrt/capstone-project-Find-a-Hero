import {
  getAdById,
  updateAdById,
  deleteAdById,
} from "../../../../services/adServices";
import { getUserById } from "../../../../services/userServices";

export default async function handler(request, response) {
  const { id } = request.query;

  if (request.method === "GET") {
    const oneAd = await getAdById(id);
    console.log(oneAd.userId);
    const user = await getUserById(oneAd.userId);
    oneAd.user = user;
    response.status(200).json(oneAd);
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
