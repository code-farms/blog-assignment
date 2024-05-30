import React from "react";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import styles from "./header.module.css";

export default function Header() {
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul className={styles.navlist}>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/works">Works</Link>
            </li>
          </ul>
        </nav>

        <ThemeToggle />
      </header>
    </div>
  );
}
