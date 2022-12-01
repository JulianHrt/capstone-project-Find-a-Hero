import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  userName: String,
  password: String,
  userId: String,
  karmaAccount: Number,
  userPictureSrc: String,
  userEmail: String,
  userPhonenumber: String,
});

const User = models.User || model("User", userSchema);

export default User;
