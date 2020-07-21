import React from "react";

import CreateRecipeForm from "../../components/CreateRecipeForm";

import { Box, Text } from "@chakra-ui/core";

export default function CreateRecipePage() {
  return (
    <Box>
      <Box width="80%" marginLeft="auto" marginRight="auto">
        <Text p={2} fontSize="4xl" color="savColor.5">
          Post je eigen recept.
        </Text>
        <CreateRecipeForm />
      </Box>
    </Box>
  );
}
