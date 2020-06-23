import React from "react";

import { Box, Divider, Grid } from "@chakra-ui/core";
import { IconButton } from "@chakra-ui/core";

export default function CreateRecipeButton() {
  return (
    <Box as="a" p={3} Width="20%" href="/create-recipe">
      <Box
        h={380}
        borderWidth="1px"
        boxShadow="md"
        bg="white"
        borderRadius="4px"
      >
        <Grid templateColumns="3" h={240}>
          <Box w="100%" h="150px">
            <Box
              textTransform="capitalize"
              lineHeight="200px"
              p={2}
              textAlign="center"
              color="white"
            >
              <IconButton size="lg" icon="add" />
            </Box>
          </Box>
        </Grid>
        <Box pt={3} px={3} fontWeight="semibold" color="green.600">
          Creëer je eigen recept!
          <Divider p={2} />
        </Box>
      </Box>
    </Box>
  );
}
