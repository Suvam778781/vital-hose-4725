import {useEffect} from 'react';
import "./home.css";
import {
  Box,
  Text,
  Avatar,
  Image,
  Flex,
} from "@chakra-ui/react"
import img from "../../assets/read.jpg"
import play from "../../assets/play.gif"
import {Link} from "react-router-dom";
import UserLogin from '../UserLogin';
import Aos from "aos";
import "aos/dist/aos.css";
import mark from "../../assets/mark.gif";
import rocket from "../../assets/rocket.gif"

const Home = () => {

  useEffect(()=>{
    Aos.init({ duration: 2000})
  },[])

  return (
    <Box className="body" m="0" p="0">
     <Text fontSize="90px" fontFamily="cursive" color="#b05b1e" fontWeight="60px">
      <Avatar src={mark} mt="18px" size="lg" />
      Quiz Mania
      </Text>
    <Flex flexDirection={["column","column","row","row"]} gap={4} alignItems="center" >
      <Box w='80%' data-aos="flip-right">
        <Image src={img} alt="background" height={["60%","70%","80%","100%"]} w="100%" m="auto"  />
      </Box>
      <Box w='100%' backgroundColor="#afafaf">
        <Box m="auto"w={["100%","100%","90%","50%"]}  data-aos="zoom-in-down" >
        <Avatar src={rocket} size="lg" mr="20px" mb="3"/>
        <Text fontSize="20px" fontFamily="cursive" color="#b05b1e" fontWeight="60px" mb="2.5">
          Welcome! To Quiz Mania
          </Text>
        {/* Caling UserLogin component:- */}
        <UserLogin />
        </Box>
      </Box>
    </Flex>
    </Box>
  )
}

export default Home