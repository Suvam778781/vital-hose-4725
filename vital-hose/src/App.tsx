import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import MainRoutes from './Routes/MainRoutes'
import Navbar from "./Components/Navbar"



function App() {

  return (
    <div className="App" >
     <Navbar />
     <MainRoutes />
    </div>
  )
}
export default App