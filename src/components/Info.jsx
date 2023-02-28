import styles from './Info.module.css'
import tempIcon from '../assets/temp.png'
import humidIcon from '../assets/humid.png'
import rainfallIcon from '../assets/humid.png'

function Info({ type, value }) {
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
        <span>°C</span>
      </div>
      <div>View Graph</div>
    </div>
  )
}

export default Info
