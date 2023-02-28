import plantLogo from '../assets/plant.png'
import styles from './Navbar.module.css'

function Navbar() {
  return (
    <div className={styles.navbar}>
      <img src={plantLogo} className={styles.logo} />
      <div className={styles.name}>Smart Farm by Wave</div>
    </div>
  )
}

export default Navbar
