import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { footerItem } from "../types/allVars.types";

function FooterItem({ item }: footerItem) {
  const [showExpand, setShowExpand] = useState<boolean>(false);

  const handleExpand: () => void = () => {
    setShowExpand(!showExpand);
  };

  return (
    <div
      className="text-slate-800 pr-10 w-full max-w-lg footer-screen:max-w-full py-3 
    flex flex-col border-hidden footer-screen:border-solid footer-screen:border-b border-b-gray-500"
    >
      <div onClick={handleExpand} className="flex items-center">
        <p className="font-bold text-xl flex-grow">{item.title}</p>
        {!showExpand ? (
          <ChevronDownIcon className="h-5 hidden footer-screen:block" />
        ) : (
          <ChevronUpIcon className="h-5 hidden footer-screen:block" />
        )}
      </div>
      <div
        className={`flex flex-col ${
          showExpand ? "footer-screen:flex" : "footer-screen:hidden"
        }`}
      >
        {item.links.map((item, i) => (
          <span key={i}>{item.link}</span>
        ))}
      </div>
    </div>
  );
}

export default FooterItem;
