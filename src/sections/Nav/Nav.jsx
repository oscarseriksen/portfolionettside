import React from "react";
import styles from "./NavStyles.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <a href="#ommeg">Om meg</a>
        </li>
        <li>
          <a href="#ferdigheter">Ferdigheter</a>
        </li>
        <li>
          <a href="#projects">Prosjekter</a>
        </li>
        <li>
          <a href="#kontakt">Kontakt meg</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
