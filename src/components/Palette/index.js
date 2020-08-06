import React, { useState } from "react"

import { Box, Divider, Text } from "@chakra-ui/core"

import { useDispatch } from "react-redux"

import { fetchRecipesByPalette } from "../../store/filteredrecipes/actions"
import { clearPaletteFilter } from "../../store/filteredrecipes/actions"

import contrastText from "./contrastText"

export default function Palette({ foodPalette }) {
  const [recipeToggle, setRecipeToggle] = useState("")
  const dispatch = useDispatch()

  function filterRecipes(ingredients) {
    const ingredientList = ingredients.map((i) => i.id)
    dispatch(fetchRecipesByPalette(ingredientList))
  }

  function clearFilter() {
    dispatch(clearPaletteFilter())
  }

  function toggleFilter(foodPalette) {
    if (recipeToggle === "") {
      setRecipeToggle("savColor.3")
      filterRecipes(foodPalette.ingredients)
    } else {
      setRecipeToggle("")
      clearFilter()
    }
  }

  const coloredIngredients = foodPalette.paletteIngredients.map((i) => ({
    id: i.id,
    name: i.ingredientSpelling.spelling,
    hexColor: i.hexColor
  }))

  const ingredientSwatches = coloredIngredients.map((i) => (
    <Box key={i.id} bg={i.hexColor} w={200} overflow="hidden">
      <Text
        p={2}
        fontSize="xs"
        textTransform="uppercase"
        letterSpacing={1}
        textAlign="center"
        color={contrastText(i.hexColor)}
      >
        {i.name}
      </Text>
    </Box>
  ))

  return (
    <Box>
      <Box
        p={3}
        bg={recipeToggle}
        onClick={() => toggleFilter(foodPalette)}
        as="button"
        borderRadius="4px"
      >
        <Box
          px={1}
          pt={1}
          boxShadow="md"
          bg="white"
          borderTopLeftRadius="4px"
          borderTopRightRadius="4px"
          w="200px"
        >
          <Box
            borderTopLeftRadius="4px"
            borderTopRightRadius="4px"
            overflow="hidden"
          >
            {ingredientSwatches}
          </Box>
        </Box>

        <Box>
          <Box bg="white" boxShadow="md">
            <Text
              pl={3}
              py={1}
              color="savColor.4"
              fontSize="sm"
              textAlign="left"
              textTransform="capital"
              fontWeight="bold"
            >
              {foodPalette.name}
            </Text>
          </Box>

          <Box
            bg="white"
            borderBottomLeftRadius="4px"
            borderBottomRightRadius="4px"
            boxShadow="md"
          >
            <Box pl={3}>
              <Text color="savColor.5" fontSize="xs" textAlign="left">
                {foodPalette.description}{" "}
              </Text>

              <Divider></Divider>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
