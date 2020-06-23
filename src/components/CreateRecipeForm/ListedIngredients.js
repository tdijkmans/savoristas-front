import React from "react";

import { FormControl, Box, IconButton, Input, Grid } from "@chakra-ui/core";

export default function ListedIngredients({
  recipeIngredientList,
  removeThisIngredient,
}) {
  const listedRecipeIngredients = recipeIngredientList.map((i, index) => (
    <FormControl key={i.name} p={1} isReadOnly>
      <Grid templateColumns="2fr 3fr 1fr">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Input
            key={i.ingredientQuantity}
            value={i.ingredientQuantity}
            name="ingredientQuantity"
          />
        </Box>
        <Input key={i.name} id={i.name} name="name" value={i.name} />
        <IconButton
          onClick={() => removeThisIngredient(i.name)}
          icon="small-close"
        />
      </Grid>
    </FormControl>
  ));
  return <>{listedRecipeIngredients}</>;
}
