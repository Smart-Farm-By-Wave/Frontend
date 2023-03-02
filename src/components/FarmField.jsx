import styles from './FarmField.module.css'
import Field from './Field'

function FarmField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.field1}>
        <Field plantName={'Strawberry'} moisture={80} />
      </div>
      <div className={styles.field2}>
        <Field plantName={'Strawberry'} moisture={80} />
      </div>
      <div className={styles.field3}>
        <Field plantName={'Strawberry'} moisture={80} />
      </div>
      <Field plantName={'Strawberry'} moisture={80} />
    </div>
  )
}

export default FarmField
