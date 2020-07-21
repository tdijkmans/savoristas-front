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

export default function Ingredientpopover({ ingredients, id, description }) {
  return (
    <Popover trigger="hover">
      <PopoverTrigger>
        <Text pl={3} textAlign="left" fontSize="xs" color="savColor.5">
          {description}
        </Text>
      </PopoverTrigger>

      <PopoverContent>
        <Box p={2} zIndex={4}>
          <List color="savColor.5">
            {ingredients.map((i) => (
              <ListItem key={i.name} fontSize="xs">
                <ListIcon icon="chevron-right" color="savColor.4" />
                {i.name}
              </ListItem>
            ))}
          </List>
        </Box>
      </PopoverContent>
    </Popover>
  );
}
