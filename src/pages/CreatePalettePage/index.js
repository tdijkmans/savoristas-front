import React from "react";

import CreatePaletteForm from "../../components/CreatePaletteForm";

import { Box, Text } from "@chakra-ui/core";

export default function CreatePalettePage() {
  return (
    <Box bg="#F7F3E7">
      <Box width="80%" marginLeft="auto" marginRight="auto">
        <Text p={2} fontSize="4xl">
          Post je eigen palet.
        </Text>
        <CreatePaletteForm />
      </Box>
    </Box>
  );
}
