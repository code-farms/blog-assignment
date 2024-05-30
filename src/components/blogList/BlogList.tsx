import React from "react";
import Blog from "../blog/Blog";
import type { BlogInterface } from "@/types/interfaces";
import styles from "./blogList.module.css";
import { FaSearch } from "react-icons/fa";
import fs from "fs/promises";
import path from "path";

export default async function BlogList() {
  const response = await fetch(
    "https://static.staticsave.com/bloglist/blogs.json"
  );

  const data = await response.json();

  console.log("response", data);

  return (
    <div className={styles.blogListPage}>
      <div className={styles.blogListPageWrapper}>
        <div className={styles.searchBox}>
          <div className={styles.inputWrapper}>
            <input type="search" placeholder="Search" />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>

        <div className={styles.titleBox}>
          <h1 className={styles.title}>Blogs</h1>
        </div>
        <div className={styles.blogList}>
          {data.map((blog: BlogInterface, idx: any) => (
            <Blog key={idx} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
