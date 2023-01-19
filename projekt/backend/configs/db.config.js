import mongoose from "mongoose";

export const connectDB = () => {
  mongoose.set("strictQuery", false);

  const connectionString = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_PATH}`;

  mongoose
    .connect(connectionString)
    .then(() => console.log("Connected to Atlas MongoDB"))
    .catch((err) => console.log(err));
};
