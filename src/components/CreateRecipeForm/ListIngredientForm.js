import React, { useState } from "react";

import {
  FormControl,
  Box,
  IconButton,
  Input,
  Grid,
  Divider,
} from "@chakra-ui/core";

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
    <FormControl key={ingredientName}>
      <Divider />
      <Grid templateColumns="1fr 3fr 5fr 1fr">
        <IconButton
          onClick={(event) => {
            listThisIngredient(ingredientQuantityLocal, ingredientNameLocal);
            setIngredientQuantityLocal("");
            setIngredientNameLocal("");
          }}
          icon="small-add"
        />
        <Box display="flex" alignItems="center" justifyContent="center">
          <Input
            ml={2}
            value={ingredientQuantityLocal}
            name="ingredientQuantity"
            onChange={(e) => setIngredientQuantityLocal(e.target.value)}
            onBlur={handleChangeQuantity}
            border="none"
            placeholder="Voeg toe..."
          />
        </Box>
        <Input
          name="ingredientName"
          value={ingredientNameLocal}
          onChange={(e) => setIngredientNameLocal(e.target.value)}
          onBlur={handleChangeIngredientName}
          border="none"
        />
      </Grid>
    </FormControl>
  );
  return <>{addIngredientForm}</>;
}
