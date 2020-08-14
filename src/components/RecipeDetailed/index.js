import React from "react"

import { Box, Divider } from "@chakra-ui/core"
import { Grid } from "@chakra-ui/core"
import { Image } from "@chakra-ui/core"
import { Text } from "@chakra-ui/core"
import { List, ListItem, ListIcon } from "@chakra-ui/core"

import { IoIosTimer, IoIosPerson } from "react-icons/io"

export default function RecipeDetailed({ recipe }) {
  const {
    cookTime,
    recipeYield,
    name,
    image,
    description,
    recipeIngredients,
    recipeInstructions
  } = recipe

  const ingredientList = (
    <Box>
      <Grid templateColumns="1fr 5fr">
        <Box></Box>
        <List color="savColor.5">
          {recipeIngredients.map((i) => (
            <ListItem key={i.spelling}>
              <ListIcon icon="chevron-right" color="savColor.4" />
              {i.ingredientQuantity} {i.spelling}
            </ListItem>
          ))}
        </List>
      </Grid>
    </Box>
  )

  const instructions = <Box p={10}>{recipeInstructions}</Box>

  return (
    <Box p={3}>
      <Image src={image} alt={name} w="100%" />

      <Box
        h="auto"
        minH="120px"
        borderWidth="1px"
        boxShadow="md"
        bg="white"
        borderRadius="4px"
      >
        <Box pt={3} px={10} fontWeight="semibold" color="savColor.3">
          {name}
        </Box>

        <Box pt={1} pl={10} fontSize="sm" fontStyle="italic" color="savColor.5">
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
  )
}
