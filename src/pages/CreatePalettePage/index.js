import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import CreatePaletteForm from "../../components/CreatePaletteForm"

import { Box, Text } from "@chakra-ui/core"

import { fetchSpellings } from "../../store/ingredientspellings/actions"
import { selectIngredientSpellings } from "../../store/ingredientspellings/selectors"

export default function CreatePalettePage() {
  const dispatch = useDispatch()
  // const availableIngredients = useSelector(selectIngredientSpellings)
  const items = useSelector(selectIngredientSpellings).map((i) => ({
    key: i.spelling,
    value: i.spelling
  }))

  useEffect(() => {
    dispatch(fetchSpellings())
  }, [dispatch])

  return (
    <Box>
      <Box width="80%" marginLeft="auto" marginRight="auto">
        <Text p={2} fontSize="4xl" color="savColor.5">
          Post je eigen palet.
        </Text>
        <CreatePaletteForm items={items} />
      </Box>
    </Box>
  )
}
