import React from "react";
import { Flex, Box } from "@chakra-ui/core";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { selectToken } from "../../store/user/selectors";

import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Navigation() {
  const token = useSelector(selectToken);

  const loginLogoutControls = token ? <LoggedIn /> : <LoggedOut />;
  const postControls = token ? (
    <>
      <NavLink pl={20} m={20} to="/create-palette">
        + Post een palet
      </NavLink>
      <NavLink to="/" m={20}>
        + Post een recept
      </NavLink>{" "}
    </>
  ) : null;

  return (
    <Flex
      as="nav"
      bg="teal.500"
      color="white"
      px={5}
      py={4}
      justifyContent="space-between"
    >
      <Flex w={500} justifyContent="space-between">
        <NavLink w={20} to="/" m={20}>
          Home
        </NavLink>
        {postControls}
      </Flex>
      <Box>{loginLogoutControls}</Box>
    </Flex>
  );
}
