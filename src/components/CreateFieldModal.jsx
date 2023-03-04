import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { putData } from '../fetchData'

import styles from './CreateFieldModal.module.css'
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  Form,
} from 'reactstrap'

const MySwal = withReactContent(Swal)

const handleSubmit = (e, toggle, data, number) => {
  e.preventDefault()
  toggle()
  putData(`/field/create/${number}`, data)
  MySwal.fire({
    title: 'Success',
    text: 'This field has been added!',
    icon: 'success',
  })
}

function CreateFieldModal({ number, isOpenModal, setIsOpenModal }) {
  const [fieldData, setFieldData] = useState({
    plantName: '',
    byWho: '',
  })

  const toggle = () => setIsOpenModal(!isOpenModal)

  return (
    <Modal isOpen={isOpenModal} toggle={toggle} centered={true}>
      <ModalHeader toggle={toggle}>Add Field</ModalHeader>
      <Form onSubmit={(e) => handleSubmit(e, toggle, fieldData, number)}>
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
          <Button color="primary" type="submit">
            Add
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Form>
    </Modal>
  )
}

export default CreateFieldModal
