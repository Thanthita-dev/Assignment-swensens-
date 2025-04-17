const Footer1 = () => {
  return (
    <footer className="bg-[#101828] text-white py-6">
      <div className="container mx-auto px-6 flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
        {/* ซ้าย: โลโก้ + ลิงก์ */}
        <div className="flex flex-wrap items-center gap-6">
          <img
            src="https://www.swensens1112.com/images/desktop-header-logo.svg"
            alt="Swensens Logo"
            className="h-8"
          />
          <button className="hover:underline">เกี่ยวกับเรา</button>
          <button className="hover:underline">สินค้าของเรา</button>
          <button className="hover:underline">บัตรของขวัญ</button>
          <button className="hover:underline">คำถามที่พบบ่อย</button>
          <button className="hover:underline">ข้อกำหนดในการใช้งาน</button>
          <button className="hover:underline">นโยบายความเป็นส่วนตัว</button>
        </div>

        {/* ขวา: social icons */}
        <div className="flex items-center gap-3 mt-4 md:mt-0">
          <img src="https://www.swensens1112.com/images/facebook-icon.svg" alt="facebook" className="h-6 w-6" />
          <img src="https://www.swensens1112.com/images/instagram-icon.svg" alt="instagram" className="h-6 w-6" />
          <img src="https://www.swensens1112.com/images/line-icon.svg" alt="line" className="h-6 w-6" />
          <img src="https://www.swensens1112.com/images/tiktok-icon.svg" alt="tiktok" className="h-6 w-6" />
          <img src="https://www.swensens1112.com/_next/image?url=%2Fimages%2Fapp-store.png&w=128&q=75" alt="appstore" className="h-8" />
          <img src="https://www.swensens1112.com/_next/image?url=%2Fimages%2Fgoogle-play.png&w=128&q=75" alt="googleplay" className="h-8" />
        </div>
      </div>

      {/* ด้านล่าง: copyright */}
      <div className="text-center text-xs mt-4 text-gray-300">
        Copyright © Swensen1112.com. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer1;
