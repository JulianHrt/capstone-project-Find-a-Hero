import { getAllAds, createNewAd } from "../../../services/adServices";

export default async function handler(request, response) {
  if (request.method === "GET") {
    const allAds = await getAllAds();
    response.status(200).json(allAds);
  } else if (request.method === "POST") {
    const ad = JSON.parse(request.body);
    const createdAd = await createNewAd(ad);
    response.status(201).json(createdAd);
  } else {
    response
      .status(405)
      .setHeader("Allow", ["GET", "POST"])
      .send("only the Method GET and POST is allowed!");
  }
}
