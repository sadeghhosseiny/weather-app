import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <nav className="bg-gray-600 flex justify-between w-full h-20 sticky top-0 z-50">
      <div className="flex flex-1 max-w-lg">
        <div className="mx-5 cursor-pointer">
          <Image
            src={
              "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
            }
            width={80}
            height={70}
            objectFit="contain"
            layout="fixed"
          />
        </div>
        <div className="p-3 flex-1 rounded-full border-2 border-white flex items-center mt-3 mb-4">
          <SearchIcon className="h-5 mr-3 text-orange-400 cursor-pointer" />
          <input
            type="text"
            placeholder="Weather in your city"
            className="bg-transparent outline-none text-gray-100"
          />
        </div>
      </div>
      <div className="flex items-center mr-7">
        <span className="text-gray-100 ml-4 cursor-pointer">Guide</span>
        <span className="text-gray-100 ml-4 cursor-pointer">Pricing</span>
        <span className="text-gray-100 ml-4 cursor-pointer">
          Our Initiatives
        </span>
        <span className="text-gray-100 ml-4 cursor-pointer">Blog</span>
      </div>
    </nav>
  );
}

export default Header;
