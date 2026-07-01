import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: Number(process.env.PORT) || 9000,
  NODE_ENV: process.env.NODE_ENV ?? "development",
  MONGODB_URI: process.env.MONGODB_URI ?? "",
  JWT_SECRET: process.env.JWT_SECRET ?? "",
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET ?? "",
};
