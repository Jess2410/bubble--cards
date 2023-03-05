import Link from "next/link";
import { useState, useEffect } from "react";
import styles from "./FloatingButton.module.css";

const FloatingButton = () => {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    setIsPulsing(true);

    return () => setIsPulsing(false);
  }, []);
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Link
        href="#process"
        className={`${styles.banner_arrow} ${isPulsing ? "button-pulse" : ""}`}
      ></Link>
    </div>
  );
};

export default FloatingButton;
