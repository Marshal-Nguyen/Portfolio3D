import React from "react";
import styles from "../../Page/Layout/Layout.module.css";
const Knowledge = () => {
  const technologies = [
    { name: "HTML", color: "#E34F26", logo: "image/logoTech/html.png" },
    { name: "CSS", color: "#1572B6", logo: "image/logoTech/css.png" },
    { name: "Java", color: "#F7DF1E", logo: "image/logoTech/java.png" },
    { name: "React", color: "#61DAFB", logo: "image/logoTech/react.png" },
    {
      name: "TailwindCSS",
      color: "#38B2AC",
      logo: "image/logoTech/tailwind.png",
    },
    { name: "NodeJS", color: "#38B2AC", logo: "image/logoTech/node.png" },
  ];
  const repeatedTechnologies = [...technologies, ...technologies];
  return (
    <div className={`${styles.container}`}>
      <div className={styles.scroll}>
        {repeatedTechnologies.map((tech, index) => (
          <div
            key={index}
            className={styles.techCircle}
            aria-hidden={index >= technologies.length} // Ẩn các mục nhân đôi khỏi screen readers
          >
            <img src={tech.logo} alt={tech.name} className={styles.techLogo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
