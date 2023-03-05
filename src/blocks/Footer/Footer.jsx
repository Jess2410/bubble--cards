import React from "react";
import Image from "next/image";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="#" className={styles.logo}>
        <img
          src="/images/Bubble.png"
          alt=""
          style={{ maxHeight: "40px", marginRight: "20px" }}
        />
        <h2>Bubble Cards</h2>
      </a>
      <p className={styles.slogan}>
        Une nouvelle façon de créer des cartes virtuelles.
      </p>
      <p className={styles.copyright}>
        &copy; {new Date().getFullYear()} BubbleCards by Jess. Tous droits
        réservés.
      </p>
    </footer>
  );
};

export default Footer;
