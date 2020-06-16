import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Link } from "@chakra-ui/core";

export default function LoggedOut() {
  return (
    <Box>
      <Link as={NavLink} to="/login">
        Login
      </Link>

      <Link as={NavLink} to="/signup" m={20}>
        Sign up
      </Link>
    </Box>
  );
}
