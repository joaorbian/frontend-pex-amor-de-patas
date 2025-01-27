
import './App.css'
// reaproveitamento de estrutura

import { Outlet } from 'react-router-dom'

//importação compnente de navbar
import Navbar from './components/Navbar'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App
