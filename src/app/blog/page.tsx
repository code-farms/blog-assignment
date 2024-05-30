import React from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import cover from "@/../public/no-data.jpg";

export default function Blog() {
  return (
    <div className={styles.container}>
      <div className={styles.coverImageBox}>
        <Image className={styles.coverImage} src={cover} alt="No Data Found" />
      </div>
    </div>
  );
}
