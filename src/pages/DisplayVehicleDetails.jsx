import React from "react";
import { Box, Divider, Text, Grid, GridItem } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const DisplayVehicleDetails = () => {
  const location = useLocation();

  // Access the state sent from the previous page
  const { vehicleDetails } = location.state;

  // Filter out the selected details
  const selectedDetails = {
    "Registration Number": vehicleDetails.registrationNumber,
    Make: vehicleDetails.make,
    Colour: vehicleDetails.colour,
    "Engine Capacity": vehicleDetails.engineCapacity,
    "Fuel Type": vehicleDetails.fuelType,
    "Month of First Registration": vehicleDetails.monthOfFirstRegistration,
    "MOT Expiry Date": vehicleDetails.motExpiryDate,
    "MOT Status": vehicleDetails.motStatus,
    "Tax Due Date": vehicleDetails.taxDueDate,
    "Tax Status": vehicleDetails.taxStatus,
    "Year of Manufacture": vehicleDetails.yearOfManufacture,
  };

  // Calculate the number of columns based on the number of details
  const numColumns = Object.keys(selectedDetails).length > 3 ? 3 : 1;

  return (
    <Box
      mt={3}
      p={6}
      boxShadow="lg"
      borderRadius="xl"
      bg="white"
      color="gray.800"
    >
      <Divider borderColor="gray.400" />
      <Text fontSize="2xl" fontWeight="bold" mb={4} mt={4} textAlign="center">
        Vehicle Details
      </Text>
      <Grid
        templateColumns={`repeat(${numColumns}, 1fr)`}
        gap={4}
        justifyContent="center"
        alignItems="center"
      >
        {Object.entries(selectedDetails).map(([label, value]) => (
          <GridItem key={label}>
            <Box textAlign="center">
              {" "}
              {/* Center align text */}
              <Text fontSize="md" fontWeight="bold">
                {label}:
              </Text>
              <Text fontSize="md">{value}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default DisplayVehicleDetails;
