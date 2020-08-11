import React from "react"
import { Popover, Text, List, ListItem, ListIcon, Box } from "@chakra-ui/core"

export default function IngredientList({ recipeIngredients, id, description }) {
  return (
    <Popover trigger="hover">
      <Text pl={3} textAlign="left" fontSize="xs" color="savColor.5"></Text>

      <Box p={2} zIndex={4}>
        <List color="savColor.5">
          {recipeIngredients.map((i) => (
            <ListItem key={i.id} fontSize="xs">
              <ListIcon icon="chevron-right" color="savColor.4" />
              {i.ingredientSpelling}
            </ListItem>
          ))}
        </List>
      </Box>
    </Popover>
  )
}
