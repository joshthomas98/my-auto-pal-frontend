import { Box, Center, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

const RegistrationSuccessful = () => {
  return (
    <Box minH="100vh" p="10" bg="gray.100">
      <Center>
        <Box maxW="500px" textAlign="center">
          <Icon as={FaCheckCircle} boxSize={20} color="green.500" mb="4" />{" "}
          {/* Success Icon */}
          <Heading as="h1" size="xl" mb="4">
            Account Successfully Created!
          </Heading>
          <Text fontSize="lg" mt="2">
            Thanks for signing up to MyAutoPal!
          </Text>
          <Text fontSize="lg" mt="2">
            Your account has been successfully created, and you can now explore
            all the features that MyAutoPal has to offer.
          </Text>
          <Button
            colorScheme="blue"
            mt="8"
            onClick={() => navigate("/dashboard")}
          >
            {" "}
            {/* Call-to-Action Button */}
            Go to Dashboard
          </Button>
          <Text fontSize="sm" mt="4">
            Need help? Contact us at support@myautopal.com
          </Text>{" "}
          {/* Contact Information */}
        </Box>
      </Center>
    </Box>
  );
};

export default RegistrationSuccessful;
