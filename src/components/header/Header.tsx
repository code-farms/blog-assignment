"use client";
import React, { useState } from "react";
import Link from "next/link";
import ThemeToggle from "../themeToggle/ThemeToggle";
import styles from "./header.module.css";
import { TiThMenu } from "react-icons/ti";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className={styles.headerWrapper}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <button className={styles.menuBtn} onClick={toggleNavbar}>
            <TiThMenu />
          </button>
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
          {isOpen ? (
            <ul className={styles.mobileNav}>
              <li>
                <Link href="/" onClick={toggleNavbar}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" onClick={toggleNavbar}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/works" onClick={toggleNavbar}>
                  Works
                </Link>
              </li>
            </ul>
          ) : null}
        </nav>

        <ThemeToggle />
      </header>
    </div>
  );
}
