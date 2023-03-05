import React from "react";

import Link from "next/link";
import styles from "./NavbarResponsive.module.css";

const NavbarResponsive = () => {
  return (
    <ul className={styles.NavbarResponsive}>
      <li>
        <Link href="#">Home</Link>
      </li>
      <li>
        <Link href="#about">About</Link>
      </li>
      <li>
        <Link href="#process">Letn&apos;s go</Link>
      </li>
    </ul>
  );
};

export default NavbarResponsive;
