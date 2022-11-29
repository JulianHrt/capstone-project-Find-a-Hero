import { getAllAds, createNewAd } from "../../../services/adServices";
import { getUserById } from "../../../services/userServices";

export default async function handler(request, response) {
  if (request.method === "GET") {
    const allAds = await getAllAds();
    for (let i = 0; i < allAds.length; i++) {
      const ad = allAds[i];
      const user = await getUserById(ad.userId);
      allAds[i].user = user;
    }
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
