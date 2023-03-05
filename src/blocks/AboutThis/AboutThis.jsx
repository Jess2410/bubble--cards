import React from "react";
import styles from "../AboutThis/AboutThis.module.css";
import Button from "../../components/Button/Button";
import Link from "next/link";

const AboutThis = () => {
  return (
    <main className={styles.about} id="about">
      <div className={styles.about_textBox}>
        <h2 className={styles.about_text}>
          Les petites Bubbles ne manquent pas d’air.
        </h2>
        <p className={styles.about_text_p}>
          Grâce à Bubble Cards, créez et téléchargez vos cartes virtuelles 100%
          personnalisables avec texte et photo ! Finies les Cartes Postales
          clichés des stations balnéaires ou stations de ski. Vos sentiments
          méritent mieux que ça !
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link href="#process">
            <Button text="Let's Go ! " />
          </Link>
        </div>
      </div>
      <img
        className={styles.about_img}
        src="/images/splash.png"
        alt="splash gum"
      />
      <ul className={styles.about_listBox}>
        <li className={styles.about_list}>
          <img
            className={styles.about_list_img}
            src="/images/plane.png"
            alt="plane icon"
          />
          <div className={styles.about_list_text}>
            <h3 className={styles.about_list_text_h3}>Gratuit</h3>
            <p className={styles.about_list_text_p}>
              Service 100% gratuit, alors qu’attendez-vous pour essayer ?
            </p>
          </div>
        </li>
        <li className={styles.about_list}>
          <img
            className={styles.about_list_img}
            src="/images/tree.png"
            alt="tree icon"
          />
          <div className={styles.about_list_text}>
            <h3 className={styles.about_list_text_h3}>Ecologique</h3>
            <p className={styles.about_list_text_p}>
              Fini le papier, téléchargez vos Bubble Cards et envoyez-les par
              mail !
            </p>
          </div>
        </li>
        <li className={styles.about_list}>
          <img
            className={styles.about_list_img}
            src="/images/stars.png"
            alt="stars icon"
          />
          <div className={styles.about_list_text}>
            <h3 className={styles.about_list_text_h3}>100% personnalisé</h3>
            <p className={styles.about_list_text_p}>
              Faites des cartes à votre image de façon ludique et simple.
            </p>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default AboutThis;
