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
  const [formSubmitted, setFormSubmitted] = useState(false); // Track if form has been submitted

  const [establishmentName, setEstablishmentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    if (!agreeToTerms || confirmPassword !== password) {
      // Handle form validation errors
      return;
    }

    const establishmentData = {
      establishmentName,
      email,
      password,
      address,
      phoneNumber,
    };

    setIsLoading(true);

    try {
      const response = await fetch("http://localhost:8000/add-establishment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(establishmentData), // Removed unnecessary wrapping
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const responseData = await response.json();
      console.log(responseData);
      navigate("/registrationsuccessful");
    } catch (error) {
      console.error("Error:", error);
      navigate("/failure");
    } finally {
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
          <Flex direction="column" alignItems="center">
            <Flex direction="row" justifyContent="space-between" mb="4">
              <FormControl mr="3" isRequired>
                <FormLabel>Establishment Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your establishment name"
                  value={establishmentName}
                  onChange={(e) => setEstablishmentName(e.target.value)}
                  style={{ width: "350px" }}
                />
              </FormControl>

              <FormControl ml="3" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{ width: "350px" }}
                />
              </FormControl>
            </Flex>

            <Flex direction="row" justifyContent="space-between" mb="4">
              <FormControl mr="3" isRequired>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  style={{ width: "350px" }}
                />
              </FormControl>

              <FormControl ml="3" isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Confirm your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  style={{ width: "350px" }}
                />
                {formSubmitted && confirmPassword !== password && (
                  <Text color="red">Passwords don't match</Text>
                )}
              </FormControl>
            </Flex>

            <Flex direction="row" justifyContent="space-between" mb="4">
              <FormControl mr="3" isRequired>
                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your establishment address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{ width: "350px" }}
                />
              </FormControl>

              <FormControl ml="3" isRequired>
                <FormLabel>Phone Number</FormLabel>
                <Input
                  type="tel"
                  placeholder="Enter your establishment phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  style={{ width: "350px" }}
                />
              </FormControl>
            </Flex>

            <Center>
              <Checkbox
                isChecked={agreeToTerms}
                onChange={(e) => {
                  setAgreeToTerms(e.target.checked);
                  setShowTermsError(false); // Reset error when checkbox state changes
                }}
                name="agreeToTerms"
                mb="4"
              >
                I agree to the Terms of Service
              </Checkbox>
            </Center>
            {showTermsError && (
              <Center>
                <Text color="red">
                  To continue, you must agree to our Terms of Service.
                </Text>
              </Center>
            )}

            <Center>
              <Button
                type="submit"
                colorScheme="blue"
                mt="4"
                alignSelf="flex-end"
                isLoading={isLoading}
              >
                Sign up
              </Button>
            </Center>
          </Flex>
        </form>

        {isLoading && <LoadingSpinner />}
      </Box>
    </Box>
  );
};

export default ServiceCenterSignup;
