import FarmField from '../components/FarmField'
import MainInfoCard from '../components/MainInfoCard'
import Navbar from '../components/Navbar'
import SecondInfoCard from '../components/SecondInfoCard'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>
      <Navbar />
      <div className={styles.dashboardContainer}>
        <div className={styles.dashboard}>
          <MainInfoCard />
          <SecondInfoCard />
          <FarmField />
        </div>
      </div>
    </>
  )
}

export default HomePage
