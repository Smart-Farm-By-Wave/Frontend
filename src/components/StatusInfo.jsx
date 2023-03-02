import happyIcon from '../assets/happy.png'
import fireIcon from '../assets/fire.png'
import styles from './StatusInfo.module.css'
import classNames from 'classnames'

function StatusInfo({ gasStatus, flameStatus }) {
  if (flameStatus && gasStatus) {
    return (
      <div className={styles.statusContainer}>
        <img src={fireIcon} className={styles.statusIcon} />
        <div className={classNames(styles.statusText, styles.alertText)}>
          Flame and Gas is detected!
        </div>
      </div>
    )
  } else if (flameStatus) {
    return (
      <div className={styles.statusContainer}>
        <img src={fireIcon} className={styles.statusIcon} />
        <div className={classNames(styles.statusText, styles.alertText)}>
          Flame is detected!
        </div>
      </div>
    )
  } else if (gasStatus) {
    return (
      <div className={styles.statusContainer}>
        <img src={fireIcon} className={styles.statusIcon} />
        <div className={classNames(styles.statusText, styles.alertText)}>
          Gas is detected!
        </div>
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
