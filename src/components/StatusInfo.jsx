import { useEffect, useState } from 'react'

import { getData } from '../fetchData'

import happyIcon from '../assets/happy.png'
import fireIcon from '../assets/fire.png'
import styles from './StatusInfo.module.css'
import classNames from 'classnames'

function StatusInfo() {
  const [statusInfo, setStatusInfo] = useState({ smoke: false, fire: false })
  useEffect(() => {
    const interval = setInterval(() => {
      getData('/central/fire', setStatusInfo)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (statusInfo.fire && statusInfo.smoke) {
    return (
      <div className={styles.statusContainer}>
        <img src={fireIcon} className={styles.statusIcon} />
        <div className={classNames(styles.statusText, styles.alertText)}>
          Flame and Gas is detected!
        </div>
      </div>
    )
  } else if (statusInfo.fire) {
    return (
      <div className={styles.statusContainer}>
        <img src={fireIcon} className={styles.statusIcon} />
        <div className={classNames(styles.statusText, styles.alertText)}>
          Flame is detected!
        </div>
      </div>
    )
  } else if (statusInfo.smoke) {
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
