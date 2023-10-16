import React from "react";
import { CgMonday } from "react-icons/cg";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Navbar = (props: any) => {
  const { navigationData, currentRoute, setCurrentRoute } = props;
  return (
    <nav className="hidden md:flex flex-row items-center justify-between px-8 h-18 mt-3 rounded-b-3xl bg-white">
      <span className="text-5xl text-gray-800 ">
        {/* logo here */}
        <CgMonday />
      </span>
      <ul className="flex flex-row h-12 mt-5 gap-5">
        {navigationData.map((item: any, index: any) => (
          <li
            className={classNames([
              "text-gray-400 hover:text-gray-700 cursor-pointer font-medium tracking-wide text-m items-start justify-center",
              currentRoute === item &&
                "border-b-4 text-gray-700 border-gray-700 bg-gradient-to-b from-white to-gray-100",
            ])}
            key={index}
            onClick={() => setCurrentRoute(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className=" bg-white hover:bg-gray-50 border-2 border-gray-900 text-sm text-gray-900 py-3 px-5 rounded-lg font-medium tracking-wide leading-none">
        <Link to="/login">Logout</Link>
      </button>
    </nav>
  );
};

export default Navbar;
