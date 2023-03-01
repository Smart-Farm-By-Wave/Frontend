import { useState } from 'react'

import GraphModal from './GraphModal'
import styles from './Info.module.css'
import tempIcon from '../assets/temp.png'
import humidIcon from '../assets/humid.png'
import rainfallIcon from '../assets/rainfall.png'
import graphIcon from '../assets/graphIcon.png'

function Info({ type, value }) {
  const [isOpen, setIsOpen] = useState(false)

  const typeMatch = (type) => {
    const category = {
      temp: 'Temperature',
      humid: 'Air Humidity',
      rainfall: 'Rainfall',
    }
    return category[type]
  }
  const iconMatch = (type) => {
    const icon = {
      temp: tempIcon,
      humid: humidIcon,
      rainfall: rainfallIcon,
    }
    return icon[type]
  }
  return (
    <div className={styles.infoContainer}>
      <img src={iconMatch(type)} className={styles.icon} />
      <div>{typeMatch(type)}</div>
      <div>
        {value}
        <span>{type === 'temp' ? '°C' : '%'}</span>
      </div>
      <div className={styles.graphButton} onClick={() => setIsOpen(true)}>
        <span>
          <img src={graphIcon} className={styles.graphIcon} />
        </span>
        View Graph
      </div>
      <GraphModal isOpenModal={isOpen} setIsOpenModal={setIsOpen} />
    </div>
  )
}

export default Info
