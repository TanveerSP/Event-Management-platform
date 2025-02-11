import React from "react";
import { Link } from "react-router-dom";
import Mobile from "./Mobile";
import navLinksData from "../../data/navLinks";
import NavLinkItem from "./NavLinkItem";

const Navbar = () => {
  return (
    <div
      className={`relative md:fixed sm:fixed lg:static flex w-full shadow-xl h-16 z-50 items-center justify-center transition-all duration-500`}
    >
      <div className="flex w-[95vw] mx-auto py-2  items-center justify-between">
        <Link to={"/"}>
          <p className="text-xl font-bold py-2 px-3 text-center text-purple-900">
            EventHub
          </p>
        </Link>

        <div className="hidden lg:inline-block">
          <nav className=" p-4 flex justify-between items-center">
            <ul className="flex gap-x-4 ">
              {navLinksData.map((link, ind) => (
                <NavLinkItem key={ind} name={link.name} path={link.path} />
              ))}
            </ul>
          </nav>
        </div>

        <nav className="inline-block lg:hidden">
          <Mobile />
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
