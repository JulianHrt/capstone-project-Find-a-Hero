import mongoose, { model, models, Schema } from "mongoose";
import crypto from "crypto";

const URI = `mongodb+srv://JulianHirt:${process.env.MONGODB_PASSWORD}@cluster0.v6evwly.mongodb.net/?retryWrites=true&w=majority`;

const adSchema = new Schema({
  id: String,
  userName: String,
  userPictureSrc: String,
  userEmail: String,
  userPhonenumber: String,
  adPictureSrc: String,
  adTitle: String,
  adDescription: String,
  adCosts: String,
  category: String,
  tags: Array,
  createdDate: Object,
});

const Ad = models.Ad || model("Ad", adSchema);

async function connectWithMongoDB() {
  await mongoose.connect(URI);
}

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

export { getAllAds, getAdById, createNewAd, updateAdById };
