import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { Image } from "@chakra-ui/image";
import { Box, HStack, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import ReactPlayer from "react-player";

interface Question {
  id: number;
  text: string;
  answer: string;
  choices: string[];
}
const quizData: Question[] = [
  {
    id: 1,
    text: "What is the capital of France?",
    answer: "Paris",
    choices: ["Paris", "Berlin", "Madrid", "London"],
  },
  {
    id: 2,
    text: "Who painted the Mona Lisa?",
    answer: "Leonardo da Vinci",
    choices: [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Rembrandt",
    ],
  },
  {
    id: 3,
    text: "What is the largest organ in the human body?",
    answer: "Skin",
    choices: ["Liver", "Heart", "Skin", "Kidney"],
  },
];

const VideoQuizGame = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  
const HandleSubmitScore=()=>{
  // api integration here
}
  const HandleDecrease=()=>{
    setCurrentIndex((pre=>pre-1))
  }
  const HandleIncrease=()=>{
    setCurrentIndex((pre=>pre+1))
    if(currentIndex==quizData.length-1){
      setShowScore(true)
    }
  }
  return (
    <Box w="100%" p="5" backgroundColor={"yellow.100"} shadow="md" borderRadius={"1"}>
      <div style={{ width: "100%", border: "4px solid", borderRadius: "6px" }}>
        <ReactPlayer
          width={"100%"}
          url="https://www.youtube.com/watch?v=JaVczFfoPkg"
        />
      </div>
      <div>
        {showScore ? (
          <Box>
          <Text
            backgroundColor={"green.500"}
            p="2"
            mt="100px"
            shadow={"md"}
            borderRadius="6px"
            color={"white"}
          >
            You scored {score} out of {quizData.length}
          </Text>
          <Button mt="20px" _focus={{border:"none"}} backgroundColor="green.500" color={"white"} _hover={{border:"1px"}} onClick={()=>{setCurrentIndex(0),setShowScore(false),setScore(0)}}>Start Again</Button>
          </Box>
        ) : (
          <div>
            <div>
             <div>
                <Box
                  w="100%"
                  justifyContent={"space-between"}
                  m="auto"
                  display="flex"
                  position={"relative"}
                  mt="60px"
                >
                  <Button 
                    backgroundColor={"green.500"}
                    p="0"
                    isDisabled={currentIndex==0}
                    onClick={HandleDecrease}
                    transition={"ease-in-out"}
                    _hover={{ color: "white", border: "1px solid" }}
                  >
                    {" "}
                    <Image

                      w="30px"
                      transform="scaleX(-1)"
                      src="https://cdn.iconscout.com/icon/free/png-256/forward-1767505-1502572.png"
                      alt=""
                    />{" "}
                  </Button>
                  <Button
                    backgroundColor={"green.500"}
                    p="0"
                    onClick={HandleIncrease}
                    transition={"ease-in-out"}
                    _hover={{ color: "white", border: "1px solid" }}
                  >
                    {" "}
                    <Image
                      w="30px"
                      src="https://cdn.iconscout.com/icon/free/png-256/forward-1767505-1502572.png"
                      alt=""
                    />{" "}
                  </Button>
                </Box>
                <span>Question {currentIndex + 1}</span>/{quizData.length}
              </div>
              <div>{quizData[currentIndex].text}</div>
            </div>
          <SingleQuiz score ={score} setScore={setScore}  currentIndex={currentIndex}/>
          </div>
        )}
      </div>
    </Box>
  );
};

export default VideoQuizGame;
const SingleQuiz = (props: any) => {
  const [selectedValue, setSelectedValue] = useState(-1);
  const handleAnswerOptionClick = (index: number) => {
    setSelectedValue(index);
    const currentQuestion = quizData[props.currentIndex];
    if (currentQuestion.answer === currentQuestion.choices[index]) {
      props.setScore((score: number) => score + 1);
    }



  };

  return (
    <>
      <div>
        {quizData[props.currentIndex].choices.map((choice, index) => (
          <HStack
            key={index}
            spacing={2}
            color="green.500"
            onClick={() => handleAnswerOptionClick(index)}
          >
            <Checkbox
              value="1"
              borderRadius="50%"
              isChecked={selectedValue === index}
            />
            <Text>{choice}</Text>
          </HStack>
        ))}
      </div>
    </>
  );
};
