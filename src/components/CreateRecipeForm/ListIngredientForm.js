import React, { useState } from "react";

import { FormControl, Box, IconButton, Input, Grid } from "@chakra-ui/core";

export default function ListIngredientForm({
  handleChangeIngredientName,
  handleChangeQuantity,
  ingredientName = "",
  ingredientQuantity = "",
  listThisIngredient,
}) {
  const [ingredientNameLocal, setIngredientNameLocal] = useState(
    ingredientName
  );
  const [ingredientQuantityLocal, setIngredientQuantityLocal] = useState(
    ingredientQuantity
  );

  const addIngredientForm = (
    <FormControl key={ingredientName} p={1}>
      <Grid templateColumns="2fr 3fr 1fr">
        <Box display="flex" alignItems="center" justifyContent="center">
          <Input
            value={ingredientQuantityLocal}
            name="ingredientQuantity"
            onChange={(e) => setIngredientQuantityLocal(e.target.value)}
            onBlur={handleChangeQuantity}
          />
        </Box>
        <Input
          name="ingredientName"
          value={ingredientNameLocal}
          onChange={(e) => setIngredientNameLocal(e.target.value)}
          onBlur={handleChangeIngredientName}
        />
        <IconButton
          onClick={(event) => {
            listThisIngredient(ingredientQuantityLocal, ingredientNameLocal);
            setIngredientQuantityLocal("");
            setIngredientNameLocal("");
          }}
          icon="small-add"
        />
      </Grid>
    </FormControl>
  );
  return <>{addIngredientForm}</>;
}
