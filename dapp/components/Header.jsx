import React, { useState } from "react";
import styles from "../styles/Header.module.css";
import Image from "next/image";
import Link from "next/link";
import { ConnectButton } from "@rainbow-me/rainbowkit";

export const Header = ({}) => {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }

  return (
    <header>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <div className={styles.title}>
              <span className={`${styles.titleWord} ${styles.word1}`}>Stream </span>
              <span className={`${styles.titleWord} ${styles.word2}`}>Stake</span>
              <span className={`${styles.tagtext}`}>Passive Income</span>
            </div>
          </Link>
          <div className={styles.navlogo}>
            <Image src="/icon.jpeg" alt="Stream Stake" width={20} height={20} tintColor='red' />
          </div>
        </div>
        <ul
          className={
            isActive === false
              ? styles.navmenu
              : styles.navmenu + " " + styles.active
          }
        >
          <li className={styles.navitem}>
            <ConnectButton />
          </li>
        </ul>
        <button
          onClick={handleClick}
          className={
            isActive === false
              ? styles.hamburger
              : styles.hamburger + " " + styles.active
          }
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>
      </nav>
    </header>
  );
};
