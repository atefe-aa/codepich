import styles from "../styles/Language.module.css"

function Language({ data }) {
  const fillArr = new Array(data.rating).fill(null);
  const noneArr = new Array(8 - data.rating).fill(null);

  return (
    <div className={styles.main}>
      <span className="me-2 w-10">{data.title}</span>
      <div className={styles.ratingDiv}>
        {fillArr.map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
          >
            <circle
              id="Ellipse_557"
              data-name="Ellipse 557"
              cx="17"
              cy="17"
              r="17"
              fill="#d5d5d5"
            />
          </svg>
        ))}
        {noneArr.map((_, index) => (
          <svg
            key={index}
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="34"
            viewBox="0 0 34 34"
          >
            <g
              id="Ellipse_551"
              data-name="Ellipse 551"
              fill="none"
              stroke="#d5d5d5"
              strokeWidth="2"
            >
              <circle cx="17" cy="17" r="17" stroke="none" />
              <circle cx="17" cy="17" r="16" fill="none" />
            </g>
          </svg>
        ))}
      </div>
    </div>
  );
}

export default Language;
