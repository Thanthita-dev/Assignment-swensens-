import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("❌ ไม่พบ MONGO_URI กรุณาตั้งค่าใน .env หรือ Environment Variables บน Vercel");
}

const options = {};

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined; // กลับมาใช้ var แต่จะแก้ไข type definition ด้านล่าง
  interface Global { // เพิ่ม interface Global
    _mongoClientPromise: Promise<MongoClient> | undefined; // ประกาศ _mongoClientPromise ใน interface
  }
  const globalThis: Global; // Re-declare globalThis with the new interface
}

const client = new MongoClient(uri, options);
const clientPromise =
  globalThis._mongoClientPromise ?? (globalThis._mongoClientPromise = client.connect());

export default clientPromise;