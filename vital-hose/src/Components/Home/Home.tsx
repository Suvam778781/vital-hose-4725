import React,{useEffect,useState} from 'react';
import "./home.css";
import {
  Box,
  Text,
  Input,
  Avatar,
  Button,
  Image,
  Flex
} from "@chakra-ui/react"
import img from "../../assets/read.jpg"
import play from "../../assets/play.gif"
import {Link} from "react-router-dom";
import UserLogin from '../UserLogin';
// import Aos from "aos";
// import "aos/dist/aos.css";

const Home = () => {

  return (
    <Box className="body" m="0" p="0">
     <Text fontSize="90px" fontFamily="cursive" color="#b05b1e" fontWeight="60px">Quiz Mania</Text>
    <Flex flexDirection={["column","column","row","row"]} gap={4} alignItems="center">
      <Box w='80%'>
        <Image src={img} alt="background" height={["60%","70%","80%","100%"]} w="100%" m="auto"/>
      </Box>
      <Box w='100%' backgroundColor="#afafaf">
        <Box m="auto"w={["100%","100%","90%","50%"]}  >
        <Image src="https://cdn2.vectorstock.com/i/1000x1000/16/06quiz-sign-icon-questions-and-answers-game-vector-8871606.jpg" alt="" />
        <Text fontSize="20px" fontFamily="cursive" color="#b05b1e" fontWeight="60px" mb="2.5">Welcome! To Quiz Mania</Text>
        {/* Caling UserLogin component:- */}
        <UserLogin />
        <Link to="/instruction">
        <Avatar src={play} mt="3.5" border="4px solid #b05b1e" size="lg" />
        </Link>
        </Box>
      </Box>
    </Flex>
    </Box>
  )
}

export default Home