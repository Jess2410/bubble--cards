import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../Header/Header.module.css";

import NavbarResponsive from "../../components/NavbarResponsive/NavbarResponsive";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [checkWidth, setcheckWidth] = useState(null);
  const [toggleNav, setToggleNav] = useState(false);
  const [showNavbarResponsive, setShowNavbarResponsive] = useState(false);

  const checkWidthFunc = () => {
    setcheckWidth(window.innerWidth);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      setcheckWidth(window.innerWidth);
      window.addEventListener("resize", checkWidthFunc);
    }
    return () => {
      window.removeEventListener("resize", checkWidthFunc);
    };
  }, []);

  const showNavbar = () => {
    setToggleNav(!toggleNav);
    setShowNavbarResponsive(!showNavbarResponsive);
  };

  return (
    <>
      <header className={styles.header}>
        <a href="#" className={styles.header_logo}>
          <Image
            src="/images/Bubble.png"
            alt=""
            width={40}
            height={40}
            style={{ marginRight: "20px" }}
          />
          <p>Bubble Cards</p>
        </a>
        {checkWidth > 900 ? (
          <ul className={styles.header_navbar}>
            <Link href="#">
              {" "}
              <li className={styles.header_navbar_li}>Home</li>
            </Link>
            <Link href="#about">
              <li className={styles.header_navbar_li}>About</li>
            </Link>
            <Link href="#process">
              <li className={styles.header_navbar_li}>Let&apos;s go</li>
            </Link>
          </ul>
        ) : !toggleNav ? (
          <>
            <div>
              <button onClick={showNavbar} className={styles.header_button}>
                <img height={40} width={40} src="/images/menu.svg" alt="icon" />
              </button>
            </div>
          </>
        ) : (
          <button onClick={showNavbar} className={styles.header_button}>
            <img height={40} width={40} src="/images/close.svg" alt="icon" />
          </button>
        )}
      </header>
      {showNavbarResponsive ? (
        <NavbarResponsive onClose={() => setShowNavbarResponsive(true)} />
      ) : null}
    </>
  );
};

export default Header;
