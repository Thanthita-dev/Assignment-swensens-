// src/lib/mongodb.ts
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// แก้ TypeScript error สำหรับ global
declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}

if (!uri) {
  throw new Error("❌ กรุณาใส่ Mongo URI ในไฟล์ .env.local");
}

if (process.env.NODE_ENV === "development") {
  // ใช้ global เพื่อไม่ให้สร้าง client ใหม่ทุกครั้งเมื่อ hot reload
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // production: ไม่ใช้ global
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;