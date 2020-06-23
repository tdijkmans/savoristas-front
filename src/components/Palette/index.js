import React from "react";

import { Box, Divider } from "@chakra-ui/core";
import { Grid, Text } from "@chakra-ui/core";

export default function Palette({ foodPalette }) {
  function filterRecipes(id) {
    console.log(id);
  }

  const coloredIngredients = foodPalette.ingredients.map((i) => ({
    name: i.name,
    hexColor: i.paletteIngredients.hexColor,
  }));
  const numberOfIngredients = coloredIngredients.length;
  const columns = `repeat(${numberOfIngredients}, 1fr)`;
  const palette = coloredIngredients.map((i) => (
    <Box key={i.hexColor} w="100%" h="150px" bg={i.hexColor}>
      <Box
        textTransform="capitalize"
        lineHeight="200px"
        p={2}
        textAlign="center"
        color="white"
        textShadow="-1px 1px 3px #000000"
      >
        {i.name}
      </Box>
    </Box>
  ));

  return (
    <Box p={3} Width="20%">
      {
        <Box
          h={256}
          borderWidth="1px"
          boxShadow="md"
          bg="white"
          borderRadius="4px"
        >
          <Grid templateColumns={columns}>{palette}</Grid>
          <Box pt={3} px={3} fontWeight="semibold" color="green.600">
            {foodPalette.name}
            <Divider />
          </Box>
          <Box pr={3} pl={3} color="#5a6268">
            {foodPalette.description}
          </Box>
          <Text onClick={() => filterRecipes(foodPalette.id)} as="button">
            Recepten
          </Text>
        </Box>
      }
    </Box>
  );
}
