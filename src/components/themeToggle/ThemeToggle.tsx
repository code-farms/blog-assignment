"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./themeToggle.module.css";
import moon from "./../../../public/moon.png";
import sun from "./../../../public/sun.png";
// import { ThemeContext } from "@/context/ThemeContext";

export default function ThemeToggle() {
  // const { toggle, theme } = useContext(ThemeContext);

  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Apply the theme to the document body
    document.body.className = theme;
  }, [theme]);

  return (
    <div
      className={styles.container}
      onClick={() =>
        setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
      }
    >
      <Image src={moon} alt="" width={16} height={16} />
      <div
        className={theme === "light" ? styles.lightBall : styles.darkBall}
      ></div>
      <Image src={sun} alt="" width={16} height={16} />
    </div>
  );
}
