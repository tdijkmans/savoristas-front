import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { logOut } from "../../store/user/actions"
import { selectUser } from "../../store/user/selectors"

import { Box, Link, Avatar, AvatarBadge } from "@chakra-ui/core"

export default function LoggedIn() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser)
  return (
    <Box>
      <Avatar
        // float="right"
        name={user.name}
        src={user.image}
        size="sm"
        bg="savColor.2"
        color="savColor.5"
      >
        <AvatarBadge size="1.25em" bg="green.500" />
      </Avatar>
      <Link size="xs">{user.name}</Link>

      <Link m={20} onClick={() => dispatch(logOut())}>
        Logout
      </Link>
    </Box>
  )
}
