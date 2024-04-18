import React from "react";
import {
  Box,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Button,
  Link,
  Text,
  Divider,
} from "@chakra-ui/react";

const EstablishmentLogin = () => {
  return (
    <Box bg="gray.100" minH="100vh" py="10">
      <Flex justifyContent="center">
        <Box maxW="xl" w="full">
          <Flex justifyContent="center">
            <Box w="full" maxW="md">
              <Box bg="white" p="8" borderRadius="md" boxShadow="md">
                <Heading as="h1" mb="4" textAlign="center">
                  Login
                </Heading>
                <Text color="gray.600" mb="4" textAlign="center">
                  Sign in to your account
                </Text>
                <InputGroup mb="4">
                  <InputLeftAddon children={<i className="fa fa-user" />} />
                  <Input type="text" placeholder="Username" />
                </InputGroup>
                <InputGroup mb="6">
                  <InputLeftAddon children={<i className="fa fa-lock" />} />
                  <Input type="password" placeholder="Password" />
                </InputGroup>
                <Flex justify="space-between" mb="3">
                  <Button colorScheme="blue" px="4">
                    Login
                  </Button>
                  <Link color="blue.500" mt={3}>
                    Forgot password?
                  </Link>
                </Flex>
              </Box>
              <Divider />
              <Flex mt={3} justify="center">
                <Text mr={2}>New to MyAutoPal?</Text>
                <Link href="/establishmentregister" color="blue.500">
                  Sign up here
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default EstablishmentLogin;
