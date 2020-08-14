import React from "react"
import { Text, List, ListItem, ListIcon, Box } from "@chakra-ui/core"

export default function IngredientList({ recipeIngredients, id, description }) {
  const ingredientsIntro = recipeIngredients.slice(0, 3)

  const outro =
    recipeIngredients.length > 3 ? (
      <ListItem>
        <ListIcon icon="chevron-right" color="savColor.4" /> +{" "}
        {recipeIngredients.length - 3}
      </ListItem>
    ) : null

  return (
    <>
      <Text pl={3} textAlign="left" fontSize="xs" color="savColor.5"></Text>
      <Box p={2} zIndex={4}>
        <List color="savColor.5" fontSize="xs">
          {ingredientsIntro.map((i) => (
            <ListItem key={i.id}>
              <ListIcon icon="chevron-right" color="savColor.4" />
              {i.ingredientSpelling}
            </ListItem>
          ))}
          {outro}
        </List>{" "}
      </Box>
    </>
  )
}
