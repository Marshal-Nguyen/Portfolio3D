import React from "react";
import styles from "./Loader.module.css";
const Loader = () => {
  return (
    /* From Uiverse.io by kandalgaonkarshubham */
    <div class={styles.container}>
      <div className={styles.socket}>
        <div className={`${styles.gel} ${styles.centerGel}`}>
          <div className={styles.circle}></div>
        </div>
        {[...Array(37)].map((_, i) => (
          <div
            key={i}
            className={`${styles.gel} ${styles[`c${i + 1}`]} ${
              styles[`r${Math.ceil((i + 1) / 6)}`]
            }`}>
            <div className={styles.circle}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Loader;
