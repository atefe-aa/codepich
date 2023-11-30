import { NavLink, Link } from "react-router-dom";
import styles from "./Header.module.css";
import MobileHeader from "./MobileHeader";
import { scrollToTop } from "../utils/helpers";


function Header() {

  return (
    <header className={styles.header}>
      <MobileHeader />
      <ul className={styles.ul}>
        <li className={styles.headerLineSmall}>
          <div className={styles.headerLine}></div>
        </li>
        <li>
          <NavLink
            to="/services"
            className={styles.navLink}
            onClick={scrollToTop}
          >
            خدمات
          </NavLink>
        </li>
        <li className={styles.headerLineSmall}>
          <div className={styles.headerLine}></div>
        </li>

        <li>
          <NavLink
            to="/process"
            className={styles.navLink}
            onClick={scrollToTop}
          >
            فرآیند
          </NavLink>
        </li>
        <li className={styles.headerLineSmall}>
          <div className={styles.headerLine}></div>
        </li>
        <li>
          <NavLink
            to="/why-us"
            
            className={styles.navLink}
            onClick={scrollToTop}
          >
            درباره
          </NavLink>
        </li>
        <li className={styles.headerLineSmall}>
          <div className={styles.headerLine}></div>
        </li>
        <li className="logo">
          <NavLink to="/" onClick={scrollToTop}>
            <img
              src="assets/img/logo-white.svg"
              className={styles.logoImg}
              alt="logo-codepich"
            />
          </NavLink>
        </li>
        <li className={styles.headerLineBig}>
          <div className={styles.headerLine}></div>
        </li>
        <li>
          <Link
            to="/team-cv"
            className={styles.navLink}
            onClick={scrollToTop}
          >
            رزومه
          </Link>
        </li>
        <li className={styles.headerLineBig}>
          <div className={styles.headerLine}></div>
        </li>
      </ul>
    </header>
  );
}

export default Header;
