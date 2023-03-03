import React from 'react'
import {
    Box,
    Text
} from "@chakra-ui/react";

const Instruction = () => {
  return (
    <Box m="auto" w="80vw" h="100vh" border="1px solid red">
      <Text fontSize="30px" fontFamily="cursive" color="black" mt="2.5" mb="2.5">Read Instructions carefully before starting game</Text>
      <hr style={{width:"60%", margin:"auto",color:"black", marginBottom:"30px"}}/>
      <Box m="auto" w="80%" border="1px solid" fontStyle="cursive">
        <ul>
            <li>1.</li>
            <li>2.</li>
            <li>3.</li>
            <li>4.</li>
        </ul>
      </Box>
    </Box>
  )
}

export default Instruction