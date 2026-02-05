"use client";

import { useState, useCallback } from "react";
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

  // Toggle accordion section
  const toggleSection = useCallback((section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  }, []);

  // Handle category checkbox changes
  const handleCategoryChange = useCallback(
    (e) => {
      const { value, checked } = e.target;

      setFilters((prev) => {
        const updatedCategories = checked
          ? [...prev.categories, value]
          : prev.categories.filter((cat) => cat !== value);

        return { ...prev, categories: updatedCategories };
      });
    },
    [setFilters]
  );

  // Handle minPrice/maxPrice changes
  const handlePriceChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setFilters((prev) => ({
        ...prev,
        [name]: parseFloat(value),
      }));
    },
    [setFilters]
  );

  // Handle rating slider
  const handleNoteChange = useCallback(
    (e) => {
      setFilters((prev) => ({
        ...prev,
        minNote: parseFloat(e.target.value),
      }));
    },
    [setFilters]
  );

  // Reset all filter values
  const resetFilters = useCallback(() => {
    setFilters({
      categories: [],
      minPrice: 0,
      maxPrice: 100,
      minNote: 0,
    });
  }, [setFilters]);

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

      <button onClick={resetFilters} className={styles.resetButton}>
        Réinitialiser les filtres
      </button>
    </aside>
  );
}
