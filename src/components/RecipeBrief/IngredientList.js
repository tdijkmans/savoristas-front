import React from "react"
import { Popover, Text, List, ListItem, ListIcon, Box } from "@chakra-ui/core"

export default function IngredientList({ ingredients, id, description }) {
  return (
    <Popover trigger="hover">
      <Text pl={3} textAlign="left" fontSize="xs" color="savColor.5"></Text>

      <Box p={2} zIndex={4}>
        <List color="savColor.5">
          {ingredients.map((i) => (
            <ListItem key={i.id} fontSize="xs">
              <ListIcon icon="chevron-right" color="savColor.4" />
              {i.recipeIngredient}
            </ListItem>
          ))}
        </List>
      </Box>
    </Popover>
  )
}
