import User from "../models/user";
import connectWithMongoDB from "../helpers/dbConnect";

async function getUserById(id) {
  await connectWithMongoDB();

  const user = await User.findOne({ userId: id }, { _id: false, __v: false });
  return user;
}

async function getUserIdByName(name) {
  await connectWithMongoDB();

  const user = await User.findOne(
    { userName: name },
    { _id: false, __v: false }
  );
  return user;
}

export { getUserById };
