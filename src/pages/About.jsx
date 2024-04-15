import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  Flex,
  Button,
  Center,
} from "@chakra-ui/react";

const About = () => {
  return (
    <>
      <Box p="6">
        <Heading as="h1" mb="6" textAlign="center">
          About Us
        </Heading>
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexWrap="wrap"
        >
          <Box flex="1" mr="4" mb="4">
            <Text fontSize="2xl" fontWeight="bold" textAlign="center">
              Welcome to MyAutoPal
            </Text>
            <Text mt="2" textAlign="center">
              MyAutoPal is a leading platform for vehicle service management,
              catering to both car and van owners. We provide convenient access
              to comprehensive service history and maintenance records,
              empowering vehicle owners to stay on top of their maintenance
              schedules and ensure their vehicles remain in optimal condition.
            </Text>
            <Text mt="4" textAlign="center">
              Our platform is designed to be user-friendly and intuitive, making
              it easy for car and van owners to track their vehicle's service
              history, schedule maintenance appointments, and receive important
              alerts and notifications. Whether you own a small car or a large
              commercial van, MyAutoPal is here to simplify your vehicle
              maintenance experience.
            </Text>
            <Center>
              <Button colorScheme="blue" mt="4">
                Get Started
              </Button>
            </Center>
          </Box>
          <Box flex="1">
            <Image
              src="/src/assets/Automotive_EE-Times-Europe_min.webp"
              alt="About Us Image"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default About;
