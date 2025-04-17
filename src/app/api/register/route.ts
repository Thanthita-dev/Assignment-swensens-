// src/app/api/register/route.ts
import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // ✅ ใช้ alias path จะดีกว่า
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, lastname, email, password, birthday, phone, gender } = body;

    if (!email || !password || !name || !lastname) {
      return NextResponse.json({ message: "ข้อมูลไม่ครบถ้วน" }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db("swensens_app");
    const users = db.collection("users");

    // ตรวจสอบอีเมลซ้ำ
    const userExist = await users.findOne({ email });
    if (userExist) {
      return NextResponse.json({ message: "อีเมลนี้มีอยู่แล้ว" }, { status: 400 });
    }

    // แฮชรหัสผ่าน
    const hashedPassword = await bcrypt.hash(password, 10);

    // บันทึกผู้ใช้
    await users.insertOne({
      name,
      lastname,
      email,
      password: hashedPassword,
      birthday,
      phone,
      gender,
      createdAt: new Date(),
    });

    return NextResponse.json({ message: "✅ สมัครสมาชิกสำเร็จ" });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    return NextResponse.json({ message: "เกิดข้อผิดพลาดบางอย่าง" }, { status: 500 });
  }
}