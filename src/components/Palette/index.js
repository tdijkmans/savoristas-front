import React, { useState } from "react";

import { Box, Divider, Text } from "@chakra-ui/core";

import { useDispatch } from "react-redux";

import { fetchRecipesByPalette } from "../../store/filteredrecipes/actions";
import { clearPaletteFilter } from "../../store/filteredrecipes/actions";

import contrastText from "./contrastText";

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

  const ingredientSwatches = coloredIngredients.map((i) => (
    <Box key={i.id} bg={i.hexColor} w={200} overflow="hidden">
      <Text
        p={2}
        fontSize="xs"
        textTransform="capitalize"
        color={contrastText(i.hexColor)}
      >
        {i.name}
      </Text>
    </Box>
  ));

  return (
    <Box p={3}>
      {
        <Box p={1} boxShadow="md" bg="white" borderRadius="4px" w="200px">
          <Box
            borderTopLeftRadius="4px"
            borderTopRightRadius="4px"
            overflow="hidden"
          >
            {ingredientSwatches}
          </Box>
          <Box p={2}>
            <Text color="green.600" fontSize="sm">
              {foodPalette.name}
            </Text>
            <Divider />
            <Text color="#5a6268" fontSize="sm">
              {foodPalette.description}{" "}
            </Text>
            <Box
              // backgroundColor="green.600"
              borderTopRightRadius={4}
              borderBottomRightRadius={4}
              pr={3}
              pl={3}
              pb={0.5}
              fontSize="xs"
              // color="white"
              onClick={() => toggleFilter(foodPalette)}
              as="button"
            >
              {recipeToggle}
            </Box>
          </Box>
        </Box>
      }
    </Box>
  );
}
