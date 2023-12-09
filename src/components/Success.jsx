import { useOutsideClick } from "../hooks/useOutsideClick";
import styles from "../styles/Success.module.css";

function Success({ handleClose, show }) {
  const ref = useOutsideClick(handleClose, true);
  return (
    <div className={`${styles.mainDiv} ${show ? styles.active : ""}`}>
      <div ref={ref} onClick={handleClose} className={styles.formContactUsPage}>
        <button className={styles.closeButton} onClick={handleClose}>
          <img src="/assets/img/icons/closeButton.svg" />
        </button>
        <div className="text-center m-5">
          <h1>
            اطلاعات ثبت شد!
            <span>
              <img
                className={styles.successImg}
                src="/assets/img/svg/success.svg"
              />
            </span>
          </h1>
          <p>
            اطلاعات شما با موفقیت ثبت شد و به زودی همکاران ما با شما تماس خواهند
            گرفت
          </p>
        </div>
      </div>
    </div>
  );
}

export default Success;
