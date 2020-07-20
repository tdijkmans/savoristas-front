import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecipe } from "../../store/detailedrecipe/actions";
import { selectRecipe } from "../../store/detailedrecipe/selectors";

import {
  Box,
  Grid,
  List,
  ListItem,
  ListIcon,
  Image,
  Divider,
  Text,
} from "@chakra-ui/core";
import { IoIosTimer, IoIosPerson } from "react-icons/io";

export default function RecipeDetailPage() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipe(id));
  }, [dispatch, id]);

  const recipe = useSelector(selectRecipe);

  const {
    cookTime,
    recipeYield,
    name,
    image,
    description,
    ingredients,
    recipeInstructions,
  } = recipe;

  const ingredientList = ingredients && (
    <Box>
      <Grid templateColumns="1fr 5fr">
        <Box></Box>
        <List color="savColor.5">
          {ingredients.map((i) => (
            <ListItem key={i.name}>
              <ListIcon icon="chevron-right" color="savColor.4" />
              {i.recipeIngredients.ingredientQuantity} {i.name}
            </ListItem>
          ))}
        </List>
      </Grid>
    </Box>
  );

  const instructions = recipeInstructions && (
    <Box pr={3}>
      <Grid templateColumns="1fr 14fr">
        <Box></Box>
        <List as="ol" color="savColor.5" fontSize="sm">
          {recipeInstructions.split(". ").map((i) => (
            <ListItem key={i}>
              <ListIcon icon="chevron-right" color="savColor.4" />
              {i}
            </ListItem>
          ))}
        </List>
      </Grid>
    </Box>
  );

  return (
    <Box p={3} w="50%" marginLeft="auto" marginRight="auto">
      <Image src={image} alt={name} w="100%" />

      <Box
        h="auto"
        minH="120px"
        borderWidth="1px"
        boxShadow="md"
        bg="white"
        borderRadius="4px"
      >
        <Box pt={3} px={3} fontWeight="semibold" color="savColor.3">
          {name}
        </Box>

        <Box
          pt={1}
          pr={3}
          pl={3}
          fontSize="sm"
          fontStyle="italic"
          color="savColor.5"
        >
          {description}
        </Box>
        <Divider />
        {ingredientList}
        <Divider />
        {instructions}
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
