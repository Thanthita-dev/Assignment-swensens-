// components/Navbar/Navbar.tsx
"use client";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import MobileDrawer from "../components/MobileDrawer";

config.autoAddCss = false;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faGlobe,
  faBox,
  faUser,
  faRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { jwtDecode } from "jwt-decode";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [userName, setUserName] = useState("");
  const [showMenu, setShowMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        interface JwtPayload {
          name: string;
        }

        const decoded = jwtDecode<JwtPayload>(token);
        setUserName(decoded.name);
      } catch (err) {
        console.error("❌ Token Decode Error", err);
      }
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setShowMenu(false);
        setShowMobileMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/Login";
  };

  return (
    <nav className="h-20 flex items-center shadow-md bg-white z-50 fixed top-0 left-0 right-0">
      <div className="max-w-6xl mx-auto w-full px-6 relative">
        <div className="flex justify-between items-center relative">
          {/* Left: Burger (mobile only) */}
          <div className="block md:hidden">
            <button onClick={() => setShowMobileMenu(!showMobileMenu)}>
              <FontAwesomeIcon icon={faBars} className="text-xl" />
            </button>
          </div>

          {/* Logo */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 md:static md:transform-none md:ml-0"
            style={{ marginLeft: "0" }}
          >
            <Link href="/Hero">
              <img
                src="https://www.swensens1112.com/images/desktop-header-logo.svg"
                alt="Swensens Logo"
                className="h-8 md:h-10 md:ml-50"
              />
            </Link>
          </div>

          {/* Right: Cart and Desktop menu */}
          <div className="flex items-center gap-2 md:gap-4 text-sm md:text-base">
            {/* แต้ม */}
            {userName && (
              <div className="hidden md:flex items-center gap-1 text-sm font-semibold text-gray-800">
                <img
                  src="https://www.swensens1112.com/icons/member-point.svg"
                  alt="แต้ม"
                  className="w-8 h-6"
                />
                <span className="text-lg">0 แต้ม</span>
              </div>
            )}

            {/* ตะกร้า */}
            <img
              src="https://www.swensens1112.com/images/mobile-cart.svg"
              alt="Cart"
              className="w-10 h-8"
            />

            {/* Mobile Drawer */}
            <MobileDrawer
              show={showMobileMenu}
              onClose={() => setShowMobileMenu(false)}
              isLoggedIn={!!userName}
              onLogout={handleLogout}
              userName={userName}
            />

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-4">
              {userName ? (
                <div className="relative" ref={menuRef}>
                  <button
                    onClick={() => setShowMenu(!showMenu)}
                    className="text-red-600 border border-red-600 px-3 py-1 rounded-full font-medium"
                  >
                    สวัสดี {userName}
                  </button>

                  {showMenu && (
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50 text-sm text-gray-700">
                      <Link href="/orders">
                        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <FontAwesomeIcon icon={faBox} className="mr-2" />
                          คำสั่งซื้อและสั่งอีกครั้ง
                        </div>
                      </Link>
                      <Link href="/profile">
                        <div className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer">
                          <FontAwesomeIcon icon={faUser} className="mr-2" />
                          โปรไฟล์
                        </div>
                      </Link>
                      <hr className="my-1" />
                      <div
                        className="flex items-center px-4 py-2 text-red-600 hover:bg-red-50 cursor-pointer"
                        onClick={handleLogout}
                      >
                        <FontAwesomeIcon
                          icon={faRightFromBracket}
                          className="mr-2"
                        />
                        ออกจากระบบ
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/register">
                  <button className="text-white bg-[#d1001f] hover:bg-[#da334c] px-3 py-1 rounded-full font-medium">
                    เข้าสู่ระบบ / ลงทะเบียน
                  </button>
                </Link>
              )}

              {/* Language */}
              <div className="text-gray-700 flex items-center gap-1">
                <FontAwesomeIcon className="text-sm" icon={faGlobe} />
                <select className="p-1 bg-transparent border-none focus:outline-none text-gray-800">
                  <option value="TH">TH</option>
                  <option value="EN">EN</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
