import { useEffect, useState } from 'react'

import { getData } from '../fetchData'

import styles from './WaterInfo.module.css'
import waterTank from '../assets/watertank.png'

function WaterInfo() {
  const [waterInfo, setWaterInfo] = useState({ amount: 0 })
  useEffect(() => {
    const interval = setInterval(() => {
      getData('/central/waterRemaining', setWaterInfo)
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return (
    <div className={styles.waterInfoContainer}>
      <img src={waterTank} className={styles.waterIcon} />
      <div className={styles.waterText}>Water Remaining</div>
      <div className={styles.waterPercent}>
        {waterInfo.amount}
        <span className={styles.percent}>%</span>
      </div>
    </div>
  )
}

export default WaterInfo
