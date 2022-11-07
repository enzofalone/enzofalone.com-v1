import { motion } from "framer-motion";
import { Link as ChakraLink } from "@chakra-ui/react";
import { scrollIntoSection } from "./Navbar";

interface NavbarItem {
  title: string;
}

export const NavbarElement = ({ title }: NavbarItem) => {

  return (
    <ChakraLink
      as={motion.a}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={"/"}
      fontSize={'xl'}
      onClick={(e) => scrollIntoSection(e, title)}
    >
      {title}
    </ChakraLink>
  );
};
