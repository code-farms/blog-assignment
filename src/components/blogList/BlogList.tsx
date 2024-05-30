// "use client";
"use client";
import React, { useEffect, useState } from "react";
import Blog from "../blog/Blog";
import type { BlogInterface } from "@/types/interfaces";
import styles from "./blogList.module.css";
import { FaSearch } from "react-icons/fa";

export default function BlogList() {
  const [blogList, setBlogList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://static.staticsave.com/bloglist/blogs.json"
      );
      const data = await response.json();
      setBlogList(data);
    };
    fetchData();
  });

  const filteredData = blogList.filter((blog: BlogInterface) =>
    blog.title.toLowerCase().includes(query.toLowerCase())
  );

  console.log("filteredData", filteredData);

  return (
    <div className={styles.blogListPage}>
      <div className={styles.blogListPageWrapper}>
        <div className={styles.searchBox}>
          <div className={styles.inputWrapper}>
            <input
              type="search"
              name="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
            />
            <button>
              <FaSearch />
            </button>
          </div>
        </div>

        <div className={styles.titleBox}>
          <h1 className={styles.title}>Blogs</h1>
        </div>
        <div className={styles.blogList}>
          {filteredData.map((blog: BlogInterface, idx: any) => (
            <Blog key={idx} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
}
