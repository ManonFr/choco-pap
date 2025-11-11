"use client";

import styles from "./ProductCard.module.css";
import { useCart } from "@/contexts/CartContext";
import Image from "next/image";
import Link from "next/link";
import slugify from "@/lib/slugify";

export default function ProductCard({ product }) {
  const { title, price, image, note } = product;
  const { addToCart } = useCart();
  const slug = slugify(title);

  return (
    <div className={styles.card}>
      <Link href={`/produit/${slug}`} className={styles.linkWrapper}>
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
      </Link>

      <button className={styles.button} onClick={() => addToCart(product)}>
        Ajouter au panier
      </button>
    </div>
  );
}
