import styles from "./HamburgerMenu.module.css";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { Link } from "react-router-dom";

function HamburgerMenu({ handleClose }) {
  const ref = useOutsideClick(handleClose, true);
  return (
    <div ref={ref} onClick={handleClose} className={styles.itemsDiv}>
      <button className={styles.closeButton} onClick={handleClose}>
        <img src="assets/img/closeButton.svg" />
      </button>
      <li className={styles.itemMenu}>
        <Link to="services">خدمات</Link>
      </li>
      <li className={styles.itemMenu}>
        <Link to="process">فرآیند</Link>
      </li>
      <li className={styles.itemMenu}>
        <Link to="/why-us">چرا ما؟</Link>
      </li>
    </div>
  );
}

export default HamburgerMenu;
