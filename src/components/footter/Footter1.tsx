import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;



const footter = () => {
  return (
    <>
    <footer className="bg-[#101828] h-25 flex justify-center items-center text-white">
      <div className="flex container mx-auto w-full px-4 gap-3">
        <div className="px-7">
            <img className="" 
            src="https://www.swensens1112.com/images/desktop-header-logo.svg" alt="" />
        </div>

        <div>
          <button>เกี่ยวกับเรา</button>
        </div>

        <div>
          <button>สินค้าของเรา</button>
        </div>

        <div>
          <button>บัตรของขวัญ</button>
        </div>

        <div>
          <button>คำถามที่พบบ่อย</button>
        </div>

        <div>
          <button>ข้อกำหนดในการใช้งาน</button>
        </div>

        <div>
          <button>นโยบายความเป็นส่วนตัว</button>
        </div>

        
      </div>
    </footer>
    </>
  )
}

export default footter
