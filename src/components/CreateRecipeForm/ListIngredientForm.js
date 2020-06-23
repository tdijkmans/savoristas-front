import React from "react";

import { FormControl, Box, IconButton, Input, Grid } from "@chakra-ui/core";

export default function ListIngredientForm({
  handleChangeIngredientName,
  handleChangeQuantity,
  ingredientName,
  ingredientQuantity,
  listThisIngredient,
}) {
  const addIngredientForm = (
    <FormControl key={ingredientName} p={1}>
      <Grid templateColumns="2fr 3fr 1fr">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Input
            key={ingredientQuantity}
            value={ingredientQuantity}
            name="ingredientQuantity"
            onChange={handleChangeQuantity}
          />
        </Box>
        <Input
          key={ingredientName}
          name="ingredientName"
          value={ingredientName}
          onChange={handleChangeIngredientName}
        />
        <IconButton onClick={listThisIngredient} icon="small-add" />
      </Grid>
    </FormControl>
  );
  return <>{addIngredientForm}</>;
}
