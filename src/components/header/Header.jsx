import React from "react";
import Link from "next/link";
import ThemeToggle from "./../themeToggle/ThemeToggle";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <ul className={styles.navlist}>
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">Blog</Link>
          </li>
          <li>
            <Link href="">Works</Link>
          </li>
        </ul>
      </nav>

      <div className={styles.search}>
        <input type="search" placeholder="Search" />
      </div>

      <ThemeToggle />
    </header>
  );
}
