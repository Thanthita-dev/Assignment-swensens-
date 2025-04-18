// src/lib/mongodb.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("❌ ไม่พบ MONGO_URI กรุณาตั้งค่าใน .env หรือ Environment Variables บน Vercel");
}

const options = {};

// ✅ ขยาย global object ให้ TypeScript และ ESLint รับรู้
declare global {
  namespace NodeJS {
    interface Global {
      _mongoClientPromise?: Promise<MongoClient>;
    }
  }

  // สำหรับใช้กับ globalThis ใน TypeScript
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// ✅ ใช้ globalThis และ let/const แทน var ตามมาตรฐาน ESLint
const client = new MongoClient(uri, options);

if (!globalThis._mongoClientPromise) {
  globalThis._mongoClientPromise = client.connect();
}

const clientPromise = globalThis._mongoClientPromise;

export default clientPromise;
