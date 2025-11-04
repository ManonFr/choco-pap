"use client";

import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.css";
import filterProducts from "@/lib/filterProducts";

export default function ProductGrid({ filters }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Erreur chargement produits :", err));
  }, []);

  const filtered = filterProducts(products, filters);

  return (
    <section className={styles.grid}>
      {products.length === 0 ? (
        <p>Chargement des produits...</p>
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
