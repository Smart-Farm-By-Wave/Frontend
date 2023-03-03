import axios from 'axios'

const fetchData = async (path) => {
  try {
    const { data: response } = await axios.get(
      `http://localhost:3000/api${path}`
    )
    setData(response)
    console.log(response)
  } catch (error) {
    console.error(error.message)
  }
}

export default fetchData
