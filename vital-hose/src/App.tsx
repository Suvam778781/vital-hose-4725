import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

// import Timmer from "./Components/timmer/Timmer";
import VideoQuizGame from './Components/VideoQuizGame'

import MainRoutes from './Routes/MainRoutes'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >

      <VideoQuizGame/>

      <MainRoutes />

    </div>
  )
}
export default App
