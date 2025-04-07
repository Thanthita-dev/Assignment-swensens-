"use client";
import { useState } from "react";

const products = [
    { id: 1, name: "มะม่วงอกร่องทอง 1.5 ปอนด์", price: 599, type: "cake"},
    { id: 2, name: "ไอศกรีมเค้ก โซ สตอว์เบอร์รี่ 1.5 ปอนด์", price: 499, type: "cake"},
    { id: 3, name: "ไอศกรีมเค้ก ทริปเปิ้ล ช็อกโก 1.5 ปอนด์", price: 499, type: "cake"},
    { id: 4, name: "ชาเขียวมัทฉะ ช็อกโก บราวนีส์ 1.5 ปอนด์", price: 499, type: "cake"},
    { id: 5, name: "ดับเบิ้ล ชาไทย 1.5 ปอนด์", price: 499, type: "cake" },
    { id: 6, name: "ไอศกรีมควอท", price: 369, type: "quart"},
    { id: 7, name: "ไอศกรีม มินิ ควอท", price: 239, type: "mini"},
    { id: 8, name: "มะม่วงอกร่องทอง ซันเด เซต", price: 179, type: "sundae"},
    { id: 9, name: "ไอศกรีมสกู๊ป", price: 69, type: "scoop"},
    { id: 10, name: "ไอศกรีมแซนวิชช็อกโกแลต 4 ชิ้น", price: 69, type: "smallbites"},
    { id: 11, name: "สาคูต้นทรงเครื่อง", price: 49, type: "topping" },
    { id: 12, name: "ซอสกะทิอบควันเทียน",price: 49, type: "topping"},
    { id: 13, name: "แฟนเวเฟอร์ โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 14, name: "อัลมอล โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 15, name: "ช็อกโกแลตชิพ โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 16, name: "เรนโบว์ โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 17, name: "มิกซ์นัท โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 18, name: "โอรีโอ โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 19, name: "ช็อกโกแลตฟัดจ์ โอเวอร์โหลด", price: 49, type: "topping" },
    { id: 20, name: "แยมสตรอว์เบอรี่ โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 21, name: "คาราเมล โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 22, name: "คุ้กกี้ ครัมเบิ้ล โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 23, name: "ลูกชิด โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 24, name: "ขนุน โอเวออร์โหลด", price: 49, type: "topping"},
    { id: 25, name: "แยมสับปะรด โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 26, name: "แยมบลูเบอร์รี่ โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 27, name: "คิดส์แฟน โอเวอร์โหลด", price: 49, type: "topping"},
    { id: 28, name: "บราวนี", price: 60, type: "topping"},
    { id: 29, name: "ลาวาเค้ก", price: 95, type: "topping"}, 

]


const categories = [
    { label: 1, name: "ไอศกรีมเค้ก", value: "cake"},
    { label: 2, name: "ไอศกรีมควอท (450g)", value: "quart"},
    { label: 3, name: "ไอศกรีมมินิ ควอท (250g)", value: "mini"},
    { label: 4, name: "ซันเด เซต", value: "sundae"},
    { label: 5, name: "ไอศกรีมสกู๊ป", value: "scoop"},
    { label: 6, name: "ไอศกรีมสมอลไบทส์", value: "smallbites"},
    { label: 7, name: "ท็อปปิ้ง", value: "topping"},

]



const ProductPage = () => {
    const [selectedType, setSelectedType] = useState("cake");

    const filteredProducts = products.filter((item) => item.type === selectedType);

    return (
    
    <div className="max-w-6xl mx-auto p-6">

        <div className="flex flex-wrap gap-3 mt-8">
        {categories.map((cat) => (
                <button
                key={cat.value}
                onClick={() => setSelectedType(cat.value)}
                className={`px-4 py-1 border rounded-xl text-sm font-semibold ${
                    selectedType === cat.value
                    ? "bg-[#d1001f] text-white border-[#d1001f]"
                    : "bg-white text-gray-500 border-gray-200"
                }`}
                >
                {cat.name}
                </button>
            ))}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
        {filteredProducts.map((item) => (
          <div key={item.id} className="p-4 border rounded-xl shadow-sm">
            <p className="text-[#d1001f] font-semibold">฿ {item.price}</p>
            <p className="text-gray-800 font-bold">{item.name}</p>
          </div>
        ))}
        </div>
    </div>
  );
};

export default ProductPage