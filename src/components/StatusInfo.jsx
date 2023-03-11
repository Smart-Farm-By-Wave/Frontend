import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { getData } from '../fetchData'

import happyIcon from '../assets/happy.png'
import fireIcon from '../assets/fire.png'
import styles from './StatusInfo.module.css'
import classNames from 'classnames'

const MySwal = withReactContent(Swal)

function StatusInfo() {
  const [statusInfo, setStatusInfo] = useState({ smoke: false, fire: false })
  const [isAlertShown, setIsAlertShown] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      getData('/central/fire', setStatusInfo)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  // show fire alert
  useEffect(() => {
    if (!isAlertShown && (statusInfo.fire || statusInfo.smoke)) {
      setIsAlertShown(true)
      MySwal.fire({
        title: 'Warning',
        text: 'Flame or Gas is detected!',
        icon: 'warning',
        iconColor: '#f03e3e',
      })
    } else if (isAlertShown && !(statusInfo.fire || statusInfo.smoke)) {
      setIsAlertShown(false)
    }
  }, [statusInfo, isAlertShown])

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
