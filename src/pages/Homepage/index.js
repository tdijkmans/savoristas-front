import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  Divider,
  Box,
  Grid,
  Flex,
  Text,
  CircularProgress,
} from "@chakra-ui/core";

import RecipeBrief from "../../components/RecipeBrief";
import Palette from "../../components/Palette";
import CreatePaletteButton from "../../components/CreatePaletteButton";
import CreateRecipeButton from "../../components/CreateRecipeButton";
import Filterresult from "../../components/FilterResult";

import { fetchPalettes } from "../../store/palettes/actions";
import { fetchRecipes } from "../../store/recipes/actions";

import { selectToken } from "../../store/user/selectors";
import { selectPalettes } from "../../store/palettes/selectors";
import { selectRecipes } from "../../store/recipes/selectors";
import { selectFilteredRecipes } from "../../store/filteredrecipes/selectors";

export default function Homepage() {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const palettes = useSelector(selectPalettes);
  const recipes = useSelector(selectRecipes);

  const filteredRecipes = useSelector(selectFilteredRecipes);
  const filterResult = filteredRecipes && filteredRecipes.length;

  useEffect(() => {
    dispatch(fetchPalettes());
    dispatch(fetchRecipes());
  }, [dispatch]);

  const loader = (
    <CircularProgress isIndeterminate color="green"></CircularProgress>
  );

  const allRecipesList = recipes.length
    ? recipes.map((recipe) => <RecipeBrief key={recipe.id} recipe={recipe} />)
    : loader;

  const recipesList = filteredRecipes.length
    ? filteredRecipes.map((recipe) => (
        <RecipeBrief key={recipe.id} recipe={recipe} />
      ))
    : allRecipesList;

  const paletteList = palettes.length
    ? palettes.map((palette) => (
        <Palette key={palette.id} foodPalette={palette} />
      ))
    : loader;

  return (
    <Box width="80%" marginLeft="auto" marginRight="auto" bg="#F7F3E7">
      <Box>
        <Text p={2} fontSize="4xl" color="#5a6268">
          De laatste smaakpaletten
        </Text>

        <Flex wrap="wrap" justify="center">
          {paletteList}

          {token && <CreatePaletteButton />}
          <Filterresult filterResult={filterResult} />
        </Flex>
        <Divider />
        <Text p={2} fontSize="4xl" color="#5a6268">
          De laatste recepten
        </Text>
        <Grid templateColumns="repeat(4, 1fr)">
          {recipesList}
          {token && <CreateRecipeButton />}
        </Grid>
      </Box>
    </Box>
  );
}
