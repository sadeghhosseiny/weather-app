import Image from "next/image";
import React from "react";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <nav className="bg-gray-600 flex">
      <div className="mx-5">
        <Image
          src={
            "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
          }
          width={80}
          height={70}
          objectFit="contain"
        />
      </div>
      <div className="p-3 rounded-full border-2 border-white flex items-center my-3">
        <SearchIcon className="h-5 mr-3 text-orange-400" />
        <input
          type="text"
          placeholder="Weather in your city"
          className="bg-transparent outline-none text-gray-100"
        />
      </div>
    </nav>
  );
}

export default Header;
