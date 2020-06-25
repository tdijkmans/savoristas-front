import React, { useState } from "react";

import { Box, Divider, Grid } from "@chakra-ui/core";

import { useDispatch } from "react-redux";

import { fetchRecipesByPalette } from "../../store/filteredrecipes/actions";
import { clearPaletteFilter } from "../../store/filteredrecipes/actions";

export default function Palette({ foodPalette }) {
  const [recipeToggle, setRecipeToggle] = useState("recepten");
  const dispatch = useDispatch();

  function filterRecipes(ingredients) {
    const ingredientList = ingredients.map((i) => i.id);
    dispatch(fetchRecipesByPalette(ingredientList));
  }

  function clearFilter() {
    dispatch(clearPaletteFilter());
  }

  function toggleFilter(foodPalette) {
    if (recipeToggle === "recepten") {
      setRecipeToggle("x recepten");
      filterRecipes(foodPalette.ingredients);
    } else {
      setRecipeToggle("recepten");
      clearFilter();
    }
  }

  const coloredIngredients = foodPalette.ingredients.map((i) => ({
    id: i.id,
    name: i.name,
    hexColor: i.paletteIngredients.hexColor,
  }));
  const numberOfIngredients = coloredIngredients.length;
  const columns = `repeat(${numberOfIngredients}, 1fr)`;
  const palette = coloredIngredients.map((i) => (
    <Box key={i.id} w="100%" h="150px" bg={i.hexColor}>
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
          <Box
            backgroundColor="green.600"
            borderTopRightRadius={4}
            borderBottomRightRadius={4}
            pr={3}
            pl={3}
            pb={0.5}
            fontSize="xs"
            color="white"
            onClick={() => toggleFilter(foodPalette)}
            as="button"
          >
            {recipeToggle}
          </Box>
        </Box>
      }
    </Box>
  );
}
