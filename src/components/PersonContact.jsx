import styles from "../styles/AboutPerson.module.css";
import { Link } from "react-router-dom";
function PersonContact({ data }) {
  return (
    <div className={`rounded-5 p-2 mt-4  ${styles.glass_bg_2}`}>
      <img src={data.logo} alt={data.value} className="w-10" />
      {data.link ? (
        <Link to={data.link} className="ms-2">
          {data.value}
        </Link>
      ) : (
        <span className="ms-2">{data.value}</span>
      )}
    </div>
  );
}

export default PersonContact;
