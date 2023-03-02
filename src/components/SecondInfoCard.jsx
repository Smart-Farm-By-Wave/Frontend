import styles from './SecondInfoCard.module.css'
import StatusInfo from './StatusInfo'
import WaterInfo from './WaterInfo'

function SecondInfoCard() {
  return (
    <div className={styles.mainContainer}>
      <StatusInfo flameStatus={false} gasStatus={false} />
      <WaterInfo percent={80} />
    </div>
  )
}

export default SecondInfoCard
