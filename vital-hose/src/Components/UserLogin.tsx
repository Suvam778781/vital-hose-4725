import React, { useState } from 'react'
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { Input,Button,HStack,Stack,FormControl,FormLabel,Spinner,useToast, Box} from "@chakra-ui/react"
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
const toast=useToast();
    const HandleSendCode = () => {
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
          });
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
  return (
           <div>
          <Stack m="auto" spacing="4" border={"1px solid #38A169"} borderRadius="2" p="7" shadow={"md"}>
            <FormControl>
            <FormLabel>Name</FormLabel>
            <Input  placeholder='Name..'borderRadius="0" type={"text"} value={name}  onChange={(e)=>setName(e.target.value)}/>
            </FormControl>
            <FormControl>
            <FormLabel>Email</FormLabel>
            <Input placeholder='Email..' type={"email"} borderRadius="0" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone number</FormLabel>
              <Input
                borderRadius={"0"}
                type="phone"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </FormControl>
            <Button borderRadius={"sm"} onClick={HandleSendCode}>
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
                <Button onClick={HandleVerifyCode}>Placed Order</Button>
              </>
            )}
            <Box py="2" style={{margin:"auto",color:"green"}} id="recaptcha-container"></Box>
          </Stack>
      
    </div>
  )
}
export default UserLogin