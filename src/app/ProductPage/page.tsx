"use client";
import { useState } from "react";

const products = [
    { id: 1, 
      name: "มะม่วงอกร่องทอง 1.5 ปอนด์", 
      price: 599, 
      type: "cake", 
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F641268.jpg&w=384&q=75",
    },
    { id: 2,
      name: "ไอศกรีมเค้ก โซ สตอว์เบอร์รี่ 1.5 ปอนด์", 
      price: 499, 
      type: "cake",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F641610.jpg&w=384&q=75"
    },
    { id: 3, 
      name: "ไอศกรีมเค้ก ทริปเปิ้ล ช็อกโก 1.5 ปอนด์", 
      price: 499, 
      type: "cake",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F641609.jpg&w=384&q=75"
    },
    { id: 4, 
      name: "ชาเขียวมัทฉะ ช็อกโก บราวนีส์ 1.5 ปอนด์", 
      price: 499, 
      type: "cake",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F641612.jpg&w=384&q=75"
    },
    { id: 5, 
      name: "ดับเบิ้ล ชาไทย 1.5 ปอนด์", 
      price: 499, 
      type: "cake",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F641611.jpg&w=384&q=75"
     },
    { id: 6, 
      name: "ไอศกรีมควอท", 
      price: 369, 
      type: "quart",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F636224_2.jpg&w=384&q=75"
    },
    { id: 7, 
      name: "ไอศกรีม มินิ ควอท", 
      price: 239, 
      type: "mini",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F636224_1.jpg&w=384&q=75"
    },
    { id: 8, 
      name: "มะม่วงอกร่องทอง ซันเด เซต", 
      price: 179, 
      type: "sundae",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F702922_3.jpg&w=384&q=75"
    },
    { id: 9, 
      name: "ไอศกรีมสกู๊ป", 
      price: 69, 
      type: "scoop",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F701221_1.jpg&w=384&q=75"
    },
    { id: 10, 
      name: "ไอศกรีมแซนวิชช็อกโกแลต 4 ชิ้น", 
      price: 69, 
      type: "smallbites",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F701221_1.jpg&w=384&q=75"
    },
    { id: 11, 
      name: "สาคูต้นทรงเครื่อง", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F15514.jpg&w=384&q=75"
     },
    { id: 12, 
      name: "ซอสกะทิอบควันเทียน",
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F795384.jpg&w=384&q=75"
    },
    { id: 13, 
      name: "แฟนเวเฟอร์ โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652065.jpg&w=384&q=75"
    },
    { id: 14, 
      name: "อัลมอล โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2Fmenu%2Fswensens%2F652050.jpg&w=384&q=75"
    },
    { id: 15, 
      name: "ช็อกโกแลตชิพ โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2Fmenu%2Fswensens%2F652049.jpg&w=384&q=75"
    },
    { id: 16, 
      name: "เรนโบว์ โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652051.jpg&w=384&q=75"
    },
    { id: 17, 
      name: "มิกซ์นัท โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652053.jpg&w=384&q=75"
    },
    { id: 18, 
      name: "โอรีโอ โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652054.jpg&w=384&q=75"
    },
    { id: 19, 
      name: "ช็อกโกแลตฟัดจ์ โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652055.jpg&w=384&q=75"
     },
    { id: 20,
      name: "แยมสตรอว์เบอรี่ โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652056.jpg&w=384&q=75"
    },
    { id: 21, 
      name: "คาราเมล โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652057.jpg&w=384&q=75"
    },
    { id: 22, 
      name: "คุ้กกี้ ครัมเบิ้ล โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652058.jpg&w=384&q=75"
    },
    { id: 23, 
      name: "ลูกชิด โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652059.jpg&w=384&q=75"
    },
    { id: 24, 
      name: "ขนุน โอเวออร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652060.jpg&w=384&q=75"
    },
    { id: 25, 
      name: "แยมสับปะรด โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652061.jpg&w=384&q=75"
    },
    { id: 26, 
      name: "แยมบลูเบอร์รี่ โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652062.jpg&w=384&q=75"
    },
    { id: 27, 
      name: "คิดส์แฟน โอเวอร์โหลด", 
      price: 49, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652066.jpg&w=384&q=75"
    },
    { id: 28, 
      name: "บราวนี", 
      price: 60, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652068.jpg&w=384&q=75"
    },
    { id: 29, 
      name: "ลาวาเค้ก", 
      price: 95, 
      type: "topping",
      image: "https://www.swensens1112.com/_next/image?url=https%3A%2F%2Fcdn.1112delivery.com%2F1112one%2Fpublic%2Fimages%2Fproducts%2FSW%2F652067.jpg&w=384&q=75"
    }, 

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
    <div className="w-full px-4 sm:px-6 md:px-8 xl:px-0 3xl:px-16  ">
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

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4  gap-8 mt-6">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="group relative flex flex-col rounded-xl overflow-hidden border border-gray-300 bg-white shadow-sm hover:shadow-md transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full object-cover aspect-[4/3]"
            />

            <div className="flex flex-col px-4 pt-4 pb-6 min-h-[140px]">
              <div>
                <p className="text-[#d1001f] font-medium text-base">฿ {item.price}</p>
                <p className="text-[#344054] font-bold text-base leading-tight">
                  {item.name}
                </p>
              </div>
            </div>

            <div
              className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-white rounded-b-xl shadow-md
              opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0
              transition-all duration-300 flex justify-center"
            >
              <div className="flex rounded-full overflow-hidden shadow-md">
                <select className="border border-[#d1001f] text-[#d1001f] font-bold text-sm px-4 py-2 rounded-l-full outline-none">
                  {[...Array(10)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                      {i + 1}
                    </option>
                  ))}
                </select>
                <button className="bg-[#d1001f] hover:bg-[#ba001a] text-white font-bold text-sm px-6 py-2 rounded-r-full">
                  ใส่ตะกร้า ฿ {item.price}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage