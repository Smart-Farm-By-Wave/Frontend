import styles from './FarmField.module.css'
import Field from './Field'

function FarmField() {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.field1}>
        <Field plantName={'cabbage'} moisture={80} byWho={'Peeranat'} />
      </div>
      <div className={styles.field2}>
        <Field plantName={'spinach'} moisture={80} />
      </div>
      <div className={styles.field3}>
        <Field plantName={'bean'} moisture={80} />
      </div>
      <Field plantName={'basil'} moisture={80} />
    </div>
  )
}

export default FarmField
