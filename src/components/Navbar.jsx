import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1rem"
      bg="blue.500"
      color="white"
    >
      {/* Logo */}
      <Link to="/" style={{ textDecoration: "none" }}>
        <Box fontSize={26} fontWeight="bold">
          MyAutoPal
        </Box>
      </Link>

      {/* Navbar Links */}
      <Flex>
        <Link to="/about" style={{ textDecoration: "none" }}>
          <Button
            variant="ghost"
            mr="2"
            color={"white"}
            _hover={{ bg: "gray.700" }} // Change hover color here
          >
            About Us
          </Button>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <Button variant="ghost" color={"white"} _hover={{ bg: "gray.700" }}>
            Contact
          </Button>
        </Link>
        <Link to="/establishmentlogin" style={{ textDecoration: "none" }}>
          <Button variant="ghost" color={"white"} _hover={{ bg: "gray.700" }}>
            Establishment Login
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
