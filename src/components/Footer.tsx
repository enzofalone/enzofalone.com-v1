import { Flex, FlexProps } from "@chakra-ui/react";

export const Footer = (props: FlexProps) => (
  <Flex
    as="footer"
    alignItems={"center"}
    justifyContent={"center"}
    py="1.2rem"
    {...props}
  />
);
