import React from "react";

import { Grid, Image, Text, Box, Divider } from "@chakra-ui/core";
import { IoIosTimer, IoIosPerson } from "react-icons/io";

import Ingredientpopover from "./Ingredientpopover";

export default function RecipeBrief({ recipe }) {
  const {
    cookTime,
    recipeYield,
    name,
    image,
    description,
    ingredients,
    id,
  } = recipe;

  const recipeUrl = `recipe/${id}`;

  return (
    <Box p={3} w="200px" as="a" href={recipeUrl}>
      <Image src={image} alt={name} />

      <Box
        h="auto"
        minH="120px"
        borderWidth="1px"
        boxShadow="md"
        bg="white"
        borderRadius="4px"
      >
        <Box
          pt={3}
          px={3}
          fontWeight="semibold"
          fontSize="sm"
          color="savColor.4"
        >
          {name}
        </Box>

        <Box>
          <Ingredientpopover
            ingredients={ingredients}
            description={description}
            id={id}
          />
        </Box>

        <Divider />
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
