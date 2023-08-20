import { Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";
import _ from "lodash";
import { scrollIntoSection } from "./Navbar";

interface NavbarItem {
  title: string;
}

export const NavbarElement = ({ title }: NavbarItem) => {
  return (
    <ChakraLink
      as={motion.a}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.95 }}
      href={"/"}
      fontSize={"xl"}
      onClick={(e) => scrollIntoSection(e, title)}
    >
      {_.upperFirst(title)}
    </ChakraLink>
  );
};
