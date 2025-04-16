"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons/faGlobe";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="h-20 flex justify-center items-center shadow-md bg-white z-10 relative">
        <div className="container mx-auto w-full px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://www.swensens1112.com/images/desktop-header-logo.svg"
                alt="Swensens Logo"
              />
            </div>

            <div className="flex items-center gap-4">
              <div>
                <FontAwesomeIcon
                  className="text-black text-3xl"
                  icon={faBagShopping}
                />
              </div>

              <div>
                <a href="">
                    <button className="text-xl text-white bg-[#d1001f] hover:bg-[#da334c] p-2 rounded-full font-medium">
                    เข้าสู่ระบบ / ลงทะเบียน
                    </button>
                </a>
              </div>

              <div className="text-gray-700 text-xl flex items-center gap-2">
                <FontAwesomeIcon className="text-sm" icon={faGlobe} />
                <select className="p-2 border rounded">
                  <option value="">TH</option>
                  <option value="">EN</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </>
  );
};

export default Navbar;