import { Link } from "react-router-dom";
import styles from "../styles/TeamCV.module.css";

function Project({ data, projectName }) {
  return (
    <>
      <div className="col-12 col-md-6 position-relative">
        {/* best image ratio is 3:2 */}
        <img
          loading="lazy"
          src={data.bigImages[0].src}
          alt={data.bigImages[0].alt}
          className={`img-fluid ${styles.projectPic}`}
        />
        <Link
          to={`project/${projectName}`}
          type="button"
          className={`btn btn-dark position-absolute  py-2 px-4 ${styles.btn_more_cv}`}
        >
          نمایش
        </Link>
      </div>
    </>
  );
}

export default Project;
