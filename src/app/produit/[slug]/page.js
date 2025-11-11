"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import styles from "./produit.module.css";
import { useCart } from "@/contexts/CartContext";
import slugify from "@/lib/slugify";

export default function ProductPage() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { addToCart, openCart } = useCart();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => slugify(p.title) === slug);
        setProduct(found);
        setLoading(false);
      });
  }, [slug]);

  if (!product) {
    return <p className={styles.loading}>Produit introuvable</p>;
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    openCart();
  };

  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <Image
          src={product.image}
          alt={product.title}
          width={500}
          height={400}
          className={styles.image}
        />
      </div>

      <div className={styles.details}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.price}>{product.price.toFixed(2)} €</p>
        <p className={styles.description}>{product.description}</p>

        <div className={styles.controls}>
          <input
            type="number"
            className={styles.quantity}
            value={quantity}
            min="1"
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value)))}
          />
          <button onClick={handleAddToCart} className={styles.button}>
            Ajouter au panier
          </button>
        </div>
      </div>

      <div className={styles.ingredientsBlock}>
        <h2 className={styles.subheading}>Ingrédients</h2>
        <p className={styles.ingredients}>{product.ingredients}</p>
      </div>
    </div>
  );
}
