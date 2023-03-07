import axios from 'axios'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export const getData = async (path, setData) => {
  try {
    const response = await axios.get(`http://localhost:3000/api${path}`)
    setData(response.data)
    // console.log(response.data)
  } catch (error) {
    console.error(error.message)
  }
}

export const putData = async (path, data, setIsLoading, toggle) => {
  try {
    setIsLoading(true)
    const response = await axios.put(`http://localhost:3000/api${path}`, data)
    console.log(response)
    MySwal.fire({
      title: 'Success',
      icon: 'success',
    })
    setIsLoading(false)
    toggle()
  } catch (error) {
    console.error(error.message)
  }
}
