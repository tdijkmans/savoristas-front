import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { postRecipe } from "../../store/recipes/actions";

import {
  FormControl,
  FormLabel,
  Box,
  Button,
  IconButton,
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
} from "@chakra-ui/core";

import { IoIosTimer, IoIosPerson } from "react-icons/io";

import RecipeDetailed from "../RecipeDetailed";
import ListedIngredients from "./ListedIngredients";
import ListIngredientForm from "./ListIngredientForm";

export default function CreateRecipeForm() {
  const initialRecipe = {
    name: "Zalmrollade met basilicum-citroenpesto",
    description: "Zalmrollade met basilicum-citroenpesto",
    recipeYield: 4,
    cookTime: "PT50M",
    image:
      "https://static-images.jumbo.com/product_images/Recipe_502710-01_560x560.jpg",
    recipeInstructions:
      "Pureer met de staafmixer de basilicum met de pijnboompitten, knoflook en olijfolie glad. Rasp het geel van de schil van de citroen. Schep de citroenrasp met de kaas door de basilicumpasta. Breng de pesto op smaak met peper. Verwarm de oven voor tot 220 ?C. Snijd de zalmfilet horizontaal open als een boek (snijd de filet dus niet helemaal door!). Vouw de zalmfilet open en bestrijk de snijvlakken met de pesto. Rol de opengeslagen zalmfilet vanaf de brede kant als een rollade op. Rol de zalmrollade vervolgens in de hamplakjes. Bind de rollade vervolgens rondom vast met keukentouw, of zet de rollade vast met cocktailprikkers. Leg de rollade in de braadslede en bestrooi met peper naar smaak. Bak de zalmrollade in de voorverwarmde oven in 20-25 min. bruin en vanbinnen rosé of naar wens gaar.",
    recipeIngredients: [
      { ingredientQuantity: "2 stuks", name: "zalmfilet" },
      { ingredientQuantity: "een bosje", name: "basilicum" },
      { ingredientQuantity: "een bolletje", name: "knoflook" },
      { ingredientQuantity: "100 ml", name: "olijfolie" },
      { ingredientQuantity: "een hele", name: "citroen" },
    ],
  };

  const [name, setName] = useState(initialRecipe.name);
  function handleChangeName(event) {
    setName(event.target.value);
  }

  const [description, setDescription] = useState(initialRecipe.description);
  function handleChangeDescription(event) {
    setDescription(event.target.value);
  }

  const [instructions, setInstructions] = useState(
    initialRecipe.recipeInstructions
  );
  function handleChangeInstructions(event) {
    setInstructions(event.target.value);
  }

  const [recipeYield, setRecipeYield] = useState(initialRecipe.recipeYield);
  function handleChangeRecipeYield(event) {
    setRecipeYield(event.target.value);
  }

  const [cookTime, setCookTime] = useState(initialRecipe.cookTime);
  function handleChangeCookTime(event) {
    setCookTime(event.target.value);
  }

  const [ingredientName, setIngredientName] = useState("");
  function handleChangeIngredientName(event) {
    setIngredientName(event.target.value);
  }

  const [ingredientQuantity, setIngredientQuantity] = useState("");
  function handleChangeQuantity(event) {
    setIngredientQuantity(event.target.value);
  }

  const [recipeIngredientList, setRecipeIngredientList] = useState(
    initialRecipe.recipeIngredients
  );

  function removeThisIngredient(ingredientName) {
    setRecipeIngredientList(
      recipeIngredientList.filter(function (ingredient) {
        return ingredient.name !== ingredientName;
      })
    );
  }

  function listThisIngredient(event) {
    setRecipeIngredientList([
      ...recipeIngredientList,
      {
        ingredientQuantity: ingredientQuantity,
        name: ingredientName,
      },
    ]);
    setIngredientName("");
    setIngredientQuantity("");
  }

  const history = useHistory();
  const dispatch = useDispatch();

  const image = initialRecipe.image;

  function submitRecipe(event) {
    event.preventDefault();

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
    );
    // setName(initialPalette.name);
    // setDescription(initialPalette.description);
    // setIngredientList(initialPalette.ingredients);
    history.push("/");
  }

  return (
    <Flex>
      <Box w="50%">
        <Box width="100%" marginLeft="auto" marginRight="auto">
          <FormControl isRequired type="submit">
            <FormLabel htmlFor="name">Naam </FormLabel>
            <Input
              id="name"
              placeholder="Hoe wil je het recept noemen?"
              name="name"
              value={name}
              onChange={handleChangeName}
            />
            <FormLabel htmlFor="description">Beschrijving</FormLabel>
            <Input
              id="description"
              placeholder="Geef hier een korte beschrijving"
              name="description"
              value={description}
              onChange={handleChangeDescription}
            />

            <ListedIngredients
              recipeIngredientList={recipeIngredientList}
              removeThisIngredient={removeThisIngredient}
            />
            <ListIngredientForm
              handleChangeQuantity={handleChangeQuantity}
              handleChangeIngredientName={handleChangeIngredientName}
              listThisIngredient={listThisIngredient}
              ingredientQuantity={ingredientQuantity}
              ingredientName={ingredientQuantity}
            />

            <Textarea
              h={500}
              placeholder="Schrijf hier je bereidingswijze."
              value={instructions}
              onChange={handleChangeInstructions}
            ></Textarea>

            <Grid p={2} templateColumns="1fr 3fr 1fr 3fr">
              <Box as={IoIosTimer} />
              <Select
                placeholder="Select option"
                value={cookTime}
                onChange={handleChangeCookTime}
              >
                <option value="PT30M">Tot 30 min</option>
                <option value="PT60M">30 - 60 min</option>
                <option value="PT90M">60 - 90 min</option>
                <option value="PT120M"> 90 min en meer</option>
              </Select>

              <Box as={IoIosPerson} />
              <NumberInput
                value={recipeYield}
                name="recipeYield"
                onChange={handleChangeRecipeYield}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Grid>
          </FormControl>
        </Box>

        <Flex justifyContent="center" mt={5}>
          <Button type="submit" variantColor="teal" onClick={submitRecipe}>
            Post dit recept!
          </Button>
        </Flex>
      </Box>
      <Box w="50%">
        <RecipeDetailed recipe={initialRecipe} />
      </Box>
    </Flex>
  );
}
