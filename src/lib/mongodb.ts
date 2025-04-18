import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("❌ ไม่พบ MONGO_URI กรุณาตั้งค่าใน .env หรือ Environment Variables บน Vercel");
}

const options = {};

declare global {
  // ใช้ let แบบนี้เพราะ global property อาจถูกแก้ไขได้ (เช่นใน hot reload)
  // ต้องไม่ใช้ var เพราะ ESLint ไม่อนุญาต
  // ใช้ let หรือ const สำหรับ clientPromise ด้านล่าง
  // และใช้ globalThis แทน global เพื่อรองรับทั้ง Node และ Browser
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

const client = new MongoClient(uri, options);

// ✅ ใช้ globalThis และ let/const แทน var
const clientPromise =
  globalThis._mongoClientPromise ?? (globalThis._mongoClientPromise = client.connect());

export default clientPromise;
