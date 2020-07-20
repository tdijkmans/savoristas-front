import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionPanel,
  AccordionIcon,
  Box,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/core";

export default function IngredientsAccordion({ ingredients, id }) {
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
    <div>
      <Accordion>
        <AccordionItem>
          <AccordionHeader>
            <Box flex="1" textAlign="left">
              Ingrediënten
            </Box>
            <AccordionIcon />
          </AccordionHeader>
          <AccordionPanel pb={4}>{ingredientList}</AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
