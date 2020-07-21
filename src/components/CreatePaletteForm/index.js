import React, { useState } from "react";
import InputColor from "react-input-color";
import { postPalette } from "../../store/palettes/actions";

import {
  FormControl,
  FormLabel,
  Box,
  Button,
  Link,
  IconButton,
  Input,
  Divider,
  Grid,
  Flex,
} from "@chakra-ui/core";

import Palette from "../Palette";
import { useDispatch } from "react-redux";

export default function CreatePaletteForm() {
  const initialPalette = {
    name: "In De Winter",
    description: "Voor als het buiten vriest.",
    ingredients: [
      { name: "Tijm", hexColor: "#43A047" },
      { name: "Honing", hexColor: "#FDD835" },
    ],
  };
  const [name, setName] = useState(initialPalette.name);
  const [description, setDescription] = useState(initialPalette.description);
  const [color, setColor] = useState({});
  const [ingredient, setIngredient] = useState("");
  const [ingredientList, setIngredientList] = useState(
    initialPalette.ingredients
  );
  const [message, setMessage] = useState("");

  // Validate inputs (not empty, unique) and add ingredient with color to ingredient list.
  function listThisIngredient(event) {
    if (ingredient === "") {
      setMessage("Voeg alsjeblieft een ingrediënt toe.");
    } else if (ingredientList.some((i) => i.name === ingredient) === true) {
      setMessage("Voeg alsjeblieft niet tweemaal hetzelfde ingrediënt toe.");
    } else {
      setIngredientList([
        ...ingredientList,
        { name: ingredient, hexColor: color.hex },
      ]);
      setIngredient("");
      setMessage("");
    }
  }

  function removeThisIngredient(name) {
    setIngredientList(
      ingredientList.filter((ingredient) => ingredient.name !== name)
    );
  }

  const succesMessage = (
    <Box>
      <Box>Perfect, dat is gelukt!</Box>
      <Box>
        Maak er nog een, of bekijk{" "}
        <Link color="savColor.2" href="/">
          hier
        </Link>
        .
      </Box>
    </Box>
  );

  const dispatch = useDispatch();

  function submitPalette(event) {
    event.preventDefault();

    if (ingredientList.length === 0) {
      setMessage("Voeg alsjeblieft minimaal 1 ingrediënt toe.");
    } else if (ingredientList.length > 5) {
      setMessage("Voeg alsjeblieft maximaal 5 ingrediënten toe.");
    } else {
      dispatch(postPalette(name, description, ingredientList));
      setName(initialPalette.name);
      setDescription(initialPalette.description);
      setIngredientList(initialPalette.ingredients);
      setMessage(succesMessage);
    }
  }

  // THIS REFORMATS DATA TO SEND TO PALETTE RENDERING FOR PREVIEW
  const convertedForPreview = ingredientList.map((i) => ({
    id: i.name,
    name: i.name,
    paletteIngredients: { hexColor: i.hexColor },
  }));
  const foodPalette = {
    name: name,
    description: description,
    ingredients: convertedForPreview,
  };

  const listedIngredients = ingredientList.map((i) => (
    <FormControl key={i.name} p={1} isReadOnly>
      <Grid templateColumns="1fr 4fr 1fr">
        <Box display="flex" alignItems="center" justifyContent="center">
          <InputColor key={i.name} initialValue={i.hexColor} name="hexColor" />
        </Box>
        <Input
          key={i.name}
          id={i.name}
          name="name"
          // placeholder="Ingredient"
          value={i.name}
        />
        <IconButton
          onClick={() => removeThisIngredient(i.name)}
          icon="small-close"
        />
      </Grid>
    </FormControl>
  ));

  return (
    <Box width="50%" marginLeft="auto" marginRight="auto">
      <Box width="80%" marginLeft="auto" marginRight="auto">
        <Palette foodPalette={foodPalette} />
      </Box>
      <Divider p={5} />
      <FormControl isRequired type="submit">
        <FormLabel htmlFor="name">Naam </FormLabel>
        <Input
          id="name"
          placeholder="Hoe wil je het palet noemen?"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormLabel htmlFor="description">Beschrijving</FormLabel>
        <Input
          id="description"
          placeholder="Geef hier een korte beschrijving"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <Divider p={3} />
        {listedIngredients}

        <FormControl p={1}>
          <Grid templateColumns="1fr 4fr 1fr">
            {ingredientList.length < 5 && (
              <>
                <Box display="flex" alignItems="center" justifyContent="center">
                  <InputColor
                    initialValue="savColor.5"
                    onChange={setColor}
                    name="hexColor"
                  />
                </Box>

                <Input
                  id="Ingredient"
                  name="name"
                  placeholder="Voeg een ingrediënt toe"
                  value={ingredient}
                  onChange={(e) => setIngredient(e.target.value)}
                />

                <IconButton onClick={listThisIngredient} icon="small-add" />
              </>
            )}
          </Grid>
          <Box textAlign="center" p={4}>
            {message}
          </Box>
        </FormControl>

        <Divider p={3} />

        <Flex justifyContent="center" mt={5}>
          <Button
            type="submit"
            variantColor="savColor.2"
            onClick={submitPalette}
          >
            Post dit palet!
          </Button>
        </Flex>
      </FormControl>
    </Box>
  );
}
