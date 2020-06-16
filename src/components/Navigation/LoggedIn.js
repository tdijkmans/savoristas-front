import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { logOut } from "../../store/user/actions";
import { selectUser } from "../../store/user/selectors";

import { Box, Link } from "@chakra-ui/core";

export default function LoggedIn() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <Box>
      <Link>{user.name}</Link>
      <Link m={20} onClick={() => dispatch(logOut())}>
        Logout
      </Link>
    </Box>
  );
}
