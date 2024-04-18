import React, { useState } from "react";
import {
  Box,
  Heading,
  Center,
  FormControl,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Text,
  Flex,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../components/LoadingSpinner";

const ServiceCenterSignup = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [establishmentName, setEstablishmentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    switch (name) {
      case "establishmentName":
        setEstablishmentName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phoneNumber":
        setPhoneNumber(value);
        break;
      case "agreeToTerms":
        setAgreeToTerms(checked);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      const data = {
        establishmentName,
        email,
        password,
        confirmPassword,
        address,
        phoneNumber,
      };

      setIsLoading(true);

      const response = await fetch("http://localhost:8000/vehicle-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse response data
      const responseData = await response.json();

      console.log(responseData);

      // Stop loading spinner
      setIsLoading(false);
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
      // Stop loading spinner
      setIsLoading(false);
    }
  };

  return (
    <Box minH="100vh" p="10">
      <Center>
        <Heading>Sign up your Service Center to MyAutoPal</Heading>
      </Center>

      <Box mt="8">
        <form onSubmit={handleSubmit}>
          <Center>
            <Flex direction="column">
              <Flex direction="row" justifyContent="space-between" mb="4">
                <FormControl flex="1" mr="2" isRequired>
                  <FormLabel>Establishment Name</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your establishment name"
                    name="establishmentName"
                    value={establishmentName}
                    onChange={handleChange}
                    maxW={500}
                  />
                </FormControl>

                <FormControl flex="1" ml="2" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    maxW={500}
                  />
                </FormControl>
              </Flex>

              <Flex direction="row" justifyContent="space-between" mb="4">
                <FormControl flex="1" mr="2" isRequired>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    maxW={500}
                  />
                </FormControl>

                <FormControl flex="1" ml="2" isRequired>
                  <FormLabel>Confirm Password</FormLabel>
                  {confirmPassword !== password && (
                    <Text color="red">Passwords don't match</Text>
                  )}
                  <Input
                    type="password"
                    placeholder="Confirm your password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleChange}
                    maxW={500}
                  />
                </FormControl>
              </Flex>

              <Flex direction="row" justifyContent="space-between" mb="4">
                <FormControl id="address" mr="2" isRequired mb="4">
                  <FormLabel>Address</FormLabel>
                  <Input
                    type="text"
                    placeholder="Enter your establishment address"
                    name="address"
                    value={address}
                    onChange={handleChange}
                    maxW={500}
                  />
                </FormControl>

                <FormControl id="phoneNumber" ml="2" mb="4" isRequired>
                  <FormLabel>Phone Number</FormLabel>
                  <Input
                    type="tel"
                    placeholder="Enter your establishment phone number"
                    name="phoneNumber"
                    value={phoneNumber}
                    onChange={handleChange}
                    maxW={500}
                  />
                </FormControl>
              </Flex>

              <Center>
                <Checkbox
                  defaultChecked={agreeToTerms}
                  onChange={handleChange}
                  name="agreeToTerms"
                  mb="4"
                >
                  I agree to the Terms of Service
                </Checkbox>
              </Center>

              <Center>
                <Button
                  type="submit"
                  colorScheme="blue"
                  mt="6"
                  alignSelf="flex-end"
                >
                  Sign up
                </Button>
              </Center>
            </Flex>
          </Center>
        </form>

        {isLoading && <LoadingSpinner />}
      </Box>
    </Box>
  );
};

export default ServiceCenterSignup;
