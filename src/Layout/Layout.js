// Layout chính thống
import React from "react";
import styles from "./Layout.module.css";
import Info from "../components/information/Info";
import CircleTechnical from "../components/circleTechnical/CircleTechnical";
import Time from "../components/time/Time";
import WrapCenter from "../components/wrapCenter3D/WrapCenter";
import WrapRight from "../components/wrapCenter3D/WrapRight";
const Layout = () => {
  return (
    <div className={styles.container}>
      <div className="grid grid-cols-5 grid-rows-5 gap-1 h-screen p-5">
        <div className="row-span-2 flex justify-center items-center h-[100%] w-[100%]">
          <Info />
        </div>
        <div className="row-span-2 col-start-1 row-start-3 h-[100%] w-[100%]">
          <CircleTechnical />
        </div>
        <d3v className="col-start-1 row-start-5 h-[100%] w-[100%] flex justify-center items-center">
          <Time />
        </d3v>
        <div className=" col-span-4 row-span-5 col-start-2 row-start-1 h-[100%] w-[100%] flex justify-center items-center">
          <WrapCenter />
        </div>
        {/* <div className="relative row-span-5 col-start-5 row-start-1 border h-[100%] w-[100%]">
          <WrapRight />
        </div> */}
      </div>
    </div>
  );
};

export default Layout;
