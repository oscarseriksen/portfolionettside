import React from "react";
import styles from "./FerdigheterStyles.module.css";
import ImageBox from "./ImageBox";

export default function Ferdigheter() {
  const progbilder = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-plain.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-plain-wordmark.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg",
  ];

  return (
    <section id="ferdigheter" className={styles.container}>
      <h1>Mine ferdigheter</h1>
      <p className={styles.description}>
        Språkene under er jeg kjent med. Noen bedre enn andre, men jeg har en
        god forståelse, og er lettlært innen alle disse. Utenom programmerings
        språk jeg kan, så er jeg godt kjent med Github, arbeide i scrum/Kanban,
        og har også erfaring med test driven development.
      </p>
      <ImageBox className={styles.bilder} progbilder={progbilder} />
    </section>
  );
}
