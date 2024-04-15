import React, { useState } from "react";
import {
  Button,
  Input,
  Box,
  Heading,
  Text,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const UserRegEnter = () => {
  const navigate = useNavigate();

  const [registrationNumber, setRegistrationNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleVehicleRegistrationChange = (e) => {
    let value = e.target.value.toUpperCase(); // Convert to uppercase
    value = value.replace(/\s/g, ""); // Remove spaces
    setRegistrationNumber(value);
  };

  const handleGoButtonClick = async () => {
    try {
      // Prepare the data to be sent
      const data = {
        registrationNumber,
      };

      // Start loading spinner
      setIsLoading(true);

      // Send POST request to the backend server
      const response = await fetch("http://localhost:8000/vehicle-info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Check if the response is ok
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Parse response data
      const responseData = await response.json();

      console.log(responseData);

      // Stop loading spinner
      setIsLoading(false);

      // Navigate to the DisplayVehicleDetails page with state
      navigate("/displayvehicledetails", {
        state: { vehicleDetails: responseData },
      });
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
      // Stop loading spinner
      setIsLoading(false);
    }
  };

  return (
    <Box
      minHeight="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      position="relative" // Add position relative to allow absolute positioning of spinner
      overflow="hidden" // Hide overflow to prevent content from extending beyond viewport
    >
      {/* Blur background if loading */}
      {isLoading && (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          backgroundColor="rgba(255, 255, 255, 0.5)"
          backdropFilter="blur(5px)"
          zIndex="1"
        />
      )}

      <Box
        backgroundColor="white"
        p="4"
        borderRadius="lg"
        boxShadow="md"
        maxWidth="400px"
        width="100%"
      >
        <Heading textAlign="center" mb="4">
          Welcome to MyAutoPal
        </Heading>
        <Text mb="4" textAlign="center">
          Looking to check the service history of a vehicle? Please enter the
          vehicle registration below:
        </Text>
        <Input
          placeholder="Enter Vehicle Registration"
          value={registrationNumber}
          onChange={handleVehicleRegistrationChange}
          mb="4"
        />

        <Button colorScheme="blue" width="100%" onClick={handleGoButtonClick}>
          Go
        </Button>

        {/* Center the spinner */}
        {isLoading && (
          <Center
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
            zIndex="2"
          >
            <Spinner
              mt="5"
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          </Center>
        )}
      </Box>
    </Box>
  );
};

export default UserRegEnter;
