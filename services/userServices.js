import User from "../models/user";
import connectWithMongoDB from "../helpers/dbConnect";

async function getUserById(id) {
  await connectWithMongoDB();

  const user = await User.findOne({ userId: id }, { _id: false, __v: false });
  return user;
}
async function updateCurrentUserById(id, user) {
  await connectWithMongoDB();

  await User.updateOne({ userId: id }, user);
  const updatedUser = await getUserById(id);
  return updatedUser;
}

export { getUserById, updateCurrentUserById };
