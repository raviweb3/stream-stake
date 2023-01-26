import React from "react";
import styles from "../styles/Footer.module.css";
import Image from "next/image";


export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footer_items}>
          <span className={styles.footer_text}>
            © 2022 ALL RIGHTS RESERVED - Stream Stake
          </span>
        </div>
      </footer>
    </>
  );
};
