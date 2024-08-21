import React from "react";
import styles from "./Kontakt.module.css";

export default function Kontakt() {
  return (
    <section className={styles.container}>
      <h1>Kontakt meg</h1>
      <p className={styles.kontaktTekst}>
        Tror du jeg er en fit som utvikler i din bedrift? Ring meg for en prat,
        eller send meg en e-post!
      </p>
      <div className={styles.kontakt}>
        <div className={styles.tlf}>
          <p>Telefon:</p>
          <p>91755601</p>
        </div>
        <div className={styles.epost}>
          <p>Epost:</p>
          <a href="oscar.eriksen@gmail.com">oscar.eriksen@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
