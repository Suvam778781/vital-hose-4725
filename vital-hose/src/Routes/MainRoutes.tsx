import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from '../Components/Home/Home';
import Instruction from '../Components/Instruction/Instruction';
import VideoQuizGame from '../Components/VideoQuizGame';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/instruction" element={<Instruction />} />
        <Route path="/story" element={<VideoQuizGame />} />
    </Routes>
  )
}

export default MainRoutes
