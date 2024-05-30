"use client";
import React, { useState } from "react";
import styles from "./blog.module.css";
import Image from "next/image";
import Lightbox from "react-spring-lightbox";
import { IoMdClose } from "react-icons/io";
import type { BlogInterface } from "@/types/interfaces";

export default function Blog({ blog }: { blog: BlogInterface }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.blogPostWrapper}>
      <div className={styles.thumbnailBox}>
        <Image
          className={styles.thumbnail}
          src={blog.thumbnail}
          width="300"
          height="200"
          alt="Thumbnail"
          onClick={() => setIsOpen(true)}
        />
        {/* <Lightbox
          isOpen={isOpen}
          onClose={handleClose}
          images={[{ src: blog.thumbnail, alt: "Lightbox Image" }]} // Array with a single image
          singleClickToZoom
          renderHeader={() => (
            <button className={styles.closeButton} onClick={handleClose}>
              <IoMdClose />
            </button>
          )}
          style={{ background: "grey" }}
          pageTransitionConfig={{
            from: { transform: "scale(0.75)", opacity: 0 },
            enter: { transform: "scale(1)", opacity: 1 },
            leave: { transform: "scale(0.75)", opacity: 0 },
            config: { mass: 1, tension: 320, friction: 32 },
          }}
        /> */}
      </div>
      <div className={styles.blogPost}>
        <div>
          <h2 className={styles.title}>{blog.title}</h2>
        </div>

        <div className={styles.infoBox}>
          <p className={styles.info}>
            {blog.date}
            <span className={styles.saperator}>|</span>
            <span className={styles.author}>{blog.author}</span>
          </p>
        </div>

        <div className={styles.descriptionBox}>
          <p className={styles.description}>{blog.description}</p>
        </div>
      </div>
    </div>
  );
}
