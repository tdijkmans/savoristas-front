import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { useDispatch } from "react-redux"

import { postRecipe } from "../../store/recipes/actions"

import {
  FormControl,
  Box,
  Button,
  Input,
  Grid,
  Flex,
  Textarea,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Select,
  Divider
} from "@chakra-ui/core"

import RecipeDetailed from "../RecipeDetailed"
import ListedIngredients from "./ListedIngredients"
import ListIngredientForm from "./ListIngredientForm"

export default function CreateRecipeForm() {
  const initialRecipe = {
    name: "Zalmrollade met basilicum-citroenpesto",
    description: "Een rollade met vis voor de verandering.",
    recipeYield: 4,
    cookTime: "PT50M",
    image:
      "https://static-images.jumbo.com/product_images/Recipe_502710-01_560x560.jpg",
    recipeInstructions:
      "Pureer met de staafmixer de basilicum met de pijnboompitten, knoflook en olijfolie glad. Rasp het geel van de schil van de citroen. Schep de citroenrasp met de kaas door de basilicumpasta. Breng de pesto op smaak met peper. Verwarm de oven voor tot 220 C. Snijd de zalmfilet horizontaal open als een boek (snijd de filet dus niet helemaal door!). Vouw de zalmfilet open en bestrijk de snijvlakken met de pesto. Rol de opengeslagen zalmfilet vanaf de brede kant als een rollade op. Rol de zalmrollade vervolgens in de hamplakjes. Bind de rollade vervolgens rondom vast met keukentouw, of zet de rollade vast met cocktailprikkers. Leg de rollade in de braadslede en bestrooi met peper naar smaak. Bak de zalmrollade in de voorverwarmde oven in 20-25 minuten bruin en vanbinnen rosé of naar wens gaar.",
    recipeIngredients: [
      { ingredientQuantity: "2 stuks", spelling: "zalmfilet" },
      { ingredientQuantity: "een bosje", spelling: "basilicum" },
      { ingredientQuantity: "een bolletje", spelling: "knoflook" },
      { ingredientQuantity: "100 ml", spelling: "olijfolie" },
      { ingredientQuantity: "een hele", spelling: "citroen" }
    ]
  }

  const [image, setImage] = useState(initialRecipe.image)
  function handleChangeImage(event) {
    setImage(event.target.value)
  }

  const [name, setName] = useState(initialRecipe.name)
  function handleChangeName(event) {
    setName(event.target.value)
  }

  const [description, setDescription] = useState(initialRecipe.description)
  function handleChangeDescription(event) {
    setDescription(event.target.value)
  }

  const [instructions, setInstructions] = useState(
    initialRecipe.recipeInstructions
  )
  function handleChangeInstructions(event) {
    setInstructions(event.target.value)
  }

  const [recipeYield, setRecipeYield] = useState(initialRecipe.recipeYield)
  function handleChangeRecipeYield(event) {
    setRecipeYield(event)
  }

  const [cookTime, setCookTime] = useState(initialRecipe.cookTime)
  function handleChangeCookTime(event) {
    setCookTime(event.target.value)
  }

  const [recipeIngredientList, setRecipeIngredientList] = useState(
    initialRecipe.recipeIngredients
  )

  function removeThisIngredient(ingredientSpelling) {
    setRecipeIngredientList(
      recipeIngredientList.filter(function (ingredient) {
        return ingredient.spelling !== ingredientSpelling
      })
    )
  }

  const [message, setMessage] = useState("")
  function listThisIngredient(quantity, spelling) {
    if (spelling === "") {
      setMessage("Voer ajb een ingrediënt in.")
    } else if (
      recipeIngredientList.some((i) => i.spelling === spelling) === true
    ) {
      setMessage("Voer ajb niet tweemaal hetzelfde ingrediënt in.")
    } else {
      setRecipeIngredientList([
        ...recipeIngredientList,
        {
          ingredientQuantity: quantity,
          spelling: spelling
        }
      ])
      setMessage("")
    }
  }

  const history = useHistory()
  const dispatch = useDispatch()

  function submitRecipe(event) {
    event.preventDefault()

    dispatch(
      postRecipe(
        image,
        name,
        description,
        recipeIngredientList,
        recipeYield,
        instructions,
        cookTime
      )
    )
    // setName(initialPalette.name);
    // setDescription(initialPalette.description);
    // setIngredientList(initialPalette.ingredients);
    history.push("/")
  }

  const previewRecipe = {
    cookTime,
    recipeYield,
    name: name,
    image,
    description,
    recipeIngredients: recipeIngredientList,
    recipeInstructions: instructions
  }

  return (
    <Flex>
      <Box w="50%" p={3}>
        <Box
          p={2}
          width="100%"
          marginLeft="auto"
          marginRight="auto"
          background="white"
        >
          <FormControl isRequired type="submit">
            <Input
              id="name"
              fontWeight="bold"
              placeholder="Hoe wil je het recept noemen?"
              name="name"
              value={name}
              onChange={handleChangeName}
              borderColor="white"
            />

            <Input
              id="description"
              placeholder="Geef hier een korte beschrijving"
              name="description"
              value={description}
              borderColor="white"
              onChange={handleChangeDescription}
            />
            <Divider />
            <ListedIngredients
              recipeIngredientList={recipeIngredientList}
              removeThisIngredient={removeThisIngredient}
            />
            <ListIngredientForm listThisIngredient={listThisIngredient} />
            <Box color="savColor.2" textAlign="center" p={4}>
              {message}
            </Box>

            <Textarea
              h={500}
              placeholder="Schrijf hier je bereidingswijze."
              value={instructions}
              onChange={handleChangeInstructions}
              borderColor="white"
            ></Textarea>
            <Divider />

            <Grid templateColumns="6fr 1fr 5fr">
              <Select
                placeholder="Bereidingstijd"
                value={cookTime}
                onChange={handleChangeCookTime}
              >
                <option value="PT30M">Tot 30 min</option>
                <option value="PT60M">30 - 60 min</option>
                <option value="PT90M">60 - 90 min</option>
                <option value="PT120M"> 90 min en meer</option>
              </Select>
              <Box></Box>
              <NumberInput
                value={recipeYield}
                name="recipeYield"
                onChange={handleChangeRecipeYield}
                defaultValue={4}
                min={1}
                max={16}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Grid>
            <Input
              mt={2}
              id="image"
              placeholder="Geef een url voor een afbeelding."
              name="image"
              value={image}
              onChange={handleChangeImage}
            />
          </FormControl>
        </Box>

        <Flex justifyContent="center" mt={5}>
          <Button
            type="submit"
            variantColor="savColor.2"
            onClick={submitRecipe}
          >
            Post dit recept!
          </Button>
        </Flex>
      </Box>
      <Box w="50%">
        <RecipeDetailed recipe={previewRecipe} />
      </Box>
    </Flex>
  )
}
