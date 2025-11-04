import styles from "./ProductCard.module.css";
import { useCart } from "@/contexts/CartContext";

export default function ProductCard({ product }) {
  const { title, price, image, note } = product;
  const { addToCart } = useCart();

  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <h3 className={styles.name}>{title}</h3>
      <p className={styles.price}>{price} €</p>
      <p className={styles.rating}>Note : {note} / 5</p>
      <button className={styles.button} onClick={() => addToCart(product)}>
        Ajouter au panier
      </button>
    </div>
  );
}
