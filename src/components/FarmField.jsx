import styles from './FarmField.module.css'
import Field from './Field'

function FarmField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.field1}>
        <Field />
      </div>
      <div className={styles.field2}>
        <Field />
      </div>
      <div className={styles.field3}>
        <Field />
      </div>
      <Field />
    </div>
  )
}

export default FarmField
