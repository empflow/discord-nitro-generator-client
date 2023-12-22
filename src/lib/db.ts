import mongoose from "mongoose";
import getEnvVar from "./getEnvVar";
declare global {
  var mongoose: any;
}

const MONGO_URL = getEnvVar("MONGO_URL");
const DB_NAME = getEnvVar("DB_NAME");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export default async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }
  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
      dbName: DB_NAME,
    } satisfies mongoose.ConnectOptions;
    cached.promise = mongoose.connect(MONGO_URL, opts).then((mongoose) => {
      return mongoose;
    });
  }
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}
