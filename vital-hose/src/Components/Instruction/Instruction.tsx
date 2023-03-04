import React, { useEffect } from 'react'
import {
    Box,
    Text,
    Button,
    Flex,
    Avatar
} from "@chakra-ui/react";
import "./instruction.css";
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import story from "../../assets/story.png"
import globe from "../../assets/globe.gif"
import history from "../../assets/history.gif"
import genral from "../../assets/genral.gif"
import book from "../../assets/storybook.gif"
import focus from "../../assets/focus.gif"
import question from "../../assets/question.gif"
import kids from "../../assets/kids.gif"
import student from "../../assets/student.gif"
import star from "../../assets/star.gif"

const Instruction = () => {
  useEffect(()=>{
    Aos.init({ duration: 2000})
  },[])
  return (
    <>
    <Box m="auto" w="100vw" h="auto" backgroundColor="#e38933" className="body" data-aos="zoom-in">
      <Text 
      fontSize={["20px","20px","20px","30px"]} 
      fontFamily="cursive" 
      p="20px" 
      color="black" 
      mb="2.5" 
      backgroundColor="#4c8690"
      >
        <Avatar src={focus} mr="4" />
        Read Instructions carefully before starting game
      </Text>
      <hr style={{width:"60%", margin:"auto",color:"black", marginBottom:"30px"}}/>
      <Flex 
       m="auto"
       w="80%"
       fontStyle="cursive" 
       fontFamily="popins"
       fontSize={["15px","25px","25px","30px"]}
       >
        <ul style={{textAlign:"left",marginLeft:"10px",marginBottom:"100px",lineHeight:"1.8"}}>
            <li>First read the question carefully then try to find the right answer</li>
            <li><img src={story} alt="story" /></li>
            <li>Each Qusetion contains 4 options in which 1 options is correct.</li>
            <li>Each right answer contains 1 marks.</li>
            <li>And for wrong answer there is 0 marks.</li>
            <li>You can select the quiz according to your choice available in app.</li>
            <li>When user started to attempt question then timer start running .</li>
            <li>Timer will be end under certain fixed time..</li>
            <li>Users have to attempt all the question during the limeted period of time.</li>
            <li>Here are some glipmse of quiz section</li>
            <li>Look for better understanding....</li>
        </ul>
        
      </Flex>
      
    </Box>
      <Box backgroundColor="#cfad4c" >
          <Text 
          fontSize="30px" 
          fontFamily="cursive" 
          color="black" 
          mt="2.5" 
          mb="2.5" 
          backgroundColor="#4c8690" 
          p="30px" 
          // borderRadius="5%" 
          >
            <Avatar src={question} mr="3" />
            Select Quiz
            </Text>
          <Flex 
          gap="10px" 
          pb="60px"
          pt="30px" 
          alignItems="center" 
          justifyContent="space-around" 
          flexDirection={["column","column","row","row"]}
          data-aos="zoom-in"
          >
            
            <Link to="/geography">
            <Button className="btn" backgroundColor="#4b8590" size="lg"
             _hover={{color:"white",backgroundColor:"black"}}>
              <Avatar src={globe} size="md" mr="10px" />
              Geography Quiz
              </Button>
            </Link>
            <Link to="/gk">
            <Button className="btn" backgroundColor="#4b8590" size="lg" _hover={{color:"white",backgroundColor:"black"}}>
              <Avatar src={genral} size="md" mr="10px"  />
              General Knowledge Quiz
              </Button>
            </Link>
            <Link to="/history">
            <Button className="btn" backgroundColor="#4b8590" size="lg" _hover={{color:"white",backgroundColor:"black"}}>
              <Avatar src={history} size="md" mr="10px"  />
              History Quiz
              </Button>
            </Link>
            <Link to="/india">
            <Button className="btn" backgroundColor="#4b8590" size="lg" _hover={{color:"white",backgroundColor:"black"}}>
              <Avatar src={book} size="md" mr="10px" />
              India Quiz
              </Button>
            </Link>
            <Link to="/sports">
            <Button className="btn" backgroundColor="#4b8590" size="lg" _hover={{color:"white",backgroundColor:"black"}}>
              <Avatar src={student} size="md" mr="10px" />
              Sports Quiz
              </Button>
            </Link>
          </Flex>
          <Flex  
          gap="10px" 
          pb="60px"
          pt="30px" 
          alignItems="center" 
          justifyContent="space-around" 
          flexDirection={["column","column","row","row"]}
          data-aos="zoom-in">
            <Box display='grid' gap={4}>
            <Text fontSize="20px" color="red.600"><Avatar src={star} size="sm" mr="10px" />Recommended for kids</Text>
            <Link to="/kids">
            <Button className="btn" backgroundColor="#4b8590" size="lg" _hover={{color:"white",backgroundColor:"black"}}>
              <Avatar src={kids} size="md" mr="10px" />
             Kids Quiz
              </Button>
            </Link>
            </Box>
            <Box display="grid" gap={4}>
            <Text fontSize="20px" color="red.600"><Avatar src={star} size="sm"mr="10px" />Recommended for Students</Text>
            <Link to="/student">
            <Button className="btn" backgroundColor="#4b8590" size="lg" _hover={{color:"white",backgroundColor:"black"}}>
              <Avatar src={student} size="md" mr="10px" />
              Student Quiz
              </Button>
            </Link>
            </Box>
            </Flex>
        </Box>
    </>
  )
}

export default Instruction