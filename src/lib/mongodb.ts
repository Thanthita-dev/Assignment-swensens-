// src/lib/mongodb.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("❌ ไม่พบ MONGO_URI กรุณาตั้งค่าใน .env หรือ Environment Variables บน Vercel");
}

const options = {};

declare global {
  // ✅ ขยาย globalThis ให้ TypeScript รู้จัก property นี้
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const client = new MongoClient(uri, options);

// ✅ ใช้ const ตรงนี้ได้เลย เพราะไม่เปลี่ยนค่า
const clientPromise =
  globalThis._mongoClientPromise ?? (globalThis._mongoClientPromise = client.connect());

export default clientPromise;
