import Image from "next/image";
import React from "react";
import { MenuIcon, SearchIcon } from "@heroicons/react/outline";
import { input } from "../types/allVars.types";
import { useRouter } from "next/router";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";

function Header({ setInput, input }: input) {
  const router = useRouter();

  const handleGetWeatherForCity: (
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ) => void = (e) => {
    e.preventDefault;
    router.push(`?city=${input.trim()}`);
  };

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
          <SearchIcon
            onClick={handleGetWeatherForCity}
            className="h-5 mr-3 text-orange-400 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Weather in your city"
            className="bg-transparent outline-none text-gray-100"
            onChange={(e) => setInput(e.target.value)}
          />
        </div>
      </div>
      <div className="flex items-center mr-7 header-screen:hidden">
        <span className="text-gray-100 ml-4 cursor-pointer">Guide</span>
        <span className="text-gray-100 ml-4 cursor-pointer">Pricing</span>
        <span className="text-gray-100 ml-4 cursor-pointer">
          Our Initiatives
        </span>
        <span className="text-gray-100 ml-4 cursor-pointer">Blog</span>
      </div>
      <Menu
        as="div"
        className="relative hidden text-left pt-6 pr-4 header-screen:inline-block"
      >
        <div>
          <Menu.Button>
            <MenuIcon className="h-8 text-white" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute top-12 right-5 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-2 space-y-1">
              <Menu.Item>
                <a
                  className="block pl-3 py-2 hover:bg-gray-100 hover:text-gray-900"
                  href="#"
                >
                  Guide
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  className="block pl-3 py-2 hover:bg-gray-100 hover:text-gray-900"
                  href="#"
                >
                  Pricing
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  className="block pl-3 py-2 hover:bg-gray-100 hover:text-gray-900"
                  href="#"
                >
                  Our Initiatives
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  className="block pl-3 py-2 hover:bg-gray-100 hover:text-gray-900"
                  href="#"
                >
                  Blog
                </a>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </nav>
  );
}

export default Header;
