import React from "react";
import styles from "./WrapRight.module.css";

const WrapRight = () => {
  return (
    <div className={styles.wrapRight}>
      <svg
        className={styles.svg}
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="200 -10 160 20">
        <defs>
          <pattern
            id="imagePatternRight"
            patternUnits="objectBoundingBox"
            width="100%"
            height="100%">
            <image
              href="/image/background/bgCenter.png"
              x="0"
              y="0"
              width="100%"
              height="100%"
            />
          </pattern>
        </defs>
        <path
          transform="scale(10)"
          d="M25 8.6Q23.5 10 22 11.7 21.5 12.5 21.5 13V17Q21.5 18 22.5 18H34Q35 18 35 17 35 14 35 7 35 6 34 6H26.5Q25.5 6 25.5 7 25.5 7 25.5 7 25.5 8 25 8.6"
          stroke="#ffff"
          strokeWidth="0.05"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default WrapRight;
