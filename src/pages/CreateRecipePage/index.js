import React from "react";

import CreateRecipeForm from "../../components/CreateRecipeForm";

import { Box, Text } from "@chakra-ui/core";

export default function CreateRecipePage() {
  return (
    <Box bg="#F7F3E7">
      <Box width="80%" marginLeft="auto" marginRight="auto">
        <Text p={2} fontSize="4xl">
          Post je eigen recept.
        </Text>
        <CreateRecipeForm />
      </Box>
    </Box>
  );
}
