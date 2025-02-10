import React, { useState } from "react";

const Mobile = () => {
  let [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="flex flex-col gap-y-2 " onClick={toggleMenu}>
        <div
          className={`h-0.5 w-7 transform transition-transform bg-black ${
            isOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-7 transform transition-transform bg-black ${
            isOpen ? "-rotate-45 -translate-y-1 " : ""
          }`}
        ></div>
        <div
          className={`h-0.5 w-7 transform transition-transform bg-black ${
            isOpen ? "hidden " : ""
          }`}
        ></div>
      </div>
      {/*  */}
      <div
        className={`absolute top-16 right-0 z-0 ${
          isOpen ? "md:w-[40vw] w-[80vw]" : "w-0 overflow-hidden"
        } h-[100vh] bg-white/0 bg-opacity-20 backdrop-blur-md transition-all duration-500 ease-in-out flex flex-col border-l-[1px]`}
      >
        <div className="p-6 bg-red-100 shadow-inner shadow-gray-300  ">
          <ul className="flex flex-col items-start space-y-6 justify-center">
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default Mobile;
