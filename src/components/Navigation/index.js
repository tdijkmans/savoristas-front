import React from "react";
import { Flex, Link, Box } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <Flex as="nav" bg="teal.500" color="white" px={5} py={4}>
      <Box>
        <NavLink to="/login" m={20}>
          Login
        </NavLink>
        <Link m={20}>+ food palette</Link>
        <Link m={20}>+ recipe</Link>
      </Box>
    </Flex>
  );
}
