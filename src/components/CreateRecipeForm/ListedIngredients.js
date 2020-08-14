import React from "react"

import { FormControl, Box, IconButton, Input, Grid } from "@chakra-ui/core"

export default function ListedIngredients({
  recipeIngredientList,
  removeThisIngredient
}) {
  const listedRecipeIngredients = recipeIngredientList.map((i, index) => (
    <FormControl key={i.spelling} isReadOnly>
      <Grid templateColumns="1fr 3fr 5fr 1fr">
        <Box></Box>
        <Box display="flex" alignItems="center" justifyContent="center">
          <Input
            key={i.ingredientQuantity}
            value={i.ingredientQuantity}
            name="ingredientQuantity"
            border="none"
          />
        </Box>
        <Input
          key={i.spelling}
          id={i.spelling}
          name="spelling"
          value={i.spelling}
          border="none"
        />
        <IconButton
          onClick={() => removeThisIngredient(i.name)}
          icon="small-close"
          size="sm"
        />
      </Grid>
    </FormControl>
  ))
  return <>{listedRecipeIngredients}</>
}
