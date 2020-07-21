import React from "react";

import CreatePaletteForm from "../../components/CreatePaletteForm";

import { Box, Text } from "@chakra-ui/core";

export default function CreatePalettePage() {
  return (
    <Box>
      <Box width="80%" marginLeft="auto" marginRight="auto">
        <Text p={2} fontSize="4xl" color="savColor.5">
          Post je eigen palet.
        </Text>
        <CreatePaletteForm />
      </Box>
    </Box>
  );
}
