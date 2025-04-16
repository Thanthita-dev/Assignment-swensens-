import Navbar from "@/components/Navbar/Navbar";
import Footer1 from "@/components/footter/Footter1";

const page = () => {
  return (
    <>
      <Navbar />
      
      

      <div className="flex min-h-screen bg-gray-100">
        {/* ฝั่งซ้าย - Form */}
        <div className="flex flex-col w-1/2 bg-gray-100 items-center justify-start pt-10 px-8">
          <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
            {/* Header: กลับ + เข้าสู่ระบบ */}
            <div className="flex justify-between items-center mb-6">
              <button className="text-gray-500 hover:text-gray-700">{`< กลับ`}</button>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">มีบัญชีสมาชิกอยู่แล้วใช่หรือไม่</span>
                <button className="text-red-500 border border-red-500 px-3 py-1 text-sm rounded-full hover:bg-red-50">
                  เข้าสู่ระบบ
                </button>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl font-bold text-gray-700 mb-6 leading-snug">
              สมัครสมาชิกฟรี! รับสิทธิประโยชน์และส่วนลดมากมาย
            </h1>

            {/* Form */}
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">ชื่อ <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="ชื่อ" className="w-full border border-gray-300 rounded-md p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium">นามสกุล <span className="text-red-500">*</span></label>
                  <input type="text" placeholder="นามสกุล" className="w-full border border-gray-300 rounded-md p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium">อีเมล <span className="text-red-500">*</span></label>
                  <input type="email" placeholder="อีเมล" className="w-full border border-gray-300 rounded-md p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium">รหัสผ่าน <span className="text-red-500">*</span></label>
                  <input type="password" placeholder="รหัสผ่าน" className="w-full border border-gray-300 rounded-md p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium">วันเกิด <span className="text-red-500">*</span></label>
                  <input type="date" className="w-full border border-gray-300 rounded-md p-2" />
                </div>

                <div>
                  <label className="block text-sm font-medium">เบอร์โทรศัพท์ <span className="text-red-500">*</span></label>
                  <input type="tel" className="w-full border border-gray-300 rounded-md p-2" />
                </div>
              </div>

              {/* เพศ */}
              <div>
                <label className="block text-sm font-medium mb-2">เพศ <span className="text-red-500">*</span></label>
                <div className="flex space-x-6">
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="gender" value="ชาย" className="accent-red-600" />
                    <span>ชาย</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="gender" value="หญิง" className="accent-red-600" />
                    <span>หญิง</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="radio" name="gender" value="ไม่ระบุ" defaultChecked className="accent-red-600" />
                    <span>ไม่ระบุ</span>
                  </label>
                </div>
              </div>

              {/* Checkbox */}
              <div className="space-y-3 text-sm text-gray-700">
                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    ฉันได้อ่านและยอมรับ <a href="#" className="text-blue-500 underline">ข้อกำหนดในการใช้งาน</a> และ <a href="#" className="text-blue-500 underline">นโยบายความเป็นส่วนตัว</a> ของสเวนเซ่นส์
                  </span>
                </label>

                <label className="flex items-start space-x-2">
                  <input type="checkbox" className="mt-1" />
                  <span>
                    ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จากสเวนเซ่นส์และ <a href="#" className="text-blue-500 underline">บริษัทในเครือ</a> โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ สามารถศึกษา <a href="#" className="text-blue-500 underline">นโยบายความเป็นส่วนตัว</a> เพิ่มเติมได้
                  </span>
                </label>
              </div>

              {/* ปุ่มสมัคร */}
              <button className="w-full bg-gray-400 text-white py-2 rounded-full mt-4" disabled>
                สร้างบัญชี
              </button>
            </form>
          </div>
        </div>

        {/* ฝั่งขวา - ภาพเค้ก */}
        <div className="w-1/2 h-full bg-gray-100flex items-center justify-center">
          <img src="https://www.swensens1112.com/_next/image?url=%2Fimages%2Fbanner%2Fregister-banner.jpg&w=1920&q=75" alt="Swensen cakes" className="h-[90vh] object-contain" />
        </div>
      </div>

      <Footer1 />
    </>
  );
};

export default page;
