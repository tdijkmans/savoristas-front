import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signUp } from "../../store/user/actions";

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Flex,
} from "@chakra-ui/core";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  function submitForm(event) {
    event.preventDefault();
    dispatch(signUp(name, email, password));
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <Flex minHeight="50vh" align="center" justifyContent="center">
      <Box padding={50} bg="savColor.2">
        <form>
          <FormControl isRequired>
            <FormLabel htmlFor="text">Name</FormLabel>
            <Input
              value={name}
              type="text"
              autocomplete="username"
              placeholder="Enter your name"
              onChange={(event) => setName(event.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              value={email}
              type="email"
              autocomplete="username"
              placeholder="Enter your email address"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              value={password}
              type="password"
              autocomplete="current-password"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>

          <Flex justifyContent="center" mt={5}>
            <Button type="submit" variantColor="red" onClick={submitForm}>
              Sign up
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}
