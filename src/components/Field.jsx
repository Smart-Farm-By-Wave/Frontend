// Library
import { useState } from 'react'
import classNames from 'classnames'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

// CSS
import styles from './Field.module.css'

// Components
import GraphModal from './GraphModal'

// Picture
import graphIcon from '../assets/graphicon.png'
import strawberryPic from '../assets/strawberry.png'
import basilPic from '../assets/basil.png'
import beanPic from '../assets/bean.png'
import cabbagePic from '../assets/cabbage.png'
import spinachPic from '../assets/spinach.png'
import deleteIcon from '../assets/delete.png'
import editIcon from '../assets/edit.png'

const matchPlant = (plantName, type) => {
  const plantPic = {
    basil: basilPic,
    bean: beanPic,
    cabbage: cabbagePic,
    spinach: spinachPic,
    strawberry: strawberryPic,
  }
  const fullPlantName = {
    basil: 'Holy Basil',
    bean: 'Bean Sprouts',
    cabbage: 'Chinese Cabbage',
    spinach: 'Water Convolvulus',
    strawberry: 'Strawberry',
  }
  return type === 'pic' ? plantPic[plantName] : fullPlantName[plantName]
}

const MySwal = withReactContent(Swal)

const handleEditName = () => {
  MySwal.fire({
    title: 'Change owner name',
    input: 'text',
    inputLabel: 'Owner name',
    // inputValue: inputValue,
    confirmButtonText: 'Save changes',
    showCancelButton: true,
    inputValidator: (value) => {
      if (!value) {
        return "Owner name can't be left blank!"
      }
    },
  }).then((result) => {
    if (result.value) {
      // console.log(result.value)
      return MySwal.fire({
        title: 'Success',
        text: 'Owner name has been changed!',
        icon: 'success',
      })
    }
  })
}

const handleDeleteField = () => {
  MySwal.fire({
    title: 'Do you want to delete this field?',
    icon: 'question',
    confirmButtonText: 'Delete',
    confirmButtonColor: '#fa5252',
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      return MySwal.fire({
        title: 'Success',
        text: 'This field has been deleted!',
        icon: 'success',
      })
    }
  })
}

function Field({ isUsing, plantName, byWho, moisture }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.plantName}>{matchPlant(plantName)}</div>
        <div
          className={classNames(styles.button, styles.edit)}
          onClick={handleEditName}
        >
          <img src={editIcon} className={styles.buttonIcon} />
        </div>
        <div
          className={classNames(styles.button, styles.delete)}
          onClick={handleDeleteField}
        >
          <img src={deleteIcon} className={styles.buttonIcon} />
        </div>
      </div>
      <div className={styles.ownerName}>by {byWho}</div>
      <img src={matchPlant(plantName, 'pic')} className={styles.icon} />
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
