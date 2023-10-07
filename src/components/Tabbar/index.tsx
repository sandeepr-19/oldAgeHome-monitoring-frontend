import React, { useCallback } from "react";
import classNames from "classnames";
import { AiFillHome, AiFillCompass } from "react-icons/ai";
import { BsFillBagFill, BsFillPersonFill } from "react-icons/bs";
import { CgInbox } from "react-icons/cg";

const Tabbar = (props: any) => {
  const { navigationData, currentRoute, setCurrentRoute } = props;
  const getTabIcon = useCallback((item: any) => {
    switch (item) {
      case "Home":
        return <AiFillHome />;
      case "Discover":
        return <AiFillCompass />;
      case "Store":
        return <BsFillBagFill />;
      case "Inbox":
        return <CgInbox />;
      case "Profile":
        return <BsFillPersonFill />;
    }
  }, []);

  return (
    <nav className="flex md:hidden flex-row items-center justify-around px-10 h-18 bg-white visible md:invisible fixed bottom-0 w-full rounded-t-3xl text-2xl pb-8">
      {navigationData.map((item: any, index: any) => (
        <span
          key={index}
          className={classNames([
            "w-16 text-gray-400 hover:text-gray-700 cursor-pointer h-full flex items-center justify-center pt-5",
            currentRoute === item &&
              " border-t-4 bg-gradient-to-t from-white to-gray-100  border-gray-700 text-gray-700 ",
          ])}
          onClick={() => setCurrentRoute(item)}
        >
          <span>{getTabIcon(item)}</span>
        </span>
      ))}
    </nav>
  );
};

export default Tabbar;
