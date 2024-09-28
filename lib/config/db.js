import mongoose from "mongoose";

export const connectToDatabase = async () => {
    await mongoose.connect(process.env.NEXT_PUBLIC_MONGODB_URI)
    console.log("DB Connected")
}