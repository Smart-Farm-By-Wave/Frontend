import happyIcon from '../assets/happy.png'
import styles from './StatusInfo.module.css'

function StatusInfo({ gasStatus, flameStatus }) {
  if (gasStatus || flameStatus) {
    return (
      <div>
        <div>Hi</div>
      </div>
    )
  } else {
    return (
      <div className={styles.statusContainer}>
        <img src={happyIcon} className={styles.statusIcon} />
        <div className={styles.statusText}>Everything is fine!</div>
        <div className={styles.statusDesc}>No flame or gas is detected</div>
      </div>
    )
  }
}

export default StatusInfo
