import Navbar from "@/components/Navbar/Navbar"
import Footer1 from "@/components/footter/Footter1";



const page = () => {
  return (
   <>
   <Navbar />
   
   <div className="flex items-center justify-center min-h-screen bg-gray-100">
        
        <div className="bg-white flex flex-col rounded-xl shadow-lg  max-w-xl h-[750px]">
            <div className="flex flex-col  p-10">
                <h1 className="text-3xl font-bold text-gray-700 mb-6">
                    สมัครสมาชิกฟรี! รับสิทธิประโยชน์และส่วนลดมากมาย
                </h1>

                <form className="space-y-6 ">
                    <div className="grid grid-cols-2">
                        <div>

                            <label className="">ชื่อ</label>
                            <label className="text-red-500"> *</label>
                            <input 
                            placeholder="ชื่อ"
                            className="border border-gray-200 flex flex-col " 
                            type="text" />
                        </div>

                        <div>

                            <label className="">นามสกุล</label>
                            <label className="text-red-500"> *</label>
                            <input 
                            placeholder="นามสกุล"
                            className="border border-gray-200 flex flex-col " 
                            type="text" />
                        </div>

                        <div>
                            <label className="">อีเมล</label>
                            <label className="text-red-500"> *</label>
                            <input 
                            placeholder="อีเมล"
                            className="border border-gray-200 flex flex-col " 
                            type="text" />
                        </div>

                        <div>
                            <label className="">รหัสผ่าน</label>
                            <label className="text-red-500"> *</label>
                            <input 
                            placeholder="รหัสผ่าน"
                            className="border border-gray-200 flex flex-col " 
                            type="password" />
                        </div>

                        <div>
                            <label className="">วันเกิด</label>
                            <label className="text-red-500"> *</label>
                            <input 
                            placeholder="รหัสผ่าน"
                            className="border border-gray-200 flex flex-col " 
                            type="date" />
                        </div>

                        <div>
                            <label className="">เบอร์โทรศัพท์</label>
                            <label className="text-red-500"> *</label>
                            <input 
                            
                            className="border border-gray-200 flex flex-col " 
                            type="tal" />
                        </div>

                        <div className="col-span-2 border-b border-gray-300 pb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                เพศ <span className="text-red-500">*</span>
                            </label>
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

                        <div className="col-span-2">
                            <input
                            type="checkbox" />
                            <span className="px-2">ฉันได้อ่านและยอมรับ 
                                <a className="text-blue-500 underline" href="#">ข้อกำหนดในการใช้งาน</a>และ<a className="text-blue-500 underline" href="#">นโยบายความเป็นส่วนตัว</a>ของสเวนเซ่นส์</span>
                        </div>

                        <div className="col-span-2">
                            <input
                            type="checkbox" />
                            <span className="px-2">ฉันยินยอมรับข้อมูลข่าวสาร กิจกรรมส่งเสริมการขายต่างๆ จากสเวนเซ่นส์และ
                                <a className="text-blue-500 underline" href="#">บริษัทในเคลือ</a> โดยเราจะเก็บข้อมูลของท่านไว้เป็นความลับ สามารถศึกษาเงื่อนไขหรือข้อตกลง<a className="text-blue-500 underline" href="#">นโยบายความเป็นส่วนตัว</a>เพิ่มเติมได้ที่เว็บไซต์ของบริษัทฯ</span>
                        </div>

                    </div>
                </form>
            </div>
        </div>
   </div>
   <Footer1 />
   </>
  )
}

export default page
