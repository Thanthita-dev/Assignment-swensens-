import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// ✅ เพิ่ม type ให้กับ globalThis แบบไม่ error
declare global {
  // ต้องใช้ interface ขยาย NodeJS.Global
  namespace NodeJS {
    interface Global {
      _mongoClientPromise?: Promise<MongoClient>;
    }
  }
}

if (!uri) {
  throw new Error("❌ กรุณาใส่ Mongo URI ในไฟล์ .env.local");
}

if (process.env.NODE_ENV === "development") {
  // ✅ ใช้ globalThis แบบ cast type
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
