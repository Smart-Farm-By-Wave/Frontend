import { useEffect, useState } from 'react'
import Info from './Info'
import styles from './MainInfoCard.module.css'

function MainInfoCard() {
  const [mainInfo, setMainInfo] = useState({
    temp: 0,
    humidity: 0,
    rainfall: 0,
  })
  return (
    <div className={styles.mainContainer}>
      <Info type={'temp'} value={Math.round(mainInfo.temp)} />
      <Info type={'humid'} value={Math.round(mainInfo.humidity)} />
      <Info type={'rainfall'} value={Math.round(mainInfo.rainfall)} />
    </div>
  )
}

export default MainInfoCard
