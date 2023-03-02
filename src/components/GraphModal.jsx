import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import styles from './GraphModal.module.css'
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

function GraphModal({ graphName, isOpenModal, setIsOpenModal }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      // title: {
      //   display: true,
      //   text: 'Chart.js Line Chart',
      // },
    },
  }

  const labels = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [2, 3, 4, 5, 6, 10, 50],
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
          <Line options={options} data={data} />
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.rangeButton}>1 hour</div>
          <div className={styles.rangeButton}>1 day</div>
          <div className={styles.rangeButton}>1 week</div>
        </div>
      </ModalBody>
    </Modal>
  )
}

export default GraphModal
