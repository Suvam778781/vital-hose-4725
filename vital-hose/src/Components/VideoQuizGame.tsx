import { Button } from "@chakra-ui/button";
import { Badge, Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { useToast } from "@chakra-ui/toast";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import AOS from "aos";
import "aos/dist/aos.css";
import { Radio } from "@chakra-ui/radio";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/table";
import { useBreakpoint } from "@chakra-ui/media-query";
import { Navigate, useNavigate, useParams } from "react-router";
import { async } from "@firebase/util";
import axios from "axios";
import { Spinner } from "@chakra-ui/spinner";
interface Question {
  id: number;
  question: string;
  answer: string;
  options: string[];
}

const VideoQuizGame = () => {
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const toast = useToast();
  const [quizData, setQuizData] = useState<Question[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const params = useParams();
  const navigate=useNavigate()
  console.log(params);
  useEffect(() => {
    AOS.init();
  }, []);

  const HandleSubmitScore = async () => {
    // api integration here
    let user: any = localStorage.getItem("userdata");
    user = JSON.parse(user);
    let payload = { ...user, score: score };
    try {
      await axios.patch(
        `https://dead-ruby-bison-ring.cyclic.app/users/user/${user._id}`,
        payload
      );
      toast({
        title: "Quiz Finished",
        description: `Your Score Is ${score}`,
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      setShowScore(true);
    } catch (err) {
      toast({
        title: "Quiz Finished",
        description: `Score Is Not Updated ${score}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };
  const GetQuizdata = async () => {
    try {
      setLoading(true);
      let data = await axios(
        `https://good-jade-cow-cape.cyclic.app/${params.category}`
      );
      setLoading(false);
      setQuizData(data.data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };
  useEffect(() => {
    GetQuizdata();
  }, []);
  return (
    <>
      {!showScore && (
        <Badge
          bgColor={"green.500"}
          position="sticky"
          top="0"
          alignItems={"center"}
          pt="10px"
          zIndex={"2"}
          h="60px"
          w="100%"
          mb="100px"
          margin={"auto"}
        >
          <Timer initialTime={300} setShowScore={setShowScore} />
        </Badge>
      )}
      <Box
        backgroundColor="#afafaf"
        overflow={"hidden"}
        data-aos="fade-up"
        w="100%"
        p="5"
        shadow="md"
        borderRadius={"1"}
      >
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
                fontSize="20px"
                fontWeight={"semibold"}
              >
                You scored {score} out of {quizData.length}
              </Text>

              <Flex justifyContent={"space-around"}>
              <Button
                mt="200px"
                mb="30px"
                _focus={{ border: "none" }}
                backgroundColor="green.500"
                color={"white"}
                _hover={{ border: "1px" }}
                onClick={() => {
                  setShowScore(false), setScore(0);
                }}
              >
                Start Again
              </Button>
              <Button
              onClick={()=>navigate("/instruction")}
                mt="200px"
                mb="30px"
                _focus={{ border: "none" }}
                backgroundColor="green.500"
                color={"white"}
                _hover={{ border: "1px" }}
               
              >
                Exit
              </Button>
              
              </Flex>
              <RankingSection />
            </Box>
          ) : (
            quizData.map((ele: any, index: number) => (
              <Box my="20px">
                <Box textAlign={"left"} py="10px">
                  <Text color={"white"} fontWeight="500" fontSize={"20px"}>
                    {index + 1}-{ele.question}
                  </Text>
                </Box>
                <SingleQuiz
                  score={score}
                  ele={quizData}
                  setScore={setScore}
                  currentIndex={index}
                />
              </Box>
            ))
          )}
          {loading && (
            <Spinner my="200px" justifyContent={"center"} size={"xl"} />
          )}
          {(showScore === false&&!loading )&& (
            <Button m="auto" display={"flex"} onClick={HandleSubmitScore}>
              Submit Quiz
            </Button>
          )}
        </div>
      </Box>
    </>
  );
};
export default VideoQuizGame;
const SingleQuiz = (props: any) => {
  const [selectedValue, setSelectedValue] = useState(-1);
  let obj: any = {};
  const handleAnswerOptionClick = (index: number) => {
    setSelectedValue(index);
    const currentQuestion = props.ele[props.currentIndex];
    if (
      selectedValue === -1 &&
      currentQuestion.answer === currentQuestion.options[index]
    ) {
      props.setScore((score: number) => score + 1);
    }
  };  
  return (
    <>
      <Box backgroundColor="#afafaf" shadow="md" data-aos="zoom-out-up" p="2">
        {props.ele[props.currentIndex].options.map(
          (choice: any, index: number) => (
            <HStack
              key={index}
           
          
           
              spacing={2}
              color="green.9  00"
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
                  backgroundColor: "white",
                  _before: {
                    display: "block",
                    borderRadius: "50%",
                    bg: "white",
                  },
                  border: "5px solid #38A169",
                }}
              />
              <Text fontWeight={"500"}>{choice}</Text>
            </HStack>
          )
        )}
      </Box>
    </>
  );
};

type UserData = {
  name: string;
  email: string;
  score: number;
  mobile: String;
};
function RankingSection() {
  const [userData, setUserData] = useState<UserData[]>([]);
  const breakvalue = useBreakpoint();
  const GetAlluser=async()=>{
    try{
const alluserdata=await axios(`https://dead-ruby-bison-ring.cyclic.app/users`)
setUserData(alluserdata.data)
    }
    catch(err){

      console.log(err)
    }
  }
  useEffect(() => {
    GetAlluser()
    AOS.init();
  }, []);
  const sortedUserData = userData.sort((a, b) => b.score - a.score);

  return (
    <Box
      overflowY={"scroll"}
      id="scrollbar"
      minHeight="100px"
      maxHeight={"310px"}
      boxShadow="lg"
      borderRadius="md"
      p={0}
      bg="white"
      _hover={{ boxShadow: "xl" }}
    >
      <Table variant="simple">
        <Thead
          position={"sticky"}
          justifyContent="space-between"
          top="0"
          zIndex={"20"}
          backgroundColor="green.500"
        >
          <Tr>
            <Th>Rank</Th>
            <Th>User Name</Th>
            <Th>Email</Th>
            <Th
              visibility={{
                base: "hidden",
                sm: "visible",
                md: "visible",
                xl: "visible",
                "2xl": "visible",
              }}
            >
              Score
            </Th>
          </Tr>
        </Thead>
        <Tbody data-aos="fade-up">
          {sortedUserData.map((user, index) => (
            <Tr key={index}>
              <Td fontSize={"14px"}>{index + 1}</Td>
              <Td>{user.name}</Td>
              <Td>{user.email}</Td>
              <Td
                visibility={{
                  base: "hidden",
                  sm: "visible",
                  md: "visible",
                  xl: "visible",
                  "2xl": "visible",
                }}
              >
                {user.score}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export { RankingSection };
function Timer({
  initialTime,
  setShowScore,
}: {
  initialTime: number;
  setShowScore: any;
}): JSX.Element {
  const navigate = useNavigate();
  const [timeRemaining, setTimeRemaining] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  if (timeRemaining <= 0) {
    setShowScore(true);
  }

  return (
    <Box color={"white"} fontSize="20px" fontWeight={"semibold"}>
      Time remaining: {minutes}:{seconds < 10 ? "0" : ""}
      {seconds}
    </Box>
  );
}
