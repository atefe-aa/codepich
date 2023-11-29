import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import MobileHeader from "./MobileHeader";

function Header() {
  return (
    <header className={styles.header}>
      <MobileHeader />
      <ul className={styles.ul}>
        <li className={styles.headerLineSmall}>
          <div className={styles.headerLine}></div>
        </li>
        <li>
          <Link to="services">خدمات</Link>
        </li>
        <li className={styles.headerLineSmall}>
          <div className={styles.headerLine}></div>
        </li>

        <li>
          <Link to="process">فرآیند</Link>
        </li>
        <li className={styles.headerLineSmall}>
          <div className={styles.headerLine}></div>
        </li>
        <li>
          <Link to="why-us">درباره</Link>
        </li>
        <li className={styles.headerLineSmall}>
          <div className={styles.headerLine}></div>
        </li>
        <li className="logo">
          <Link to="/">
            <img
              src="assets/img/logo-white.svg"
              className={styles.logoImg}
              alt="logo-codepich"
            />
          </Link>
        </li>
        <li className={styles.headerLineBig}>
          <div className={styles.headerLine}></div>
        </li>
        <li>
          <Link to="team-cv">رزومه</Link>
        </li>
        <li className={styles.headerLineBig}>
          <div className={styles.headerLine}></div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
