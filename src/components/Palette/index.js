import React from "react";

import { Box } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core";

export default function Palette(props) {
  const coloredIngredients = props.ingredients.map((i) => ({
    name: i.name,
    hexColor: i.paletteIngredients.hexColor,
  }));
  const numberOfIngredients = coloredIngredients.length;
  const columns = `repeat(${numberOfIngredients}, 1fr)`;
  const palette = coloredIngredients.map((i) => (
    <Box w="100%" h="150px" bg={i.hexColor}>
      <Box
        textTransform="capitalize"
        lineHeight="200px"
        p={2}
        textAlign="center"
      >
        {i.name}
      </Box>
    </Box>
  ));

  return (
    <Box p={3} Width="20%">
      <Box h={256} borderWidth="1px" boxShadow="md">
        <Grid templateColumns={columns}>{palette}</Grid>
        <Box pt={3} px={3} fontWeight="semibold">
          {props.name}
        </Box>
        <Box pr={3} pl={3}>
          {props.description}
        </Box>
      </Box>
    </Box>
  );
}
