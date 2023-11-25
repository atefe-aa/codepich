import { Link } from "react-scroll";
import styles from "./Header.module.css";
function HeaderV2() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.header}`}>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className={`navbar-nav ${styles.ul} text-light`}>
          <li className={styles.headerLineSmall}>
            <div className={styles.headerLine}></div>
          </li>
          <li className="nav-item">
            <Link to="services" className="nav-link">
              خدمات
            </Link>
          </li>
          <li className={styles.headerLineSmall}>
            <div className={styles.headerLine}></div>
          </li>

          <li className="nav-item">
            <Link to="process" className="nav-link">
              فرآیند
            </Link>
          </li>
          <li className={styles.headerLineSmall}>
            <div className={styles.headerLine}></div>
          </li>
          <li className="nav-item" style={{ width: "min-content" }}>
            <Link to="why-us" className="nav-link">
              درباره
            </Link>
          </li>
          <li className={styles.headerLineSmall}>
            <div className={styles.headerLine}></div>
          </li>
          <li className="logo navbar-brand m-0">
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
          <li style={{ width: "min-content" }}>
            <Link to="team-cv" className="nav-link">
              رزومه
            </Link>
          </li>
          <li className={styles.headerLineBig}>
            <div className={styles.headerLine}></div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderV2;
