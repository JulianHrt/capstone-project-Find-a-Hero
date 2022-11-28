import Ad from "../models/ads";
import crypto from "crypto";
import connectWithMongoDB from "../helpers/dbConnect";

async function getAllAds() {
  await connectWithMongoDB();

  const ads = await Ad.find({}, { _id: false, __v: false });

  return ads;
}

async function getAdById(id) {
  await connectWithMongoDB();

  const ad = await Ad.findOne({ id }, { _id: false, __v: false });
  return ad;
}

async function createNewAd(ad) {
  await connectWithMongoDB();

  const createdAd = await Ad.create({
    ...ad,
    id: crypto.randomUUID(),
  });

  return {
    ...createdAd.toObject(),
    _id: undefined,
    __v: undefined,
  };
}

async function updateAdById(id, ad) {
  await connectWithMongoDB();

  await Ad.updateOne({ id }, ad);
  const updatedAd = await getAdById(id);
  return updatedAd;
}

async function deleteAdById(id) {
  await connectWithMongoDB();

  const ad = await getAdById(id);
  await Ad.deleteOne({ id });
  return ad;
}

export { getAllAds, getAdById, createNewAd, updateAdById, deleteAdById };
