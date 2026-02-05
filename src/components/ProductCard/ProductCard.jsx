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

  // Add product to cart when button is clicked
  const handleAddToCart = () => {
    addToCart(product);
  };

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
      </Link>

      <p className={styles.price}>{price} €</p>
      <p className={styles.rating}>Note : {note} / 5</p>

      <button
        className={styles.button}
        onClick={handleAddToCart}
        aria-label={`Ajouter ${title} au panier`}
      >
        Ajouter au panier
      </button>
    </div>
  );
}
