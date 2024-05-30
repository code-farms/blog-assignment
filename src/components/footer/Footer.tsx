import React from "react";
import styles from "./footer.module.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.iconBox}>
          <FaFacebookSquare />
          <FaInstagram />
          <FaTwitter />
          <FaLinkedin />
        </div>
        <div className={styles.textBox}>
          <p>Copyright 2020 All rights are reserved.</p>
        </div>
      </div>
    </footer>
  );
}
