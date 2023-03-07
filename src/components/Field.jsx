// Library
import { useEffect, useState } from 'react'
import classNames from 'classnames'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import axios from 'axios'

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
import addIcon from '../assets/add.png'
import CreateFieldModal from './CreateFieldModal'

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

const handleEditName = (currentName, num) => {
  MySwal.fire({
    title: 'Change owner name',
    input: 'text',
    inputLabel: 'Owner name',
    inputValue: currentName,
    confirmButtonText: 'Save changes',
    showCancelButton: true,
    showLoaderOnConfirm: true,
    preConfirm: async (name) => {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/field/update/${num}`,
          { byWho: name }
        )
      } catch (error) {
        console.error(error)
      }
    },
    inputValidator: (value) => {
      if (!value) {
        return "Owner name can't be left blank!"
      }
      if (value.length > 15) {
        return 'Owner name must be 15 characters or less!'
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

const handleDeleteField = (num) => {
  MySwal.fire({
    title: 'Do you want to delete this field?',
    icon: 'question',
    confirmButtonText: 'Delete',
    confirmButtonColor: '#fa5252',
    showCancelButton: true,
    showLoaderOnConfirm: true,
    preConfirm: async () => {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/field/remove/${num}`
        )
      } catch (error) {
        console.error(error)
      }
    },
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

function Field({ number }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenModalCreate, setIsOpenModalCreate] = useState(false)
  const [soilMoisture, setSoilMoisture] = useState({ moisture: 0 })
  const [fieldInfo, setFieldInfo] = useState({
    isUsing: false,
    plantName: '',
    byWho: '',
  })
  useEffect(() => {
    const getData = async (num) => {
      try {
        const res1 = await axios.get(
          `http://localhost:3000/api/field/detail/${num}`
        )
        setFieldInfo(res1.data)
        if (res1.data.isUsing) {
          try {
            const res2 = await axios.get(
              `http://localhost:3000/api/field/moisture/${num}`
            )
            setSoilMoisture(res2.data)
          } catch (error) {
            console.error(error)
          }
        }
      } catch (error) {
        console.error(error)
      }
    }

    const interval = setInterval(() => {
      getData(number)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (fieldInfo.isUsing) {
    return (
      <div className={styles.fieldContainer}>
        <div className={styles.headerContainer}>
          <div className={styles.plantName}>
            {matchPlant(fieldInfo.plantName)}
          </div>
          <div
            className={classNames(styles.button, styles.edit)}
            onClick={() => handleEditName(fieldInfo.byWho, number)}
          >
            <img src={editIcon} className={styles.buttonIcon} />
          </div>
          <div
            className={classNames(styles.button, styles.delete)}
            onClick={() => handleDeleteField(number)}
          >
            <img src={deleteIcon} className={styles.buttonIcon} />
          </div>
        </div>
        <div className={styles.ownerName}>by {fieldInfo.byWho}</div>
        <img
          src={matchPlant(fieldInfo.plantName, 'pic')}
          className={styles.icon}
        />
        <div className={styles.subContainer}>
          <div className={styles.label}>Soil Moisture</div>
          <div className={styles.value}>
            {Math.round(soilMoisture.moisture)}
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
          dataType={'soilMoisture'}
          fieldNumber={number}
          isOpenModal={isOpen}
          setIsOpenModal={setIsOpen}
          graphName={`${matchPlant(fieldInfo.plantName)}'s Soil Moisture Graph`}
        />
      </div>
    )
  } else {
    return (
      <div className={styles.blankContainer}>
        <div
          className={styles.addButton}
          onClick={() => setIsOpenModalCreate(true)}
        >
          <img src={addIcon} className={styles.addIcon} />
        </div>
        <CreateFieldModal
          number={number}
          isOpenModal={isOpenModalCreate}
          setIsOpenModal={setIsOpenModalCreate}
        />
      </div>
    )
  }
}

export default Field
