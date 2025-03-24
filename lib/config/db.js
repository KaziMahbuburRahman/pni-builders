import mongoose from "mongoose";

export const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI);
    console.log("DB Connected");
  } catch (error) {
    console.log("DB Not Connected", error);
  }
};
