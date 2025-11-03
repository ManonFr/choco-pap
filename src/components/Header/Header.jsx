"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();

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
          <li className={pathname === "/panier" ? styles.active : ""}>
            <Link href="/panier">Panier</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
