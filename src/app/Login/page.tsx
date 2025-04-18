"use client";

import Link from "next/link";
import Navbar from "@/app/Navbar/page";
import Footer1 from "@/app/footter/page";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) {
      alert("✅ เข้าสู่ระบบสำเร็จ!");
      localStorage.setItem("token", data.token);
      router.push("/Hero");
    } else {
      alert("❌ " + data.message);
    }
  };

  return (
    <div className="flex flex-col min-h-screen ">
      <Navbar />

      <div className="flex flex-1 bg-gray-100">
        <div className="w-full max-w-lg p-9 ml-auto">
          <div className="w-full max-w-lg px-2 mb-2 flex justify-between items-center mt-17">
            <Link href="/Hero">
              <button className="text-gray-500 hover:text-gray-700">{`< กลับ`}</button>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">ยังไม่มีบัญชีใช่หรือไม่</span>
              <Link href="/register">
                <button className="bg-white text-red-500 border border-red-500 px-3 py-1 text-sm rounded-full hover:bg-red-50">
                  สร้างบัญชี
                </button>
              </Link>
            </div>
          </div>

          <div className="w-full max-w-lg bg-white rounded-xl shadow-lg p-9 mt-2">
            <h1 className="text-2xl font-bold text-gray-800 mb-6 leading-snug">
              เข้าสู่ระบบเพื่อสั่งไอศกรีมจาก Swensen’s
            </h1>

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  อีเมล <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="อีเมล"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1 text-black">
                  รหัสผ่าน <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  placeholder="รหัสผ่าน"
                  className="w-full border border-gray-300 rounded-md p-2"
                />
              </div>

              <div>
                <a href="#" className="text-blue-600 text-sm font-medium hover:underline">
                  ลืมรหัสผ่าน?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-full mt-2"
              >
                เข้าสู่ระบบ
              </button>
            </form>
          </div>
        </div>

        <div className="hidden lg:flex w-1/2 items-center justify-center">
          <img
            src="https://www.swensens1112.com/_next/image?url=%2Fimages%2Fbanner%2Fregister-banner.jpg&w=1920&q=75"
            alt="Swensen cakes"
            className="h-[90vh] object-contain"
          />
        </div>
      </div>

      <Footer1 />
    </div>
  );
}
