import React from "react";
import styles from "./ImageBoxStyles.module.css";

export default function ImageBox({ progbilder }) {
  return (
    <div className={styles.imageBoxContainer}>
      {progbilder.map((image, index) => (
        <div key={index} className={styles.imageBox}>
          <img src={image} alt={`Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
