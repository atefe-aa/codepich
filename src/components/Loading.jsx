import styles from "../styles/Loading.module.css";

function Loading() {
  return (
    <div className={styles.loader}>
      <img src="/assets/img/loader.gif" />
    </div>
  );
}

export default Loading;
