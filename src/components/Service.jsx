import styles from "./ServicesSection.module.css";

function Service({ src, alt, text }) {
  return (
    <div
      className={`d-flex justify-content-around align-items-center flex-column ${styles.services}`}
    >
      <div className="img-with-border d-flex justify-content-around align-items-center">
        <img src={src} alt={alt} className="img-fluid" />
      </div>
      <span>{text}</span>
    </div>
  );
}

export default Service;
