import React from "react";
import { Box, Divider, Grid } from "@chakra-ui/core";

export default function Filterresult({ filterResult }) {
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
                lineHeight="200px"
                p={2}
                fontSize={50}
                textAlign="center"
                color="green.600"
              >
                {filterResult}
              </Box>
            </Box>
          </Grid>
          <Box pt={3} px={3} fontWeight="semibold" color="green.600">
            recepten voor dit palet.
            <Divider />
          </Box>
          <Box pr={3} pl={3} color="#5a6268"></Box>
        </Box>
      }
    </Box>
  );
}
