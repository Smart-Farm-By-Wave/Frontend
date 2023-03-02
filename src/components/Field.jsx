import { useState } from 'react'
import styles from './Field.module.css'
import graphIcon from '../assets/graphicon.png'
import strawberryPic from '../assets/strawberry.png'
import GraphModal from './GraphModal'

function Field({ plantName, moisture }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.plantName}>{plantName}</div>
      <img src={strawberryPic} className={styles.icon} />
      <div className={styles.subContainer}>
        <div className={styles.label}>Soil Moisture</div>
        <div className={styles.value}>
          {moisture}
          <span className={styles.unit}>%</span>
        </div>
      </div>
      <div className={styles.graphButton} onClick={() => setIsOpen(true)}>
        <span>
          <img src={graphIcon} className={styles.graphIcon} />
        </span>
        View Graph
      </div>
      <GraphModal
        isOpenModal={isOpen}
        setIsOpenModal={setIsOpen}
        graphName={`${plantName}'s Moisture Graph`}
      />
    </div>
  )
}

export default Field
