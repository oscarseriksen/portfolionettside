import React from "react";
import styles from "./ProjectImageBox.module.css";

export default function ImageBox({ prosjektbilder, onImageClick, className }) {
  const imageDescriptions = [""];
  return (
    <div className={styles.imageBoxContainer}>
      {prosjektbilder.map((image, index) => (
        <div key={index} className={styles.imageBox}>
          <img
            src={image}
            alt={`Image ${index + 1}`}
            onClick={() => onImageClick(index)}
          />
        </div>
      ))}
    </div>
  );
}
