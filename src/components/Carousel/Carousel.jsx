"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Carousel.module.css";

const images = [
  "/images/carousel1.jpg",
  "/images/carousel2.jpg",
  "/images/carousel3.jpg",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className={styles.carousel}>
      <div className={styles.placeholder}></div>

      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className={styles.image}
      />

      <div className={styles.overlay}>
        <Link href="/boutique" className={styles.button}>
          Voir la boutique
        </Link>
      </div>

      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.active : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Aller à l’image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
