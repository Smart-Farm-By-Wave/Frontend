import styles from './FarmField.module.css'
import Field from './Field'

function FarmField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.field1}>
        <Field number={1} />
      </div>
      <div className={styles.field2}>
        <Field number={2} />
      </div>
      <div className={styles.field3}>
        <Field number={3} />
      </div>
      <Field number={4} />
    </div>
  )
}

export default FarmField
