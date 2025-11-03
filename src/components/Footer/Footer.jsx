import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.block}>
        <h3>Choco Pap</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className={styles.block}>
        <h3>Contact</h3>
        <p>Adresse : 51 rue du chocolat, 75000 Paris</p>
        <p>Téléphone : 01 23 45 67 89</p>
        <p>Horaires : 9h00 - 17h00, du lundi au vendredi</p>
      </div>

      <div className={`${styles.block} ${styles.socials}`}>
        <a href="#">
          <i className="fa-brands fa-square-facebook"></i>{" "}
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram"></i>{" "}
        </a>
        <a href="#">
          <i className="fa-brands fa-square-x-twitter"></i>{" "}
        </a>
      </div>
    </footer>
  );
}
