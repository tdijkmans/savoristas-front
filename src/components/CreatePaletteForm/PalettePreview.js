import React from "react"

import { Box, Text } from "@chakra-ui/core"

import contrastText from "../Palette/contrastText"

export default function PalettePreview({ palette }) {
  const { name, description, ingredients } = palette

  console.log(name, description, ingredients)

  const ingredientSwatches = ingredients.map((i) => (
    <Box key={i.id} bg={i.hexColor} overflow="hidden">
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
      <Box p={3} as="button" borderRadius="4px">
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
              <Text color="savColor.5" fontSize="xs" textAlign="left"></Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
