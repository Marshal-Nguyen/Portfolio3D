import React from "react";
import Navigation from "../../components/Navigation";
import style from "./Layout.module.css";
const Layout = () => {
  return (
    <div className="bg-black h-screen flex text-white justify-center items-end">
      <div className=" w-full h-[94%] blur-sm border-l-purple-300 bg-gray-300 m-5 relative">
        1
      </div>
      <div className=" w-[450px] mb-10 h-[94px] bg-[#222327] rounded-full flex items-center justify-center fixed">
        <Navigation />
      </div>
    </div>
  );
};

export default Layout;
