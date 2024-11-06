import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navigation from "../../components/menu/Navigation";
import styles from "./Layout.module.css";
import Spline from "@splinetool/react-spline";
import ShibaModel from "../../components/threeJS/ShibaModel";
import { Canvas } from "@react-three/fiber";
import Social from "../../components/social/Social";
import Knowledge from "../../components/know/Knowledge";
import Rotate from "../../components/rotate3D/Rotate";
import Loader from "../../components/loader/Loader";

const Layout = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // thời gian chạy animation (mặc định: 400)
      once: false, // chỉ chạy animation một lần (mặc định: false)
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Phần này giới thiệu chung */}
      <div className="bg-[#000000] h-screen flex text-white justify-center items-end">
        <div
          className={styles.tech}
          // style={{
          //   backgroundImage: `url(${process.env.PUBLIC_URL}/image/avatar/room.jpeg)`,
          //   backgroundSize: "cover", // optional, adjust as needed
          //   backgroundPosition: "center", // optional, adjust as needed
          // }}
        >
          {/* Show một vài thông tin như các ngôn ngữ đã sử dụng và social đang sử dụng */}
          <div className="Header flex justify-between">
            <div className=" w-[420px] mb-10 h-[87px] bg-[#000000] rounded-ee-2xl flex items-center justify-start">
              <div className="w-[420px] h-[80px] bg-[#ffffff59] mr-2 mb-2 rounded-ee-[10px] rounded-ss-[10px] flex justify-center ">
                <Knowledge />
              </div>
            </div>
            <div className="w-screen mt-5 text-lg">
              <marquee behavior="" direction="">
                WELCOME TO MY PORTFOLIO
              </marquee>
            </div>
            <div className=" w-[420px] mb-10 h-[87px] bg-[#000000] rounded-es-2xl flex items-center justify-start">
              <div className="w-[420px] h-[80px] bg-[#ffffff59] mr-2 mb-2 rounded-se-[10px] rounded-es-[10px] flex justify-center  ">
                <Social />
              </div>
            </div>
          </div>
          {/* Center rotate 3D show me*/}
          <div
            className={styles.wrapper}
            // style={{ display: "flex", gap: "1000px" }}
          >
            <div className={styles.modelContainer}>
              <ShibaModel />
            </div>
            <div className="w-[100px]">{/* <Rotate /> */}</div>
          </div>
        </div>
        <div className=" w-[420px] mb-10 h-[87px] bg-[#222327] rounded-3xl flex items-center justify-center fixed z-50">
          <div className={styles.borderGradient}>
            <Navigation />
          </div>
        </div>
      </div>
      {/* Phần này cho tech */}
      <div className="bg-[#000000] h-screen flex flex-col text-white justify-center items-center ">
        <div className={styles.tech}>
          {/* <ShibaModel /> */}
          <div data-aos="zoom-in" className="bg-red-500 w-[50%] h-[30%] z-10">
            hello
          </div>
          <div
            data-aos="zoom-in-up"
            className="bg-red-500 w-[50%] h-[30%] z-10">
            hello
          </div>
        </div>
      </div>
      {/* Phần này cho load */}
      <div className="bg-[#000000] h-screen flex flex-col text-white justify-center items-center">
        <div className={styles.tech}>
          <Loader />
        </div>
      </div>
      {/* Phần này cho tech */}
      <div className="bg-[#000000] h-screen flex flex-col text-white justify-center items-center">
        <div className={styles.tech}>b</div>
      </div>
      {/* Phần này cho tech */}
      <div className="bg-[#000000] h-screen flex flex-col text-white justify-center items-center">
        <div className={styles.tech}>c</div>
      </div>
    </>
  );
};

export default Layout;
