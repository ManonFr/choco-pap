"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const pathname = usePathname();
  const { cart, openCart } = useCart();

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">Choco Pap</Link>
      </div>
      <nav>
        <ul className={styles.nav}>
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
              {cart.length > 0 && (
                <span className={styles.badge}>{cart.length}</span>
              )}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
