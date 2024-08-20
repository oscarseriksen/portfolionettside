import React from "react";
import styles from "./BildeStyles.module.css";
import portbilde from "../../assets/portbilde.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CVPort from "../../assets/CVPort.pdf";
import { useTheme } from "../../common/ThemeContext";
import Animation from "./Lottie.jsx";

export default function OscarBilde() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="bilde" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img src={portbilde} className={styles.bildet} alt="Bilde av meg" />
        <img
          src={themeIcon}
          className={styles.colorMode}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.lottieAnim}>
        <Animation></Animation>
      </div>

      <div className={styles.info}>
        <h1>
          Oscar
          <br />
          Skauge
          <br />
          Eriksen
        </h1>
        <h2>Fullstack utvikler</h2>
        <span>
          <a
            href="https://github.com/oscarseriksen/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a
            href="https://linkedin.com/in/oscarskaugeeriksen"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
          Hei! Jeg er på utkikk etter jobb innen utvikling. Er interessert i
          fullstack/frontend/backend stillinger. Utforsk siden min for å bli
          bedre kjent med meg!
        </p>
        <a href={CVPort} download>
          <button className="Hover">Min CV</button>
        </a>
      </div>
    </section>
  );
}
