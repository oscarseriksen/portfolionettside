import React from "react";
import Lottie from "lottie-react";
import dataAnimation from "../../assets/Mann.json";
import styles from "./BildeStyles.module.css"; // Import CSS module

const LottieAnimation = () => {
  return (
    <div className={styles.lottieAnimation}>
      <Lottie animationData={dataAnimation} />
    </div>
  );
};

export default LottieAnimation;
