import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MainRoutes from './Routes/MainRoutes'
import VideoQuizGame from './Components/VideoQuizGame'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App" >
      <MainRoutes />
      <VideoQuizGame/>  
    </div>
  )
}
export default App