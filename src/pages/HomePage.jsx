import MainInfoCard from '../components/MainInfoCard'
import Navbar from '../components/Navbar'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>
      <Navbar />
      <div className={styles.dashboard}>
        <MainInfoCard />
      </div>
    </>
  )
}

export default HomePage
