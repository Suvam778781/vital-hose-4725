import React, { useState } from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Input,Button,HStack,Stack,FormControl,FormLabel,Spinner,useToast, Box} from "@chakra-ui/react"
import { Navigate } from 'react-router';
const firebaseConfig = {
    apiKey: "AIzaSyBG-3TqMxHdc_Mjlhqa2w3JnBmrDgkONB0",
    authDomain: "otp-prdb-authentication.firebaseapp.com",
    projectId: "otp-prdb-authentication",
    storageBucket: "otp-prdb-authentication.appspot.com",
    messagingSenderId: "946617291073",
    appId: "1:946617291073:web:72236126f867f8838311c0",
    measurementId: "G-8KNPTFHYM0",
  };
  firebase.initializeApp(firebaseConfig);
function UserLogin() {
const [loading,setLoading]=useState(false);
const [verificationId,setVerificationId]=useState("");
const [phoneNumber,setPhoneNumber]=useState("+91")
const [code,setCode]=useState("");
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [successLogin,setSuccesLogin]=useState(false)
const toast=useToast();
const HandleSubmitUser=()=>{
const payload={email,name,phoneNumber}

// here post request will be make 
toast({
  title: "Login Succesfully!",
  status: "success",
  duration: 3000,
  isClosable: true,
});
setSuccesLogin(true);
}
    const HandleSendCode = () => {
      if(name&&email){
        setLoading(true);
        const phoneProvider = new firebase.auth.PhoneAuthProvider();
        phoneProvider
          .verifyPhoneNumber(
            phoneNumber,
            new firebase.auth.RecaptchaVerifier("recaptcha-container")
          )
          .then((id) => {
            setLoading(false);
            setVerificationId(id);
            toast({
              title: "Verification code sent!",
              status: "success",
              duration: 3000,
              isClosable: true,
            });
            
          })
          .catch((error) => {
            setLoading(false);
            toast({
              title: "Error sending verification code",
              description: error.message,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          });}
          else {
            setLoading(false)
            toast({
              title: "Error sending verification code",
              description: "Please Enter All Details!",
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          }
      };
      const HandleVerifyCode = () => {
        const credential = firebase.auth.PhoneAuthProvider.credential(
          verificationId,
          code
        );
        firebase
          .auth()
          .signInWithCredential(credential)
          .then(() => {

            HandleSubmitUser()
          })
          .catch((error) => {
            toast({
              title: "Error logging in",
              description: error.message,
              status: "error",
              duration: 3000,
              isClosable: true,
            });
          });
      };
      if (successLogin){
      return < Navigate to="/instruction"/>
      }
  return (
           <div>
          <Stack m="auto" spacing="4" border={"2px solid #df8636"} borderRadius="2" p="7" shadow={"md"}>
            <FormControl>
            <FormLabel>Name</FormLabel>
            <Input size="lg" 
            fontFamily="cursive" 
            border="2px solid green"   
            placeholder='Name..'
            borderRadius="5px"
            type={"text"} 
            value={name}  
            onChange={(e)=>setName(e.target.value)}
            />
            </FormControl>
            <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
            size="lg" 
            fontFamily="cursive" 
            border="2px solid green" 
             placeholder='Email..' 
             type={"email"} 
             borderRadius="5px"
             value={email} 
             onChange={(e)=>setEmail(e.target.value)}
             />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone number</FormLabel>
              <Input
              size="lg" 
              fontFamily="cursive" 
              border="2px solid green" 
              borderRadius="5px"
              type="phone"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>
            <Button 
            borderRadius="8px" 
            w="50%"
            p="25px" 
            fontFamily="cursive"
            backgroundColor="#df8636"
            onClick={HandleSendCode}
            >
              {loading ? <Spinner /> : "Send code"}
            </Button>
            {verificationId && (
              <>
                {/* <FormControl id="code"> */}
                <FormLabel>Verification code</FormLabel>
                <HStack>
                  <Input
                    type="alphanumeric"
                    // otp
                    onChange={(e) => setCode(e.target.value)}
                    value={code}
                    defaultValue="+91"
                  />
                </HStack>
                {/* </FormControl> */}
                <Button onClick={HandleVerifyCode}>Go</Button>
              </>
            )}
            <Box py="2" style={{margin:"auto",color:"green"}} id="recaptcha-container"></Box>
          </Stack>
      
    </div>
  )
}
export default UserLogin

