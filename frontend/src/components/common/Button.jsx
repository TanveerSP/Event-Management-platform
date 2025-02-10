import React from "react";

const Button = () => {
  return (
    <div className="mt-52 w-full flex items-center justify-center">
      <div className="flex items-center gap-[1vw]">
        <h4 className="relative py-2 px-3  border border-purple-500 font-medium text-[18px] text-purple-800 group overflow-hidden rounded-full hover:text-white transition-all ease-linear">
          <a href="#" className="relative z-10">
            Button Text
          </a>
          <span className="absolute inset-0 rounded-full bg-purple-800 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-linear"></span>
        </h4>
      </div>
    </div>
  );
};

export default Button;
