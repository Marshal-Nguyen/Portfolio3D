import React from "react";
import styles from "../../Page/Layout/Layout.module.css";
const Rotate = () => {
  const cards = [
    { index: 0, color: "255, 255, 255", image: "image/avatar/hack8.gif" },
    { index: 1, color: "255, 255, 255", image: "image/avatar/hack11.gif" },
    { index: 2, color: "255, 255, 255", image: "image/avatar/hack6.gif" },
    { index: 3, color: "255, 255, 255", image: "image/avatar/hack4.gif" },
    { index: 4, color: "255, 255, 255", image: "image/avatar/hack5.gif" },
    { index: 5, color: "255, 255, 255", image: "image/avatar/hack7.gif" },
    { index: 6, color: "255, 255, 255", image: "image/avatar/hack10.gif" },
    { index: 7, color: "255, 255, 255", image: "image/avatar/hack1.jpg" },
    { index: 8, color: "255, 255, 255", image: "image/avatar/hack12.gif" },
    { index: 9, color: "255, 255, 255", image: "image/avatar/hack9.gif" },
  ];
  return (
    <div className={styles.inner} style={{ "--quantity": cards.length }}>
      {cards.map((card) => (
        <div
          key={card.index}
          className={styles.card}
          style={{
            "--index": card.index,
            "--color-card": card.color,
            backgroundImage: `url(${card.image})`,
          }}>
          <div className={styles.img}></div>
        </div>
      ))}
    </div>
  );
};

export default Rotate;
