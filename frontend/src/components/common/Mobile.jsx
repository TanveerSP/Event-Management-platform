import React, { useState } from "react";
import NavLinkItem from "./NavLinkItem";
import navLinksData from "../../data/navLinks";

const Mobile = () => {
  let [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex flex-col gap-y-2 " onClick={toggleMenu}>
        <div
          className={`h-0.5 w-7 transform transition-transform bg-purple-800 ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-7 transform transition-transform bg-purple-800 ${
            isOpen ? "-rotate-45 -translate-y-1 " : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-7 transform transition-transform bg-purple-800 ${
            isOpen ? "hidden " : ""
          }`}
        ></div>
      </div>
      {/*  */}
      <div
        className={`absolute top-16 right-0 z-0 ${
          isOpen ? "md:w-[40vw] w-[80vw]" : "w-0 overflow-hidden"
        } h-[100vh] bg-white/0 bg-opacity-20 backdrop-blur-md transition-all duration-500 ease-in-out flex flex-col shadow-2xl`}
      >
        <div className="p-6 ">
          <nav>
            <ul className="flex flex-col items-start space-y-10 justify-center">
              {navLinksData.map((ele, ind) => (
                <NavLinkItem key={ind} name={ele.name} path={ele.path} />
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Mobile;
