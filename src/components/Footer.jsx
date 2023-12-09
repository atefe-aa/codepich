import Form from "./Form";
import styles from "../styles/Footer.module.css";

function Footer() {
  return (
    <footer className="section container-fluid content-header bg-contact-us">
      <div className="row">
        <div className="col-12 col-md-6 mt-md-5">
          <Form />
        </div>
      </div>
      <div className="ms-5 mt-3 d-flex flex-column">
        <span className={styles.formTitle}>راه های ارتباط با ما : </span>
        <div className={styles.icons}>
          <a className=" ms-1" href="http://t.me/tobeconfi">
            <img
              className={`image-fluid ${styles.icon}`}
              src="/assets/img/icons/telegram-logo.svg"
            />
          </a>
          <a className=" ms-1" href="http://t.me/tobeconfi">
            <img
              className={`image-fluid ${styles.icon}`}
              src="/assets/img/icons/instagram-logo.svg"
            />
          </a>
          <a className=" ms-1" href="http://t.me/tobeconfi">
            <img
              className={`image-fluid ${styles.icon}`}
              src="/assets/img/icons/x-logo.svg"
            />
          </a>
          <a className=" ms-1" href="http://t.me/tobeconfi">
            <img
              className={`image-fluid ${styles.icon}`}
              src="/assets/img/icons/linkedin-logo.svg"
            />
          </a>
          <a className=" ms-1" href="http://t.me/tobeconfi">
            <img
              className={`image-fluid ${styles.icon}`}
              src="/assets/img/icons/facebook-logo.svg"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
