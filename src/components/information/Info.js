import React from "react";
import styles from "./Info.module.css";
const Info = () => {
  return (
    <div
      className={`${styles.containerInfo}`}
      style={{ fontFamily: "Orbitron" }}>
      <div className={`${styles.frameName}`}>
        <h1 className=" text-black ">Nguyen Van</h1>
        <h1 className=" text-black ml-3">Truong Giang</h1>
      </div>
      <div
        className="absolute text-[10.4px] px-5 py-6 font-serif text-black"
        style={{ textAlign: "justify" }}>
        <p className="w-[100%]">
          Front-end developer with 2 years of experience, I am dedicated to
          creating exceptional website designs that prioritize user-centered
          approaches to software development. My commitment is to build optimal
          user interfaces, from requirements analysis to implementation and
          optimization, to deliver products that are easy to use and enjoyable.
        </p>
      </div>
    </div>
  );
};

export default Info;
