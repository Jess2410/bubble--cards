import React from "react";
import Link from "next/link";
// import styles from "../blocks/aboutThis/AboutThis.module.css";

const pageNotFound404 = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItem: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
        position: "relative",
        color: "white",
        padding: "2rem",
        backgroundImage: 'url("/images/splash.png")',
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
      }}
    >
      <h1>
        <span style={{ fontSize: "3rem" }}>Oops!</span> 😭<br></br>
        <br></br>Cette page est introuvable.
      </h1>
      <br></br>
      <p>
        Veuillez vérifier que ln&apos;URL est correcte ou{" "}
        <Link style={{ textDecoration: "underline" }} href="/">
          retourner à la page dn&apos;accueil
        </Link>
        .
      </p>
    </div>
  );
};

export default pageNotFound404;
