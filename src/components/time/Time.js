import React, { useState, useEffect } from "react";
import styles from "./Time.module.css";

const Time = () => {
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState({ city: "", country: "" });
  const isPM = time.getHours() >= 12;

  useEffect(() => {
    // Cập nhật thời gian mỗi giây
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Lấy vị trí người dùng
    const fetchLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        setLocation({
          city: data.city,
          country: data.country_name,
        });
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    };

    fetchLocation();

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={`${styles.frameTime} ${
        isPM ? styles.night : styles.day
      } w-[90%] h-[85%] bg-[#fff] rounded-[30px] flex flex-col justify-center items-start px-5`}>
      <div
        className="text-[25px] text-[#4CBFFF]"
        style={{ fontFamily: "Orbitron" }}>
        {time.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      <div
        className="text-[#000] text-[13px]"
        style={{ fontFamily: "Orbitron" }}>
        {time.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </div>
      <div className="location">
        {/* {location.city}, {location.country} */}
      </div>
    </div>
  );
};

export default Time;
