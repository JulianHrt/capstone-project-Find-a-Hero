import { getAllAds, createNewAd } from "../../../services/adServices";

export default async function handler(req, res) {
  if (req.method === "GET") {
    const allAds = await getAllAds();
    res.status(200).json(allAds);
  } else if (req.method === "POST") {
    const ad = JSON.parse(req.body);
    const createdAd = await createNewAd(ad);
    res.status(201).json(createdAd);
  } else {
    res
      .status(405)
      .setHeader("Allow", ["GET", "POST"])
      .send("only the Method GET and POST is allowed!");
  }
}
