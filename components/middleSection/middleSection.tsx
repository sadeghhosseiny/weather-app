import Image from "next/image";
import React from "react";

function MiddleSection() {
  return (
    <div className="bg-orange-500 w-full -mt-2">
      <div className="p-10 grid grid-cols-12 md:grid-cols-10 max-w-4xl mx-auto items-baseline justify-items-center space-y-10">
        <div className="p-5 rounded-full border-2 border-white col-span-4 md:col-span-2 flex items-center justify-center w-24 h-24">
          <Image
            src={
              "https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-1.png"
            }
            width={30}
            height={40}
            objectFit="contain"
          />
        </div>
        <div className="p-5 rounded-full border-2 border-white col-span-4 md:col-span-2 flex items-center justify-center w-24 h-24">
          <Image
            src={
              "https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-2.png"
            }
            width={30}
            height={40}
            objectFit="contain"
          />
        </div>
        <div className="p-5 rounded-full border-2 border-white col-span-4 md:col-span-2 flex items-center justify-center w-24 h-24">
          <Image
            src={
              "https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-3.png"
            }
            width={30}
            height={40}
            objectFit="contain"
          />
        </div>
        <div className="p-5 rounded-full border-2 border-white ml-auto md:ml-0 col-span-5 md:col-span-2 flex items-center justify-center w-24 h-24">
          <Image
            src={
              "https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-4.png"
            }
            width={30}
            height={40}
            objectFit="contain"
          />
        </div>
        <div className="p-5 rounded-full border-2 border-white col-span-6 md:col-span-2 flex items-center justify-center w-24 h-24">
          <Image
            src={
              "https://openweathermap.org/themes/openweathermap/assets/img/landing/icon-5.png"
            }
            width={30}
            height={40}
            objectFit="contain"
          />
        </div>
      </div>
    </div>
  );
}

export default MiddleSection;
