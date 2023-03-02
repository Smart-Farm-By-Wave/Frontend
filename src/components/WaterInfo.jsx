import styles from './WaterInfo.module.css'
import waterTank from '../assets/watertank.png'

function WaterInfo({ percent }) {
  return (
    <div className={styles.waterInfoContainer}>
      <img src={waterTank} className={styles.waterIcon} />
      <div className={styles.waterText}>Water Remaining</div>
      <div className={styles.waterPercent}>
        {percent}
        <span className={styles.percent}>%</span>
      </div>
    </div>
  )
}

export default WaterInfo
