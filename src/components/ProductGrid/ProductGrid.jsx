"use client";

import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";
import filterProducts from "@/lib/filterProducts";

export default function ProductGrid({ filters }) {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erreur serveur");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setError(null);
      })
      .catch(() => {
        setError("Impossible de charger les produits.");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const filtered = filterProducts(products, filters);

  return (
    <section className={styles.grid}>
      {loading ? (
        <p className={styles.loading}>Chargement des produits...</p>
      ) : error ? (
        <p className={styles.error}>{error}</p>
      ) : filtered.length === 0 ? (
        <p className={styles.noResult}>
          Aucun produit ne correspond à vos filtres.
        </p>
      ) : (
        <div className={styles.cards}>
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  );
}
