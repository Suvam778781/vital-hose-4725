import { Button } from "@chakra-ui/button";
import { Checkbox } from "@chakra-ui/checkbox";
import { Image } from "@chakra-ui/image";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import React, { useEffect, useState } from "react";
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
  const [showScore, setShowScore] = useState (false);
  const [score, setScore] = useState(0);
  const toast=useToast()
const HandleSubmitScore=()=>{
  // api integration here
  console.log(score)
  toast({
    title: "Quiz Finished",
    description:`Your Score Is ${score}`,
    status: "success",
    duration: 3000,
    isClosable: true,
  });
  setScore(0)
 setShowScore(true)
}
  return (
    <Box w="100%" p="5"  shadow="md" borderRadius={"1"}>
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
          <Button mt="20px" _focus={{border:"none"}} backgroundColor="green.500" color={"white"} _hover={{border:"1px"}} onClick={()=>{setShowScore(false),setScore(0)}}>Start Again</Button>
          </Box>
        ) : (

          quizData.map((ele,index)=>
          <Box backgroundColor={"yellow.100"} my="20px">
            <Box textAlign={"left"} py="10px">
              <Text color={"white"} fontWeight="500" fontSize={"20px"}>{index+1}-{ele.text}</Text>
            </Box>
          <SingleQuiz score ={score} setScore={setScore}  currentIndex={index}/>
          </Box>
          )
        )
      }
      <Button onClick={HandleSubmitScore}>Submit Quiz</Button>
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
    if (selectedValue === -1 && currentQuestion.answer === currentQuestion.choices[index]) {
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
                size="lg"
              
                _checked={{
                  bg: "green.500",
                  borderColor: "green",
                  color: "white",
                  _before: {
                    display: "block",
                    borderRadius: "50%",
                    bg: "white",
                  },
                }}
              />
            <Text fontWeight={"500"}>{choice}</Text>
          </HStack>
        ))}
      </div>
    </>
  );
};