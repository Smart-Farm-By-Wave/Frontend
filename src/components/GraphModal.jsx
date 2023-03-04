import { useEffect, useState } from 'react'
import axios from 'axios'

import { Modal, ModalHeader, ModalBody, Spinner } from 'reactstrap'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import styles from './GraphModal.module.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const createRequestPath = (dataType, buttonState, field) => {
  let time
  if (buttonState.button1) {
    time = 'hour'
  } else if (buttonState.button2) {
    time = 'day'
  } else {
    time = 'week'
  }
  let requestPath
  if (field) {
    requestPath = `/graph?data=${dataType}&time=${time}&field=${field}`
  } else {
    requestPath = `/graph?data=${dataType}&time=${time}`
  }
  return requestPath
}

function GraphModal({
  dataType,
  fieldNumber,
  graphName,
  isOpenModal,
  setIsOpenModal,
}) {
  const [isLoading, setIsLoading] = useState(true)
  const [buttonState, setButtonState] = useState({
    button1: false,
    button2: true,
    button3: false,
  })
  const [labels, setLabels] = useState([])
  const [graphData, setGraphData] = useState([])

  useEffect(() => {
    const getData = async (dataType, buttonState, fieldNumber) => {
      try {
        setIsLoading(true)
        console.log(createRequestPath(dataType, buttonState, fieldNumber))
        const response = await axios.get(
          'http://localhost:3000/api' +
            createRequestPath(dataType, buttonState, fieldNumber)
        )
        setLabels(response.data.data.time)
        setGraphData(response.data.data.data)
        // console.log(response.data.time)
        console.log(response.data.data)
        setIsLoading(false)
      } catch (error) {
        console.error(error)
      }
    }
    // const interval = setInterval(() => {

    getData(dataType, buttonState, fieldNumber)

    // }, 1000)
    // return () => clearInterval(interval)
  }, [buttonState])

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: graphData,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  }

  return (
    <Modal
      isOpen={isOpenModal}
      toggle={() => setIsOpenModal(!isOpenModal)}
      centered={true}
      size="lg"
    >
      <ModalHeader
        toggle={() => setIsOpenModal(!isOpenModal)}
        className={styles.header}
      >
        <div className={styles.graphName}>{graphName}</div>
      </ModalHeader>
      <ModalBody>
        <div className={styles.graphContainer}>
          {isLoading ? (
            <Spinner color={'success'} />
          ) : (
            <Line options={options} data={data} />
          )}
        </div>
        <div className={styles.buttonGroup}>
          <div
            className={
              buttonState.button1 ? styles.currentButton : styles.rangeButton
            }
            onClick={() =>
              setButtonState({
                button1: true,
                button2: false,
                button3: false,
              })
            }
          >
            1 hour
          </div>
          <div
            className={
              buttonState.button2 ? styles.currentButton : styles.rangeButton
            }
            onClick={() =>
              setButtonState({
                button1: false,
                button2: true,
                button3: false,
              })
            }
          >
            1 day
          </div>
          <div
            className={
              buttonState.button3 ? styles.currentButton : styles.rangeButton
            }
            onClick={() =>
              setButtonState({
                button1: false,
                button2: false,
                button3: true,
              })
            }
          >
            1 week
          </div>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default GraphModal
