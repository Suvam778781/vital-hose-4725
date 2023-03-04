import { Button } from "@chakra-ui/button";
import { Box, HStack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Radio } from "@chakra-ui/radio";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { useBreakpoint } from "@chakra-ui/media-query";
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
  useEffect(()=>{
AOS.init()
  },[])
const HandleSubmitScore=()=>{
  // api integration here
// let payload={...user,score:score}
  // axios.patch(`https://doubtful-wasp-cowboy-boots.cyclic.app/products/update/${user._id}`,payload)
  
  console.log(score)
  toast({
    title: "Quiz Finished",
    description:`Your Score Is ${score}`,
    status: "success",
    duration: 3000,
    isClosable: true,
  });
 setShowScore(true)
}
  return (
    <Box backgroundColor="#afafaf" overflow={"hidden"} data-aos="fade-up" w="100%" p="5"  shadow="md" borderRadius={"1"}>
      {showScore===false&&
      <div style={{ width: "100%", border: "4px solid", borderRadius: "6px" }}>
        <ReactPlayer
          width={"100%"}
          url="https://www.youtube.com/watch?v=JaVczFfoPkg"
          controls
        />
      </div>}
      <div>
        {showScore ? (
          <Box >
          <Text
            backgroundColor={"green.500"}
            p="2"
            mt="100px"
            shadow={"md"}
            borderRadius="6px"
            color={"white"}
            fontSize="20px"
            fontWeight={"semibold"}
          >
            You scored {score} out of {quizData.length}
          </Text>
          <Button mt="200px" mb="30px" _focus={{border:"none"}} backgroundColor="green.500" color={"white"} _hover={{border:"1px"}} onClick={()=>{setShowScore(false),setScore(0)}}>Start Again</Button>
          <RankingSection/>
          </Box>
        ) : (

          quizData.map((ele,index)=>
          <Box  my="20px">
            <Box textAlign={"left"} py="10px">
              <Text color={"white"} fontWeight="500" fontSize={"20px"}>{index+1}-{ele.text}</Text>
            </Box>
          <SingleQuiz score ={score} setScore={setScore}  currentIndex={index}/>
          </Box>
          )
        )
      }
      {showScore===false&&
      <Button onClick={HandleSubmitScore}>Submit Quiz</Button>}
      </div>
    </Box>
  );
};
export default VideoQuizGame;
const SingleQuiz = (props: any) => {
  const [selectedValue, setSelectedValue] = useState(-1);
  let obj:any={}
  const handleAnswerOptionClick = (index: number) => {
    setSelectedValue(index);
    const currentQuestion = quizData[props.currentIndex];
    if (selectedValue === -1 && currentQuestion.answer === currentQuestion.choices[index]) {
      props.setScore((score: number) => score + 1);
    }
  };
  useEffect(()=>{
    AOS.init()
      },[])
  return (
    <>
      <Box backgroundColor="#afafaf" shadow="md" data-aos="zoom-out-up" p="2">
        {quizData[props.currentIndex].choices.map((choice, index) => (
          <HStack
          key={index}
          data-aos="fade-up"
          data-aos-delay={index * 200}
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
            spacing={2}
            color="green.9  00"
            w="20%"
            onClick={() => handleAnswerOptionClick(index)}
          >
            <Radio
                border={"3px solid"}
                value="1"
                borderRadius="50%"
                isChecked={selectedValue === index}
                size="lg"
                _checked={{
                  borderColor: "#b05b1e",
                  color: "white",
                  backgroundColor:"white",
                  _before: {
                    display: "block",
                    borderRadius: "50%",
                    bg: "white",
                  },
                  border:"5px solid #38A169"
                }}
              />
            <Text fontWeight={"500"}>{choice}</Text>
          </HStack>
        ))}
      </Box>
    </>
  );
};
// const HandleLogin=()=>{
//   try{
//      let res=axios.post(`url`,userData)
//      toast({
//       title: "Login Succesfully",
//       description:`Your Have Login Succesfully`,
//       status: "success",
//       duration: 3000,
//       isClosable: true,
//     });
//     localStorage.setItem("user",userData)
//   }
//   catch{
// Toast({
//     title: "Login Failed",
//     description:`Something Went Wrong Please Refresh And Login Again.`,
//     status: "success",
//     duration: 3000,
//     isClosable: true,
//   });
//   }
// }


type UserData = {
  name: string;
  email: string;
  score: number;
  mobile:String
};

const AllUser:UserData[]=[

{
  name:"suvam panda",
  score:2,
  mobile:"+917008369373",
  email:"panda@gmail.com"
},
{
  name:"saku panda",
  score:5,
  mobile:"+917008369373",
  email:"suvam@gmail.com"
},
{
  name:"panda",
  score:8,
  mobile:"+917008369373",
  email:"suvampandar@gmail.com"
},
{
  name:"panda",
  score:8,
  mobile:"+917008369373",
  email:"suvampandar@gmail.com"
},{
  name:"panda",
  score:8,
  mobile:"+917008369373",
  email:"suvampandar@gmail.com"
},{
  name:"panda",
  score:8,
  mobile:"+917008369373",
  email:"suvampandar@gmail.com"
},{
  name:"panda",
  score:8,
  mobile:"+917008369373",
  email:"suvampandar@gmail.com"
},{
  name:"panda",
  score:8,
  mobile:"+917008369373",
  email:"suvampandar@gmail.com"
}

]

function RankingSection() {
  const [userData, setUserData] = useState<UserData[]>([]);
  const breakvalue=useBreakpoint()
  useEffect(() => {
      setUserData(AllUser);
    AOS.init();
  }, []);
  const sortedUserData = userData.sort((a, b) => b.score - a.score);

  return (
    <Box overflowY={"scroll"}
      id="scrollbar"
      minHeight="100px"
      maxHeight={"310px"}
      boxShadow="lg"
      borderRadius="md"
      p={0}
      bg="white"
      _hover={{ boxShadow: "xl" }}
    >
      <Table  variant="simple">
        <Thead position={"sticky"} justifyContent="space-between" top="0" zIndex={"20"} backgroundColor="green.500">
          <Tr>
            <Th>Rank</Th>
            <Th>User Name</Th>
            <Th>Email</Th>
            <Th  visibility={{base:"hidden",sm:"visible",md:"visible",xl:"visible","2xl":"visible"}}>Score</Th>
          </Tr>
        </Thead>
        <Tbody data-aos="fade-up">
          {sortedUserData.map((user, index) => (
            <Tr
              key={index}
            >
              <Td fontSize={"14px"}>{index+1}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td visibility={{base:"hidden",sm:"visible",md:"visible",xl:"visible","2xl":"visible"}}>{user.score}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export {RankingSection};

// const Deal1 = () => {
//   const [time, setTime] = useState("");
//   var countDownDate = new Date("Jan 5, 2024 1:37:25").getTime();
//   // Update the count down every 1 second
//   var x = setInterval(function () {
//     // Get today's date and time
//     var now = new Date().getTime();

//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;

//     // Time calculations for days, hours, minutes and seconds
//     var hours = Math.floor(
//       (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
//     );
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the element with id="demo"

//     setTime(`${hours}:${minutes}:${seconds}`);
//     // If the count down is finished, write some text
//     if (distance < 0) {
//       clearInterval(x);
      
//     }
//   }, 1000);

//   return <>{time}</>;
// };
// export {Deal1};
