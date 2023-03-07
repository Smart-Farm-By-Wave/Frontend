import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import styles from './CreateFieldModal.module.css'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
  Spinner,
} from 'reactstrap'

import { putData } from '../fetchData'

const MySwal = withReactContent(Swal)

const handleSubmit = (e, toggle, data, number, setIsLoading) => {
  e.preventDefault()
  putData(`/field/create/${number}`, data, setIsLoading, toggle)
}

function CreateFieldModal({ number, isOpenModal, setIsOpenModal }) {
  const [fieldData, setFieldData] = useState({
    plantName: '',
    byWho: '',
  })
  const [isLoading, setIsLoading] = useState(false)

  const toggle = () => setIsOpenModal(!isOpenModal)

  return (
    <Modal isOpen={isOpenModal} toggle={toggle} centered={true}>
      <ModalHeader toggle={toggle}>Add Field</ModalHeader>
      <Form
        onSubmit={(e) =>
          handleSubmit(e, toggle, fieldData, number, setIsLoading)
        }
      >
        <ModalBody>
          <div className={styles.label}>Plant</div>
          <Input
            className="mb-3 mt-2"
            type="select"
            onChange={(e) => {
              setFieldData({ ...fieldData, plantName: e.target.value })
            }}
            defaultValue=""
            required
          >
            <option value={''} disabled>
              Select Plant
            </option>
            <option value={'basil'}>Holy Basil</option>
            <option value={'bean'}>Bean Sprouts</option>
            <option value={'cabbage'}>Chinese Cabbage</option>
            <option value={'spinach'}>Water Convolvulus</option>
          </Input>
          <div className={styles.label}>Owner Name</div>
          <Input
            className="mb-3 mt-2"
            placeholder="Enter owner name"
            onChange={(e) => {
              setFieldData({ ...fieldData, byWho: e.target.value })
            }}
            required
          />
        </ModalBody>
        <ModalFooter>
          {isLoading ? (
            <Button color="primary" type="submit" disabled>
              <Spinner size="sm" />
              <span> Adding...</span>
            </Button>
          ) : (
            <Button color="primary" type="submit">
              Add
            </Button>
          )}{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default CreateFieldModal
