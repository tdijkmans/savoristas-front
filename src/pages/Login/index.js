import React, { useState } from "react";

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Flex,
} from "@chakra-ui/core";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function submitForm(event) {
    console.log(password, email);
    event.preventDefault();

    setEmail("");
    setPassword("");
  }

  // useEffect(() => {
  //   if (token !== null) {
  //     history.push("/");
  //   }
  // }, [token, history]);

  return (
    <Flex minHeight="50vh" align="center" justifyContent="center">
      <Box padding={50} bg="teal.500">
        <form>
          <FormControl isRequired>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input
              value={email}
              type="email"
              placeholder="Enter your email address"
              onChange={(event) => setEmail(event.target.value)}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              value={password}
              type="password"
              placeholder="Enter your password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </FormControl>

          <Flex justifyContent="center" mt={5}>
            <Button variantColor="red" onClick={submitForm}>
              Log in
            </Button>
          </Flex>
        </form>
      </Box>
    </Flex>
  );
}
