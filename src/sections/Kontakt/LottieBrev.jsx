import React from "react";
import Lottie from "lottie-react";
import dataAnimation from "../../assets/Brev.json";
import styles from "./Kontakt.module.css";

const LottieAnimation = () => {
  return (
    <div className={styles.lottieAnimation}>
      <Lottie animationData={dataAnimation} />
    </div>
  );
};

export default LottieAnimation;
