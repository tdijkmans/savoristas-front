import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Text,
  List,
  ListItem,
  ListIcon,
  Box,
} from "@chakra-ui/core";

export default function Ingredientpopover({ ingredients, id }) {
  const ingredientList = (
    <List color="savColor.5">
      {ingredients.map((i) => (
        <ListItem key={i.name}>
          <ListIcon icon="chevron-right" color="savColor.4" />
          {i.name}
        </ListItem>
      ))}
    </List>
  );

  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Text pr={2} textAlign="right" fontSize="xs" color="savColor.5">
          <ListIcon icon="chevron-right" color="savColor.4" /> ingrediënten
        </Text>
      </PopoverTrigger>

      <PopoverContent>
        <Box p={2} zIndex={4}>
          {ingredientList}
        </Box>
      </PopoverContent>
    </Popover>
  );
}
