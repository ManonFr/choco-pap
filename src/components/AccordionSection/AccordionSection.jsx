"use client";

import styles from "./AccordionSection.module.css";

export default function AccordionSection({
  title,
  isOpen,
  onToggle,
  children,
}) {
  return (
    <div className={styles.group}>
      <button
        className={styles.toggle}
        onClick={onToggle}
        type="button"
        aria-expanded={isOpen}
      >
        <span>{title}</span>
        <span className={styles.symbol}>{isOpen ? "−" : "+"}</span>{" "}
      </button>
      <div className={`${styles.content} ${isOpen ? styles.open : ""}`}>
        {children}
      </div>
    </div>
  );
}
