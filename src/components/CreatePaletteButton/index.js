import React from "react";

import { Box, Divider, Grid } from "@chakra-ui/core";
import { IconButton } from "@chakra-ui/core";

export default function CreatePaletteButton() {
  return (
    <Box as="a" p={3} Width="20%" href="/create-palette">
      {
        <Box
          h={256}
          borderWidth="1px"
          boxShadow="md"
          bg="white"
          borderRadius="4px"
        >
          <Grid templateColumns="3">
            <Box w="100%" h="150px">
              <Box
                textTransform="capitalize"
                lineHeight="200px"
                p={2}
                textAlign="center"
                color="white"
                textShadow="-1px 1px 3px #000000"
              >
                <IconButton size="lg" icon="add" />
              </Box>
            </Box>
          </Grid>
          <Box pt={3} px={3} fontWeight="semibold" color="savColor.3">
            Creëer je eigen palet!
            <Divider />
          </Box>
          <Box pr={3} pl={3}></Box>
        </Box>
      }
    </Box>
  );
}
