import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Divider } from "@chakra-ui/core";
import { Box } from "@chakra-ui/core";
import { Grid } from "@chakra-ui/core";
import { Text } from "@chakra-ui/core";

import RecipeBrief from "../../components/RecipeBrief";
import Palette from "../../components/Palette";

import { fetchPalettes } from "../../store/palettes/actions";
import { selectPalettes } from "../../store/palettes/selectors";

export default function Homepage() {
  const dispatch = useDispatch();
  const palettes = useSelector(selectPalettes);

  useEffect(() => {
    dispatch(fetchPalettes());
  }, [dispatch]);

  const paletteList =
    palettes.length &&
    palettes.map((p) => (
      <Palette
        key={p.id}
        name={p.name}
        ingredients={p.ingredients}
        description={p.description}
      />
    ));

  return (
    <Box width="80%" marginLeft="auto" marginRight="auto">
      <Text p={2} fontSize="4xl">
        The latest Food Palettes
      </Text>
      <Grid templateColumns="repeat(4, 1fr)">{paletteList}</Grid>
      <Divider />
      <Text p={2} fontSize="4xl">
        The latest Recipes
      </Text>
      <RecipeBrief />
    </Box>
  );
}
