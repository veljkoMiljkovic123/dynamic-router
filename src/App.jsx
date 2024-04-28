
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import axios from 'axios'
function App() {

  axios.defaults.baseURL='https://dummyjson.com'

  return <div>
      <Navbar />

      <Outlet /> 
    </div>
  
}

export default App
