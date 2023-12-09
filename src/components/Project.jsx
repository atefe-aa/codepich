import { Link } from "react-router-dom"

function Project({src, link}) {
    return (
        <div className="col-12 col-md-6 position-relative">
        <img
          src={src}
          alt="project image"
          className="img-fluid projectPic"
        />
        <Link
        to={link}
          type="button"
          className="btn btn-dark position-absolute btn-more-cv py-3 px-4"
        >
          نمایش بیشتر
        </Link>
      </div>
    )
}

export default Project
