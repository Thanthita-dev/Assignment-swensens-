// src/lib/mongodb.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("❌ ไม่พบ MONGO_URI กรุณาตั้งค่าใน .env หรือบน Vercel");
}

const options = {};

// ✅ ขยาย global object ให้ TypeScript รู้จัก
declare global {
  // ต้องใช้ 'var' เพื่อบอกว่าเป็นตัวแปรใน global scope
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// ✅ ใช้ globalThis และ let/const ตาม ESLint
let client: MongoClient;

if (!globalThis._mongoClientPromise) {
  client = new MongoClient(uri, options);
  globalThis._mongoClientPromise = client.connect();
}

const clientPromise = globalThis._mongoClientPromise!;
export default clientPromise;
