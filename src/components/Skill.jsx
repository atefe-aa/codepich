import styles from "../styles/Skill.module.css";

function Skill({ skill }) {
  return (
    <div className={styles.svgDiv} key={skill.title}>
      <svg className={styles.svg}>
        <circle
          cx="50"
          cy="50"
          r="40"
          stroke="#693194"
          strokeWidth="10"
          fill="none"
          strokeDasharray={(
            2 *
            Math.PI *
            40 *
            (skill.percentage / 100)
          ).toFixed(2)}
          transform="rotate(-90 50 50)" // Rotate the circle to start from the top (0 degrees)
          className={styles.big}
        />
        <circle
          cx="50"
          cy="50"
          r="25"
          stroke="#693194"
          strokeWidth="8"
          fill="none"
          strokeDasharray={(
            2 *
            Math.PI *
            25 *
            (skill.percentage / 100)
          ).toFixed(2)}
          transform="rotate(-90 50 50)" // Rotate the circle to start from the top (0 degrees)
          className={styles.small}
        />
        <image x="37" y="37" xlinkHref={skill.logo} className={`${styles.small} ${styles.logo}`} />
        <image x="30" y="30" xlinkHref={ skill.logo} className={`${styles.big} ${styles.logo}`} />
      </svg>
    </div>
  );
}

export default Skill;
