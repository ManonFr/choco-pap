"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const { cart, openCart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Choco Pap</Link>
      </div>

      <button
        className={styles.burger}
        onClick={toggleMenu}
        aria-label="Ouvrir le menu mobile"
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
        <ul>
          <li className={pathname === "/" ? styles.active : ""}>
            <Link href="/">Accueil</Link>
          </li>
          <li className={pathname === "/boutique" ? styles.active : ""}>
            <Link href="/boutique">Boutique</Link>
          </li>
          <li>
            <button
              onClick={openCart}
              className={styles.cartButton}
              aria-label="Ouvrir le panier"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              {totalItems > 0 && (
                <span className={styles.badge}>{totalItems}</span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
