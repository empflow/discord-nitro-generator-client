import mongoose from "mongoose";
import getEnvVar from "./getEnvVar";

const { MONGO_URL } = process.env;

declare global {
  var mongoose: any;
}

if (!MONGO_URL) throw new Error("MONGO_URL is not defined.");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

async function connDb() {
  if (cached.conn) return cached.conn;

  const MONGO_URL = getEnvVar("MONGO_URL");
  const DB_NAME = process.env.DB_NAME;
  const defaultDbName = "discord-codes";
  cached.conn = await mongoose.connect(MONGO_URL, {
    dbName: DB_NAME || defaultDbName,
  });

  return cached.conn;
}

export default connDb;
