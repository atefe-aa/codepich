import { Link } from "react-router-dom";
import { scrollToTop } from "../utils/helpers";
import styles from "../styles/ContactDiv.module.css";

function ContactDiv() {
  return (
    <div className={styles.contactDiv}>
      <h3>ما دوست داریم درمورد محصول یا ایده شما بشنویم</h3>
      <Link to="/contact" onClick={scrollToTop} className={styles.contactBtn}>
        با ما در تماس باشید
      </Link>
    </div>
  );
}

export default ContactDiv;
