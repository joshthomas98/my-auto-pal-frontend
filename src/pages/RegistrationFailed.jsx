import { Box, Center, Heading, Text, Button, Icon } from "@chakra-ui/react";
import { FaExclamationCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const RegistrationFailed = () => {
  return (
    <Box minH="100vh" p="10" bg="gray.100">
      <Center>
        <Box maxW="500px" textAlign="center">
          <Icon as={FaExclamationCircle} boxSize={20} color="red.500" mb="4" />{" "}
          {/* Failure Icon */}
          <Heading as="h1" size="xl" mb="4">
            Account Registration Failed
          </Heading>
          <Text fontSize="lg" mt="2">
            Oops! Something went wrong during the registration process.
          </Text>
          <Text fontSize="lg" mt="2">
            Please try again or contact support if the issue persists.
          </Text>
          <Center mt="8">
            <Link to="/establishmentregister">
              <Button colorScheme="blue">Go back to Registration Page</Button>
            </Link>
          </Center>
          <Text fontSize="sm" mt="4">
            Need help? Contact us at support@myautopal.com
          </Text>{" "}
          {/* Contact Information */}
        </Box>
      </Center>
    </Box>
  );
};

export default RegistrationFailed;
