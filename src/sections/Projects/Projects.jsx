import React, { useState } from "react";
import styles from "./ProjectsStyles.module.css";
import Paint from "../../assets/PaintJava.jpg";
import Visma from "../../assets/Visma.jpg";
import PacMan from "../../assets/PacManJava.jpg";
import portbilde from "../../assets/portbilde.jpg";
import skiltsoker from "../../assets/skiltsoker.jpg";
import ImageBox from "./ProjectImageBox.jsx";

export default function Projects() {
  const prosjektbilder = [Visma, skiltsoker, portbilde, PacMan, Visma, Paint];
  const prosjeBeskrivelse = [
    "Bachelor prosjekt for Visma. En veldig god erfaring som ga meg mye god lærdom. Prosjektet gikk ut på å lage et API som genererer testdata, som Visma kan bruke for testing av sine databaser. Det ble også laget et grensesnitt for dette, og applikasjonen/API'et ble sikert med OAuth 2.0. Les mer om prosjektet på vår prosjektnettside i lenken under. <a href='https://gruppe5bop3000.wordpress.com/'>prosjektnettside</a>",
    "Prosjekt i faget Mobilutvikling. Vi utviklet en android app for å søke opp  skiltnummer ved å ta i bruk Statens vegvesen sitt API. <a href='https://github.com/Danofe/MOB3000'>Github for prosjektet</a> ",
    "Denne nettsiden. Et prosjekt jeg startet for å pusse opp på mine React ferdigheter. <a href='https://github.com/oscarseriksen/portfolionettside'>Github for prosjektet</a>",
    "Etterligning av Pac-Man. Prosjektet var en obligatorisk oppgave i Java fag. Utviklet i Java med JavaFX, i samarbeid med min prosjektpartner. <a href='https://github.com/Danofe/Pacman-v.2'>Github for prosjektet</a>",
    "Vårt første prosjekt for Visma. Her utviklet vi en web app som brukes for å føre inn avtaler i andres kalendere. Her fikk vi lære ting som Azure, React og Firebase. <a href='https://github.com/Danofe/VismaAppEksamen'>Github for prosjektet</a> ",
    "Etterligning av Paint. Laget som en obligatorisk oppgave i Java fag. Utviklet i Java med JavaFX, i samarbeid med min prosjektpartner.  <a href='https://github.com/Danofe/PaintJava'>Github for prosjektet</a>",
  ];

  const [selectedText, setSelectedText] = useState("");
  const handleImageClick = (index) => {
    setSelectedText(prosjeBeskrivelse[index]);
  };
  return (
    <section section id="projects" className={styles.container}>
      <h1>prosjekter</h1>
      <p className={styles.infoTekst}>
        Her kan du utforske noen av prosjektene jeg har laget/vært en del
        av.Trykk på et prosjekt for å lese om det.{" "}
        <a href="https://gruppe5bop3000.wordpress.com/">prosjektnettside</a>
      </p>
      <ImageBox
        className={styles.bilder}
        prosjektbilder={prosjektbilder}
        onImageClick={handleImageClick}
      />
      <p
        className={styles.prosjektTekst}
        dangerouslySetInnerHTML={{ __html: selectedText }}
      />
    </section>
  );
}
