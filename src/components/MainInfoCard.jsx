import { useEffect, useState } from 'react'
import { getData } from '../fetchData'
import Info from './Info'
import styles from './MainInfoCard.module.css'

function MainInfoCard() {
  const [mainInfo, setMainInfo] = useState({
    temp: 0,
    humidity: 0,
    rainfall: 0,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      getData('/central/main', setMainInfo)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className={styles.mainContainer}>
      <Info type={'temp'} value={Math.round(mainInfo.temp)} />
      <Info type={'humidity'} value={Math.round(mainInfo.humidity)} />
      <Info type={'rainfall'} value={Math.round(mainInfo.rainfall)} />
    </div>
  )
}

export default MainInfoCard
