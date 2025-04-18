import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;
if (!uri) {
  throw new Error("❌ ไม่พบ MONGO_URI กรุณาตั้งค่าใน .env หรือบน Vercel");
}

const options = {};

// ✅ ขยาย global object แบบถูกต้อง
declare global {
  // บอก TypeScript ว่า globalThis จะมีตัวแปรนี้
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

// ✅ ประกาศตัวแปรให้จริง
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!globalThis._mongoClientPromise) {
  client = new MongoClient(uri, options);
  globalThis._mongoClientPromise = client.connect();
}

const clientPromiseFinal = globalThis._mongoClientPromise!;
export default clientPromiseFinal;
