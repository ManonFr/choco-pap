"use client";

import { useCart } from "@/contexts/CartContext";
import styles from "./CartDrawer.module.css";
import Image from "next/image";
import { useEffect } from "react";

export default function CartDrawer() {
  const {
    cart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
    clearCart,
    isOpen,
    closeCart,
    isReady,
  } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeCart();
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, closeCart]);

  if (!isReady) return null;

  return (
    <div className={`${styles.drawer} ${isOpen ? styles.open : ""}`}>
      <button
        className={styles.closeBtn}
        onClick={closeCart}
        aria-label="Fermer le panier"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <h2 className={styles.title}>PANIER</h2>

      {cart.length === 0 ? (
        <p className={styles.empty}>Votre panier est vide.</p>
      ) : (
        <>
          <div className={styles.items}>
            {cart.map((item) => (
              <div key={item.id} className={styles.card}>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className={styles.removeIcon}
                  aria-label="Supprimer cet article"
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <div className={styles.imgWrapper}>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={80}
                    height={80}
                    className={styles.image}
                  />
                </div>
                <div className={styles.details}>
                  <h3 className={styles.name}>{item.title}</h3>
                  <p className={styles.price}>{item.price.toFixed(2)} €</p>
                  <div className={styles.quantity}>
                    <button onClick={() => decrementQuantity(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => incrementQuantity(item.id)}>
                      +
                    </button>
                  </div>
                  <p className={styles.subtotal}>
                    Total : {(item.price * item.quantity).toFixed(2)} €
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.summary}>
            <strong>Total à payer :</strong> {total.toFixed(2)} €
          </div>

          <div className={styles.cartActions}>
            <button onClick={clearCart} className={styles.clearButton}>
              Vider le panier
            </button>
            <button className={styles.checkoutButton} disabled>
              Valider le panier
            </button>
          </div>
        </>
      )}
    </div>
  );
}
