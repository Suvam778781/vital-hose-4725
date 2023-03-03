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
// import Aos from "aos";
// import "aos/dist/aos.css";

const Home = () => {

  const [name,setName]= useState<string>("");
  // useEffect(()=>{
  //   Aos.init({ duration: 3000})
  // },[])

  const handleClick=()=>{
    // console.log(name);
    localStorage.setItem("name",JSON.stringify(name));
  }

  return (
    <Box>
     <Text fontSize="90px" fontFamily="cursive" color="#b05b1e" fontWeight="60px">Quiz Mania</Text>
    <Flex flexDirection={["column","column","row","row"]} gap={4} alignItems="center">
      <Box w='80%'>
        <Image src={img} alt="background" height={["60%","70%","80%","100%"]} w="100%" m="auto"/>
      </Box>
      <Box w='100%' backgroundColor="#afafaf">
        <Box m="auto" w="50%"  >
        <Text fontSize="20px" fontFamily="cursive" color="#b05b1e" fontWeight="60px" mb="2.5">Welcome! To Quiz Mania</Text>
        <Input 
        type="text"
        value={name} 
        placeholder='Enter your Username' 
        size="lg" 
        fontFamily="cursive" 
        border="2px solid green" 
        onChange={(e) => setName(e.target.value)}
        />
       
        <Button 
        mt="30px" 
        p="20px" 
        fontSize="20px"
        fontFamily="cursive"
        backgroundColor="#b05b1e"
        cursor="pointer"
        border="3px solid #4f758c"
        mr="30px"
        onClick={handleClick}
        >Save</Button>
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