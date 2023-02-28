import Info from './Info'
import styles from './MainInfoCard.module.css'

function MainInfoCard() {
  return (
    <div className={styles.mainContainer}>
      <Info type={'temp'} value={30} />
    </div>
  )
}

export default MainInfoCard
