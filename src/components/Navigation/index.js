import React from "react";
import { Flex, Link, Box } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectToken } from "../../store/user/selectors";

import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;

  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="white"
      px={5}
      py={4}
      justifyContent="space-between"
    >
      <Box>
        <NavLink to="/" m={20}>
          Home
        </NavLink>

        <Link m={20}>+ food palette</Link>
        <Link m={20}>+ recipe</Link>
      </Box>
      <Box> {loginLogoutControls}</Box>
    </Flex>
  );
}
