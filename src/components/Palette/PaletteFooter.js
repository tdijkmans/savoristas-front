import React from "react"

import { Avatar, Flex, IconButton, Text } from "@chakra-ui/core"
import { BsHeartFill } from "react-icons/bs"

export default function PaletteFooter({ user }) {
  return (
    <Flex
      pb={3}
      fontSize="xs"
      justifyContent="flex"
      px={3}
      justifyContent="space-between"
    >
      <Flex align="center">
        <Avatar
          name={user.name}
          src={user.image}
          size="xs"
          bg="savColor.2"
          color="savColor.5"
        ></Avatar>
        <Text color="savColor.6" px={2}>
          {user.name}
        </Text>
      </Flex>
      <Flex align="center">
        <IconButton size="24px" icon={BsHeartFill} color="savColor.6" pr={1} />
        <Text color="savColor.6" pr={1}>
          {Math.floor(Math.random() * 100) + 1}
        </Text>
        {/* <IconButton
          size="24px"
          icon={BsFillBookmarkFill}
          color="savColor.6"
          pr={1}
        />
        <Text color="savColor.6" pr={1}>
          {Math.floor(Math.random() * 100) + 1}
        </Text> */}
      </Flex>
    </Flex>
  )
}
