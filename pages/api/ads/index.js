import { getAllAds } from "../../../helpers/db";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const ads = await getAllAds();
    res.status(200).json(ads);
  } else {
    res.status(405).setHeader("Allow", ["GET"]).send();
  }
}
