import mongoose from "mongoose";
import { env } from "./env";

export async function connectDatabase() {
  if (!env.MONGODB_URI) {
    console.warn("⚠️ MONGODB_URI is not configured.");
    return;
  }

  try {
    await mongoose.connect(env.MONGODB_URI);
  } catch (error) {
    console.error("❌ MongoDB Connection Failed");
    console.error(error);
    process.exit(1);
  }
}
