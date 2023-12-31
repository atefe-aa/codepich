import { Link } from "react-router-dom";
import styles from "./MobileHeader.module.css";
import { useState } from "react";
import HamburgerMenu from "./HamburgerMenu";
import { scrollToTop } from "../utils/helpers";

function MobileHeader() {
  const [isOpen, setIsOpen] = useState(false);
  function close(){
    setIsOpen(false);
  }
  return (
    <div className={styles.mobileHeader}>
      {isOpen && <HamburgerMenu handleClose={close} />}
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen((open) => !open)}
      >
        <img src="/assets/img/icons/menu-icon.svg" />
      </button>

      <Link className={styles.logo} to="/"   onClick={scrollToTop}>
        <img
          src="/assets/img/logo-white.svg"
          className={styles.logoImg}
          alt="logo-codepich"
        />
      </Link>
      <Link className={styles.resume} to="team-cv"   onClick={scrollToTop}>
        رزومه تیم
      </Link>
    </div>
  );
}

export default MobileHeader;
