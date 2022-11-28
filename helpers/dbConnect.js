import mongoose from "mongoose";

const URI = `mongodb+srv://JulianHirt:${process.env.MONGODB_PASSWORD}@cluster0.v6evwly.mongodb.net/?retryWrites=true&w=majority`;

async function connectWithMongoDB() {
  await mongoose.connect(URI);
}

export default connectWithMongoDB;
