"use client";

import Navbar from "@/app/Navbar/page";
import Footer1 from "@/app/footter/page";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    birthday: "",
    phone: "",
    gender: "ไม่ระบุ",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
  
    const data = await res.json();
    if (res.ok) {
      alert("✅ สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ");
      router.push("/Login"); // ✅ ไปยังหน้า Login
    } else {
      alert("❌ " + data.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Content: Form + Image */}
        <div className="flex flex-1 flex-col lg:flex-row bg-gray-100 min-h-screen ">
          {/* Form Section */}
          <div className="w-full max-w-lg p-9 ml-auto ">
          <div className="w-full max-w-lg px-2 mb-2 flex justify-between items-center mt-17">
            <Link href="/Hero">
              <button className="text-gray-500 hover:text-gray-700">{`< กลับ`}</button>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">มีบัญชีสมาชิกอยู่แล้วใช่หรือไม่</span>
              <Link href="/Login">
                <button className="bg-white text-red-500 border border-red-500 px-3 py-1 text-sm rounded-full hover:bg-red-50">
                  เข้าสู่ระบบ
                </button>
              </Link>
          </div>
        </div>

      {/* กล่องฟอร์ม */}
      <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-9 mt-2">
        {/* Heading */}
        <h1 className="text-2xl font-bold text-gray-800 mb-6 leading-snug">
          สมัครสมาชิกฟรี! รับสิทธิประโยชน์และส่วนลดมากมาย
        </h1>

            {/* Form */}
            <form className="space-y-6 " onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-4">
                {/* ชื่อ นามสกุล */}
                <div>
                  <label className="block text-sm font-medium text-black">
                    ชื่อ <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="ชื่อ" className="w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">
                    นามสกุล <span className="text-red-500">*</span>
                  </label>
                  <input type="text" name="lastname" value={form.lastname} onChange={handleChange} placeholder="นามสกุล" className="w-full border border-gray-300 rounded-md p-2" />
                </div>

                {/* อีเมล รหัสผ่าน */}
                <div>
                  <label className="block text-sm font-medium text-black">
                    อีเมล <span className="text-red-500">*</span>
                  </label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="อีเมล" className="w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-mediu text-blackm">
                    รหัสผ่าน <span className="text-red-500">*</span>
                  </label>
                  <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="รหัสผ่าน" className="w-full border border-gray-300 rounded-md p-2" />
                </div>

                {/* วันเกิด เบอร์โทร */}
                <div>
                  <label className="block text-sm font-medium text-black">
                    วันเกิด <span className="text-red-500">*</span>
                  </label>
                  <input type="date" name="birthday" value={form.birthday} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-black">
                    เบอร์โทรศัพท์ <span className="text-red-500">*</span>
                  </label>
                  <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="w-full border border-gray-300 rounded-md p-2" />
                </div>
              </div>

              {/* เพศ */}
              <div>
                <label className="block text-sm font-medium mb-2 text-black">
                  เพศ <span className="text-red-500">*</span>
                </label>
                <div className="flex space-x-6">
                  {["ชาย", "หญิง", "ไม่ระบุ"].map((g) => (
                    <label key={g} className="flex items-center space-x-2">
                      <input type="radio"  name="gender" value={g} checked={form.gender === g} onChange={handleChange} className="accent-red-600" />
                      <span>{g}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-b border-gray-300 my-4"></div>

              {/* Checkbox */}
              <div className="space-y-3 text-sm text-gray-700">
                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    ฉันได้อ่านและยอมรับ{" "}
                    <a href="#" className="text-blue-500 underline">ข้อกำหนดในการใช้งาน</a> และ{" "}
                    <a href="#" className="text-blue-500 underline">นโยบายความเป็นส่วนตัว</a> ของสเวนเซ่นส์ 
                    <span className="text-red-500"> *</span>
                  </span>
                </label>
                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    ฉันยินยอมรับข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จากสเวนส์เซ่นส์และ{" "}
                    <a href="#" className="text-blue-500 underline">บริษัทในเครือ</a> โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ สามารถศึกษาเงื่อนไขหรือข้อตกลง{" "}
                    <a href="#" className="text-blue-500 underline">นโยบายความเป็นส่วนตัว</a> เพิ่มเติมได้ที่เว็บไซต์ของบริษัท
                  </span>
                </label>
              </div>

              {/* ปุ่ม */}
              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-full mt-4"
                
              >
                สร้างบัญชี
              </button>
            </form>
          </div>
        </div>

        {/* Image Section */}
        <div className="hidden lg:flex w-1/2 items-center justify-center">
          <img
            src="https://www.swensens1112.com/_next/image?url=%2Fimages%2Fbanner%2Fregister-banner.jpg&w=1920&q=75"
            alt="Swensen cakes"
            className="h-[90vh] object-contain"
          />
        </div>
      </div>

      {/* Footer */}
      <Footer1 />
    </div>
  );
};