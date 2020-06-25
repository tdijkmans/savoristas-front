import React, { useState } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Text,
  Link,
} from "@chakra-ui/core";
import Login from "./Login";
import Signup from "./Signup";

export default function Drawermenu() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const [member, setMember] = useState(true);

  return (
    <>
      <Link as="button" ref={btnRef} variantColor="teal" onClick={onOpen}>
        Login
      </Link>
      <Drawer
        size="sm"
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Login</DrawerHeader>

          <DrawerBody>
            {member ? <Login /> : <Signup />}
            <Text
              color="teal.500"
              as="button"
              onClick={(event) => setMember(!member)}
            >
              Nog niet ingeschreven? Klik hier.
            </Text>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
