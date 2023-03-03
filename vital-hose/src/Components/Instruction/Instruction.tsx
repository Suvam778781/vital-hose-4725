import React from 'react'
import {
    Box,
    Text,
    Button,
    Flex
} from "@chakra-ui/react";
import "./instruction.css";
import { Link } from 'react-router-dom';

const Instruction = () => {
  return (
    <>
    <Box m="auto" w="80vw" h="auto" backgroundColor="#4c8690" borderRadius="10%" className="body">
      <Text fontSize={["20px","20px","20px","30px"]} fontFamily="cursive" color="black" mt="2.5" mb="2.5" backgroundColor="#4c8690" borderRadius="10%">Read Instructions carefully before starting game</Text>
      <hr style={{width:"60%", margin:"auto",color:"black", marginBottom:"30px"}}/>
      <Flex 
       m="auto"
       w="80%"
       fontStyle="cursive" 
       fontFamily="popins"
       fontSize={["15px","25px","25px","30px"]}
       >
        <ul style={{textAlign:"left",marginLeft:"10px",borderRadius:"5%",marginBottom:"100px"}}>
            <li>First read the question carefully then try to find the right answer</li>
            <li>First see full video available in app and then start for attempting question</li>
            <li>Each right answer contains 1 marks</li>
            <li>And for wrong answer there is 0 marks</li>
            <li>You can select the quiz according to your choice available in app</li>
            <li>When user started to attempt question then timer start running </li>
            <li>Timer will be end under certain fixed time</li>
            <li>Users have to attempt all the question during the limeted period of time</li>
            <li>Here are some glipmse of quiz section</li>
            <li>Look for better understanding....</li>
        </ul>
        
      </Flex>
      
    </Box>
      <Box mt="50px" mb="30px" backgroundColor="#cfad4c" borderRadius="10%">
          <Text 
          fontSize="30px" 
          fontFamily="cursive" 
          color="black" 
          mt="2.5" 
          mb="2.5" 
          backgroundColor="#4c8690" 
          p="30px" 
          borderRadius="5%" 
          >Select Quiz</Text>
          <Flex 
          gap="10px" 
          pb="100px"
          pt="20px" 
          alignItems="center" 
          justifyContent="space-around" 
          flexDirection={["column","column","row","row"]}
          >
            <Link to="/environment">
            <Button className="btn" backgroundColor="#4b8590"
             _hover={{color:"white",backgroundColor:"black"}}>Environment Quiz</Button>
            </Link>
            <Link to="/general">
            <Button className="btn" backgroundColor="#4b8590" _hover={{color:"white",backgroundColor:"black"}}>General Knowledge Quiz</Button>
            </Link>
            <Link to="/history">
            <Button className="btn" backgroundColor="#4b8590" _hover={{color:"white",backgroundColor:"black"}}>History Quiz</Button>
            </Link>
            <Link to="/story">
            <Button className="btn" backgroundColor="#4b8590" _hover={{color:"white",backgroundColor:"black"}}>Story Quiz</Button>
            </Link>
          </Flex>
        </Box>
    </>
  )
}

export default Instruction