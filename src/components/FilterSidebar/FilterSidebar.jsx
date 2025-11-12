"use client";

import { useState } from "react";
import AccordionSection from "../AccordionSection/AccordionSection";
import styles from "./FilterSidebar.module.css";

const CATEGORIES = [
  "blanc",
  "lait",
  "noir",
  "caramel",
  "noix",
  "fruit",
  "liqueur",
];

export default function FilterSidebar({ filters, setFilters }) {
  const [openSections, setOpenSections] = useState({
    categories: false,
    price: false,
    notes: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCategoryChange = (e) => {
    const { value, checked } = e.target;
    const newCategories = checked
      ? [...filters.categories, value]
      : filters.categories.filter((cat) => cat !== value);

    setFilters({ ...filters, categories: newCategories });
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: parseFloat(value) });
  };

  const handleNoteChange = (e) => {
    setFilters({ ...filters, minNote: parseFloat(e.target.value) });
  };

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Filtres</h2>

      <AccordionSection
        title="Catégories"
        isOpen={openSections.categories}
        onToggle={() => toggleSection("categories")}
      >
        {CATEGORIES.map((cat) => (
          <label key={cat} className={styles.label}>
            <input
              type="checkbox"
              value={cat}
              checked={filters.categories.includes(cat)}
              onChange={handleCategoryChange}
              className={styles.checkbox}
            />
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </label>
        ))}
      </AccordionSection>

      <AccordionSection
        title="Prix"
        isOpen={openSections.price}
        onToggle={() => toggleSection("price")}
      >
        <label className={styles.label}>
          Min :
          <input
            type="number"
            name="minPrice"
            value={filters.minPrice}
            onChange={handlePriceChange}
            className={styles.input}
          />
        </label>
        <label className={styles.label}>
          Max :
          <input
            type="number"
            name="maxPrice"
            value={filters.maxPrice}
            onChange={handlePriceChange}
            className={styles.input}
          />
        </label>
      </AccordionSection>

      <AccordionSection
        title="Notes"
        isOpen={openSections.notes}
        onToggle={() => toggleSection("notes")}
      >
        <input
          type="range"
          min="0"
          max="5"
          step="1"
          value={filters.minNote}
          onChange={handleNoteChange}
          className={styles.range}
        />
        <span className={styles.note}>{filters.minNote} / 5</span>
      </AccordionSection>

      <button
        onClick={() =>
          setFilters({
            categories: [],
            minPrice: 0,
            maxPrice: 100,
            minNote: 0,
          })
        }
        className={styles.resetButton}
      >
        Réinitialiser les filtres
      </button>
    </aside>
  );
}
