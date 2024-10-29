import React, { useState } from "react";
import styles from "../components/Navigation.module.css";
import { FaHome } from "react-icons/fa";

const Navigation = () => {
  // State để theo dõi chỉ mục của phần tử `li` đang active
  const [activeIndex, setActiveIndex] = useState(0);

  // Hàm xử lý thay đổi `activeIndex`
  const handleActiveLink = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.navigation}>
      <ul>
        {["Home", "Profile", "Message", "Photos", "Settings"].map(
          (item, index) => (
            <li
              key={index}
              className={activeIndex === index ? styles.active : ""}
              onClick={() => handleActiveLink(index)}>
              <a href="#">
                <span className={styles.icon}>
                  {/* Đặt biểu tượng cho từng mục */}
                  {item === "Home" && <i className="fa-solid fa-house"></i>}
                  {item === "Profile" && <i className="fa-solid fa-user"></i>}
                  {item === "Message" && (
                    <i className="fa-solid fa-message"></i>
                  )}
                  {item === "Photos" && <i className="fa-solid fa-camera"></i>}
                  {item === "Settings" && <i className="fa-solid fa-gear"></i>}
                </span>
                <span className={styles.text}>{item}</span>
              </a>
            </li>
          )
        )}
        <div className={styles.indicator}></div>
      </ul>
    </div>
  );
};

export default Navigation;
