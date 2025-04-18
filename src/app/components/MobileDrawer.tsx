// components/MobileDrawer.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faUser,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

export default function MobileDrawer({
  show,
  onClose,
  isLoggedIn,
  onLogout,
  userName,
}: {
  show: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
  onLogout: () => void;
  userName?: string;
}) {
  return (
    <>
      {/* Overlay */}
      {show && (
        <div className="fixed inset-0 z-30 md:hidden" onClick={onClose} />
      )}

      {/* Side Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-4/5 max-w-xs bg-white shadow-lg z-40 transition-transform duration-300 md:hidden ${
          show ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="p-5 flex justify-between items-start">
          {isLoggedIn ? (
            <div>
              <p className="font-bold text-gray-800 text-2xl leading-snug">
                สวัสดี {userName} <span className="ml-1">🍦</span>
              </p>
              <div className="flex items-center mt-1  text-sm font-semibold gap-2">
                <span className="text-lg">
                    <img src="https://www.swensens1112.com/icons/member-point.svg" alt="" /></span>
                <span className="text-xl text-gray-800">0 แต้ม</span>
              </div>
            </div>
          ) : (
            <p className="font-bold text-gray-700 leading-tight text-2xl">
              Login to begin your
              <br />
              ice cream journey
            </p>
          )}
          <button onClick={onClose} className="text-gray-500 hover:text-black">
            <svg width="24" height="24" fill="currentColor">
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-4 px-6 py-6 text-gray-800">
          <Link href="#" onClick={onClose}>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBox} />
              <span>คำสั่งซื้อและสั่งอีกครั้ง</span>
            </div>
          </Link>

          <Link href="#" onClick={onClose}>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUser} />
              <span>โปรไฟล์</span>
            </div>
          </Link>

          <Link href="#" onClick={onClose}>
            เปลี่ยนรหัสผ่าน
          </Link>
          <Link href="#" onClick={onClose}>
            บัตรเครดิตของฉัน
          </Link>
          <Link href="#" onClick={onClose}>
            สมุดที่อยู่
          </Link>

          {/* Language Switch */}
          <div className="mt-2">
            ภาษา - <span className="uppercase font-bold">TH</span>
          </div>

          {/* Auth Button */}
          {isLoggedIn ? (
            <button
              className="text-red-600 flex items-center gap-2 mt-3"
              onClick={() => {
                onLogout();
                onClose();
              }}
            >
              <FontAwesomeIcon icon={faRightFromBracket} />
              ออกจากระบบ
            </button>
          ) : (
            <Link href="/Login" onClick={onClose}>
              <button className="w-full mt-4 bg-red-600 text-white py-2 rounded-full font-semibold">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                เข้าสู่ระบบ / ลงทะเบียน
              </button>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}
