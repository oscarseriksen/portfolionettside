import React from "react";
import styles from "./OmMegStyles.module.css";
import bachelor from "../../assets/bachelorbilde.jpg";

export default function OmMeg() {
  return (
    <section id="ommeg" className={styles.container}>
      <h1 className={styles.tittel}>Om Meg</h1>
      <p className={styles.description}>
        Mitt navn er Oscar Skauge Eriksen, og er 28 år. Jeg er oppvokst i
        Kristiansand, hvor jeg også er bosatt nå. Jeg er villig til å flytte på
        meg så lenge jobben gir meg de erfaringene jeg er på utkikk etter. I
        Juni ble jeg ferdig med min bachelor grad i IT og informasjonssystemer
        ved Universitetet i Sørøst-Norge Bø. Her fikk jeg mye verdifull lærdom,
        spesielt innen utvikling, som er det jeg nå søker jobb innen. Jeg er en
        rolig og løsningsorientert person, noe som gjør at utvikling passer
        ypperlig for meg. Fritiden min bruker på å spille frisbeegolf, lage mat,
        gaming og henge med venner.
      </p>
      <img
        src={bachelor}
        className={styles.bachelor}
        alt="Bilde av meg på dreamhack"
      />
      <div className={styles.bottomBar}></div>
    </section>
  );
}
