"use client";

import styles from "./ProductCard.module.css";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";

export default function ProductCard({ product }) {
  const { title, price, image, note } = product;
  const { addToCart } = useCart();

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={image}
          alt={title}
          width={300}
          height={150}
          className={styles.image}
        />
      </div>
      <h3 className={styles.name}>{title}</h3>
      <p className={styles.price}>{price} €</p>
      <p className={styles.rating}>Note : {note} / 5</p>
      <button className={styles.button} onClick={() => addToCart(product)}>
        Ajouter au panier
      </button>
    </div>
  );
}
