import React from "react";
import styles from "./ProjectsStyles.module.css";
import Paint from "../../assets/PaintJava.jpg";
import Visma from "../../assets/Visma.jpg";
import PacMan from "../../assets/PacManJava.jpg";
import ImageBox from "./ProjectImageBox.jsx";

export default function Projects() {
  const prosjektbilder = [Paint, Visma, PacMan];
  return (
    <section section id="projects" className={styles.container}>
      <h1>prosjekter</h1>
      <p>Her kan du utforske prosjektene jeg har laget/vært en del av. </p>
      <ImageBox className={styles.bilder} prosjektbilder={prosjektbilder} />
    </section>
  );
}
