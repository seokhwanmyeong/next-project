//  Lib
import React from "react";
import { Flex, Heading } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      w="100%"
      h="5rem"
      p="2rem"
      justifyContent="center"
      alignItems="center"
      borderTop="1px solid"
      borderColor="primary.main.bdColor"
    >
      <Heading>FOOTER AREA</Heading>
    </Flex>
  );
};

export default Footer;
