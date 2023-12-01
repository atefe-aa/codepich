import styles from "../styles/StepTag.module.css"

function StepTag({stepTitle}) {
    return (
        <div className={styles.stepTag}>
        <div className={styles.rightLine}></div>
        <div className={styles.circle}></div>
        <h3 className={styles.stepTitle}>{stepTitle}</h3>
      </div>
    )
}

export default StepTag
