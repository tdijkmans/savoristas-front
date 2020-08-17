import React, { useState } from "react"

import { Box, Text } from "@chakra-ui/core"

import { useDispatch } from "react-redux"

import { fetchRecipesByPalette } from "../../store/filteredrecipes/actions"
import { clearPaletteFilter } from "../../store/filteredrecipes/actions"

import contrastText from "./contrastText"
import PaletteFooter from "./PaletteFooter"

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

  const minMainCardHeight = 210

  const ingredientSwatches = paletteIngredients.map((i) => (
    <Box
      key={i.id}
      bg={i.hexColor}
      overflow="hidden"
      h={minMainCardHeight / paletteIngredients.length}
    >
      <Text
        pt={2}
        fontSize="xs"
        // textTransform="uppercase"
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
          minH={minMainCardHeight}
          w={250}
          px={1}
          pt={1}
          boxShadow="md"
          bg="savColor.cardMain"
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
          <Box bg="savColor.cardFooter" boxShadow="md">
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
              <Text
                color="savColor.5"
                fontSize="xs"
                textAlign="left"
                isTruncated
                maxWidth={200}
              >
                {description}
              </Text>
            </Text>
          </Box>
        </Box>
      </Box>
      <PaletteFooter user={user} />
    </Box>
  )
}
