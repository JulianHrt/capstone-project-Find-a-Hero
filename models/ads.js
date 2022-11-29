import { Schema, model, models } from "mongoose";

const adSchema = new Schema({
  id: String,
  userId: String,
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

export default Ad;
