import { Box, Button, CloseButton, IconButton, VStack,HStack, useColorModeValue, useDisclosure, Flex, Heading, Text, Link, Avatar } from '@chakra-ui/react';
import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"
import logo from "../assets/logo.gif"

const Navbar = () => {
    const bg = useColorModeValue("white", "gray.800");
    const mobileNav = useDisclosure();

    const handleLogout = () =>{
      localStorage.removeItem('token')
    }

    return (
      <>
        <Heading
          bg={bg}
          w="full"
          px={{
            base: 2,
            sm: 4,
          }}
          py={4}
          shadow="md"
          // bgGradient='linear(to-r, green.200, pink.500)'
          // backgroundColor="#ea933f"
          backgroundColor="#ddb553"
        >
          <Flex alignItems="center" justifyContent="space-between" mx="auto" >
            <Flex>
              <Link
                href="/"
                title="Choc Home Page"
                display="flex"
                alignItems="center"
              >
                <Avatar src={logo} size="lg" />
              </Link>
              <Text fontSize="40px" fontWeight="medium" ml="5" fontFamily="cursive">
              
              </Text>
            </Flex>
            <HStack display="flex" alignItems="center" spacing={1}>
              <HStack
                spacing={1}
                mr={1}
                color="brand.500"
                display={{
                  base: "none",
                  md: "inline-flex",
                }}
              >
                <Button variant="ghost" bgGradient='linear(to-r, green.200, pink.500)' onClick={handleLogout}>Logout</Button>
              </HStack>
              <Box
                display={{
                  base: "inline-flex",
                  md: "none",
                }}
              >
                <IconButton
                  display={{
                    base: "flex",
                    md: "none",
                  }}
                  aria-label="Open menu"
                  fontSize="20px"
                  color="gray.800"
                  _dark={{
                    color: "inherit",
                  }}
                  variant="ghost"
                  icon={<AiOutlineMenu />}
                  onClick={mobileNav.onOpen}
                />
  
                <VStack
                  pos="absolute"
                  top={0}
                  left={0}
                  right={0}
                  display={mobileNav.isOpen ? "flex" : "none"}
                  flexDirection="column"
                  p={2}
                  pb={4}
                  m={2}
                  bg={bg}
                  spacing={3}
                  rounded="sm"
                  shadow="sm"
                  backgroundColor="#ddb553"
                >
                  <CloseButton
                    aria-label="Close menu"
                    onClick={mobileNav.onClose}
                  />
  
                  <Button w="full" variant="ghost" bgGradient='linear(to-r, green.200, pink.500)' onClick={handleLogout}>
                    Logout
                  </Button>
                </VStack>
              </Box>
            </HStack>
          </Flex>
        </Heading>
      </>
    );
  };

export default Navbar