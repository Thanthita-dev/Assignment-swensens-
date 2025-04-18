import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("❌ ไม่พบ MONGO_URI กรุณาตั้งค่าใน .env หรือ Environment Variables บน Vercel");
}

const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
  // เพื่อหลีกเลี่ยง Hot Reload แล้วสร้าง client ใหม่ซ้ำ
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!global._mongoClientPromise) {
  client = new MongoClient(uri, options);
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

export default clientPromise;
