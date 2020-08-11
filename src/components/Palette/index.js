import React, { useState } from "react"

import { Box, Text } from "@chakra-ui/core"

import { useDispatch } from "react-redux"

import { fetchRecipesByPalette } from "../../store/filteredrecipes/actions"
import { clearPaletteFilter } from "../../store/filteredrecipes/actions"

import contrastText from "./contrastText"

export default function Palette({ palette }) {
  console.log(palette)
  const { name, user, paletteIngredients, description } = palette
  const [recipeToggle, setRecipeToggle] = useState("")
  const dispatch = useDispatch()

  function filterRecipes(ingredients) {
    const ingredientList = ingredients.map((i) => i.ingredientId)
    dispatch(fetchRecipesByPalette(ingredientList))
    console.log(ingredientList)
  }

  function clearFilter() {
    dispatch(clearPaletteFilter())
  }

  function toggleFilter(palette) {
    if (recipeToggle === "") {
      setRecipeToggle("savColor.3")
      filterRecipes(paletteIngredients)
    } else {
      setRecipeToggle("")
      clearFilter()
    }
  }

  const ingredientSwatches = paletteIngredients.map((i) => (
    <Box key={i.id} bg={i.hexColor} w={200} overflow="hidden">
      <Text
        p={2}
        fontSize="xs"
        textTransform="uppercase"
        letterSpacing={1}
        textAlign="center"
        color={contrastText(i.hexColor)}
      >
        {i.ingredientSpelling}
      </Text>
    </Box>
  ))

  return (
    <Box>
      <Box
        p={3}
        bg={recipeToggle}
        onClick={() => toggleFilter(paletteIngredients)}
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
              fontSize="xs"
              textAlign="left"
              textTransform="capital"
              fontWeight="bold"
            >
              {name}
              <Box w="200px" color="savColor.5" fontSize="xs" textAlign="left">
                {description}
              </Box>
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
                {user.name}
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
