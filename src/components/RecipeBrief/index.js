import React from "react";

import { Box, Divider } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core";
import { Image } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";

import { IoIosTimer, IoIosPerson } from "react-icons/io";

export default function RecipeBrief({ recipe }) {
  const { cookTime, recipeYield, name, image, description } = recipe;

  return (
    <Box p={3} Width="20%">
      <Image src={image} alt={name} />

      <Box
        h="auto"
        minH="120px"
        borderWidth="1px"
        boxShadow="md"
        bg="white"
        borderRadius="4px"
      >
        <Box pt={3} px={3} fontWeight="semibold" color="green.600">
          {name}
        </Box>

        <Box
          pt={1}
          pr={3}
          pl={3}
          fontSize="sm"
          fontStyle="italic"
          color="#5a6268"
        >
          {description}
        </Box>
        <Divider p={2} />
        <Grid p={2} templateColumns="repeat(4, 1fr)">
          <Box as={IoIosTimer} />
          <Text fontSize="xs">{cookTime}</Text>
          <Box as={IoIosPerson} />
          <Text fontSize="xs">{recipeYield}</Text>
        </Grid>
      </Box>
    </Box>
  );
}
