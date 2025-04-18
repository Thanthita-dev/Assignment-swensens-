import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("❌ ไม่พบ MONGO_URI กรุณาตั้งค่าใน .env หรือ Environment Variables บน Vercel");
}

const options = {};

declare global {
  let _mongoClientPromise: Promise<MongoClient> | undefined; // เปลี่ยน var เป็น let
}

const client = new MongoClient(uri, options);
const clientPromise =
  globalThis._mongoClientPromise ?? (globalThis._mongoClientPromise = client.connect());

export default clientPromise;