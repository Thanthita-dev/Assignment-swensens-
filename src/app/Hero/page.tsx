"use client";

import Navbar from "../Navbar/page";
import ProductPage from "../ProductPage/page";
import Footer1 from "../footter/page";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";



const Hero = () => {
  return (
    <>
    <section className="flex flex-col min-h-screen bg-white">
        <div>
            {/* Navbar Section */}
            <Navbar />
            {/* Hero Section */}
            <section className="max-w-6xl mx-auto px-6 py-2 my-10 mt-25">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                    <div>
                    <h1 className="text-xl font-semibold flex items-center justify-center gap-3">
                        ไปส่งที่:  
                        <div className="relative w-[300px] sm:w-[800px] md:w-[800px] lg:w-[800px] xl:w-[1000px] ml-0 md:ml-3">

                            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                <FontAwesomeIcon icon={faLocationDot} className="text-gray-500" />
                            </div>

                            <input
                            type="text"
                            placeholder="เลือกที่อยู่สำหรับจัดส่ง"
                            className="bg-[#f2f4f7] h-12 w-full border border-gray-200 rounded-lg pl-11 pr-4 text-black placeholder-gray-500 focus:outline-none"
                            />
                        </div>
                        </h1>
                    </div>
                </div>

                <div className="mt-5">
                    <img
                    className="rounded-3xl" 
                    src="https://www.swensens1112.com/_next/image?url=https%3A%2F%2Ffirebasestorage.googleapis.com%2Fv0%2Fb%2Fswensens-production.appspot.com%2Fo%2Fbanner%252Fsw-banner.jpg%3Falt%3Dmedia&w=1920&q=75" alt="" />
                </div>

                <div className="flex justify-center items-center">
                    <FontAwesomeIcon
                    className="text-[#d1001f] hover:text-[#dd4057] text-xs mt-5" icon={faCircle} />
                </div>

                <div>
                    <h1 className="text-3xl font-semibold">โปรโมชั่น</h1>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">

                    <div className="group relative flex flex-col rounded-xl overflow-hidden border border-gray-300">
                        <img 
                        src="https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F500641322.jpg&w=384&q=75" />
                        <div className="flex items-center p-4">
                            <div className="">
                                <p className="text-[#d1001f] font-medium">฿ 699</p>
                                <p className="text-[#344054] font-bold text-xl">โปรโมชั่น มะม่วงอกร่องทอง 3 ปอนด์ ราคาพิเศษ 699.-</p>
                            </div>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-white shadow-md rounded-b-xl
                                        opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                                        transition-all duration-300 flex justify-center">

                            <div className="flex w-full rounded-full overflow-hidden shadow-md">
                                <select className="flex-1 border border-[#d1001f] text-[#d1001f] font-bold text-sm py-2 pl-4 outline-none">
                                {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                    </option>
                                ))}
                                </select>
                                <button className="flex-1 bg-[#d1001f] hover:bg-[#ba001a] text-white font-bold text-sm py-2 pr-4 text-nowrap">
                                    ใส่ตะกร้า ฿ 699
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="group relative flex flex-col rounded-xl overflow-hidden border border-gray-300">
                        <img 
                        src="https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F500641712.jpg&w=384&q=75" />
                        <div className="flex items-center p-4">
                            <div className="">
                                <p className="text-[#d1001f] font-medium">฿ 699</p>
                                <p className="text-[#344054] font-bold text-xl">โปรโมชั่น มะม่วงอกร่องทอง 3 ปอนด์ ราคาพิเศษ 699.-</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-white shadow-md rounded-b-xl
                                        opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                                        transition-all duration-300 flex justify-center">

                            <div className="flex rounded-full overflow-hidden shadow-md">
                                <select className="border border-[#d1001f] text-[#d1001f] font-bold text-sm px-4 py-2 rounded-l-full outline-none">
                                {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                    </option>
                                ))}
                                </select>
                                <button className="bg-[#d1001f] hover:bg-[#ba001a] text-white font-bold text-sm px-6 py-2 rounded-r-full">
                                    ใส่ตะกร้า ฿ 699
                                </button>
                            </div>
                        </div>
                    </div>


                    <div className="group relative flex flex-col rounded-xl overflow-hidden border border-gray-300">
                        <img 
                        src="https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F500641711.jpg&w=384&q=75" />
                        <div className="flex items-center p-4">
                            <div className="">
                                <p className="text-[#d1001f] font-medium">฿ 699</p>
                                <p className="text-[#344054] font-bold text-xl">โปรโมชั่น วันเดอร์ฟูลสตรอว์เบอรี่ 3 ปอนด์ ราคาพิเศษ 699.-</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-white shadow-md rounded-b-xl
                                        opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                                        transition-all duration-300 flex justify-center">

                            <div className="flex rounded-full overflow-hidden shadow-md">
                                <select className="border border-[#d1001f] text-[#d1001f] font-bold text-sm px-4 py-2 rounded-l-full outline-none">
                                {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                    </option>
                                ))}
                                </select>
                                <button className="bg-[#d1001f] hover:bg-[#ba001a] text-white font-bold text-sm px-6 py-2 rounded-r-full">
                                    ใส่ตะกร้า ฿ 699
                                </button>
                            </div>
                        </div>
                        
                    </div>

                    <div className="group relative flex flex-col rounded-xl overflow-hidden border border-gray-300">
                        <img 
                        src="https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F500641324.jpg&w=384&q=75" />
                        <div className="flex items-center p-4">
                            <div className="">
                                <p className="text-[#d1001f] font-medium">฿ 699</p>
                                <p className="text-[#344054] font-bold text-xl">โปรโมชั่น ทริปเปิ้ล เฟล์เวอร์ 3 ปอนด์ ราคาพิเศษ 699.-</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-white shadow-md rounded-b-xl
                                        opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                                        transition-all duration-300 flex justify-center">

                            <div className="flex rounded-full overflow-hidden shadow-md">
                                <select className="border border-[#d1001f] text-[#d1001f] font-bold text-sm px-4 py-2 rounded-l-full outline-none">
                                {[...Array(10)].map((_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                    {i + 1}
                                    </option>
                                ))}
                                </select>
                                <button className="bg-[#d1001f] hover:bg-[#ba001a] text-white font-bold text-sm px-6 py-2 rounded-r-full">
                                    ใส่ตะกร้า ฿ 699
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="group relative flex flex-col rounded-xl overflow-hidden border border-gray-300">
                        <img 
                        src="https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F636153.jpg&w=384&q=75" />
                        <div className="flex items-center p-4">
                            <div className="">
                                <p className="text-[#d1001f] font-medium">฿ 449</p>
                                <p className="text-[#344054] font-bold text-xl">Loe oream 2 Quarts (any flavors) only 449.-</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-white shadow-md rounded-b-xl
                                        opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                                        transition-all duration-300 flex justify-center">
                            <div className="bg-[#d1001f] text-white font-bold text-sm px-6 py-2 rounded-full">
                                ดูลายละเอียด
                            </div>                        
                            
                        </div>
                    </div>

                    <div className="group relative flex flex-col rounded-xl overflow-hidden border border-gray-300">
                        <img 
                        src="https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F636083_5.jpg&w=384&q=75" />
                        <div className="flex items-center p-4">
                            <div className="">
                                <p className="text-[#d1001f] font-medium">฿ 379</p>
                                <p className="text-[#344054] font-bold text-xl">ไอศกรีม 2 มินิ ควอท 379 บาท</p>
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-white shadow-md rounded-b-xl
                                        opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
                                        transition-all duration-300 flex justify-center">
                            <div className="bg-[#d1001f] text-white font-bold text-sm px-6 py-2 rounded-full">
                                ดูลายละเอียด
                            </div>                   
                            
                        </div>
                    </div>
                </div>
                {/* ProductPage Section */}
                <ProductPage />
                
            </section>
        </div>
        
    </section>
    <Footer1 />
    </>
  )
}

export default Hero