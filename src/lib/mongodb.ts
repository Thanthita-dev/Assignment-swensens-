// src/lib/mongodb.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("❌ ไม่พบ MONGO_URI กรุณาตั้งค่าใน .env หรือ Environment Variables บน Vercel");
}

const options = {};

// ✅ ใช้ globalThis และประกาศ type สำหรับ TypeScript (ไม่มี namespace)
let clientPromise: Promise<MongoClient>;

if (!globalThis._mongoClientPromise) {
  const client = new MongoClient(uri, options);
  globalThis._mongoClientPromise = client.connect();
}

clientPromise = globalThis._mongoClientPromise as Promise<MongoClient>;

export default clientPromise;

// ✅ ขยาย TypeScript global type
declare global {
  // ต้องอยู่หลัง export default เสมอในไฟล์ module
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}
