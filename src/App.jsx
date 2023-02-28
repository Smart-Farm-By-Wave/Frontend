import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import './App.css'
import MainInfoCard from './components/MainInfoCard'
import HomePage from './pages/HomePage'

function App() {
  return (
    <>
      <HomePage />
    </>
  )
}

export default App
