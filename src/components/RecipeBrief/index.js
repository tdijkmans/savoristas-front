import React from "react"

import { Image, Box } from "@chakra-ui/core"

import IngredientList from "./IngredientList"
import RecipeFooter from "./RecipeFooter"

export default function RecipeBrief({ recipe }) {
  const {
    user,

    name,
    image,
    description,
    recipeIngredients,
    id
  } = recipe

  const recipeUrl = `recipe/${id}`

  return (
    <Box p={3} w={300} as="a" href={recipeUrl}>
      <Image src={image} alt={name} />

      <Box
        h="auto"
        minH="120px"
        borderWidth="1px"
        boxShadow="md"
        bg="savColor.cardMain"
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
          <IngredientList
            recipeIngredients={recipeIngredients}
            description={description}
            id={id}
          />
        </Box>
      </Box>
      <RecipeFooter user={user} />
    </Box>
  )
}
