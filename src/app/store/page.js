"use client";

import { useState } from "react";
import FilterSidebar from "@/components/FilterSidebar/FilterSidebar";
import ProductGrid from "@/components/ProductGrid/ProductGrid";
import styles from "./store.module.css";

export default function StorePage() {
  const [filters, setFilters] = useState({
    categories: [],
    minPrice: 0,
    maxPrice: 100,
    minNote: 0,
  });

  return (
    <section className={styles.layout}>
      <FilterSidebar filters={filters} setFilters={setFilters} />
      <ProductGrid filters={filters} />
    </section>
  );
}
