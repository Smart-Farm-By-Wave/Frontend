import axios from 'axios'

export const getData = async (path, setData) => {
  try {
    const response = await axios.get(`http://localhost:3000/api${path}`)
    setData(response.data)
    // console.log(response.data)
  } catch (error) {
    console.error(error.message)
  }
}

export const putData = async (path, data) => {
  try {
    const response = await axios.put(`http://localhost:3000/api${path}`, data)
    // console.log(response)
  } catch (error) {
    console.error(error.message)
  }
}
