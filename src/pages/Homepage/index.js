import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Divider } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";
import { CircularProgress } from "@chakra-ui/core";

import RecipeBrief from "../../components/RecipeBrief";
import Palette from "../../components/Palette";
import CreatePaletteButton from "../../components/CreateButton";

import { fetchPalettes } from "../../store/palettes/actions";
import { fetchRecipes } from "../../store/recipes/actions";

import { selectPalettes } from "../../store/palettes/selectors";
import { selectRecipes } from "../../store/recipes/selectors";

export default function Homepage() {
  const dispatch = useDispatch();
  const palettes = useSelector(selectPalettes);
  const recipes = useSelector(selectRecipes);

  useEffect(() => {
    dispatch(fetchPalettes());
    dispatch(fetchRecipes());
  }, [dispatch]);

  const loader = (
    <CircularProgress isIndeterminate color="green"></CircularProgress>
  );

  const recipeList = recipes.length
    ? recipes.map((recipe) => <RecipeBrief key={recipe.id} recipe={recipe} />)
    : loader;

  const paletteList = palettes.length
    ? palettes.map((palette) => (
        <Palette key={palette.id} foodPalette={palette} />
      ))
    : loader;

  return (
    <Box bg="#F7F3E7">
      <Box width="80%" marginLeft="auto" marginRight="auto">
        <Text p={2} fontSize="4xl">
          The latest Food Palettes
        </Text>

        <Grid templateColumns="repeat(4, 1fr)">
          {paletteList}
          <CreatePaletteButton />
        </Grid>
        <Divider />
        <Text p={2} fontSize="4xl">
          The latest Recipes
        </Text>
        <Grid templateColumns="repeat(4, 1fr)">{recipeList}</Grid>
      </Box>
    </Box>
  );
}
