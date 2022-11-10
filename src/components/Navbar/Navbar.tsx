import {
  Link as ChakraLink,
  Flex,
  Button,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../../theme";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarElement } from "./NavbarElement";
import Link from "next/link";

export const scrollIntoSection = (e, tagName: string) => {
  let element = document.getElementById(tagName.toLowerCase());
  e.preventDefault();
  element && element.scrollIntoView({ behavior: "smooth" });
  console.log("woosh");
};

export const Navbar = () => {
  return (
    // <Flex position="fixed" alignItems={'center'} top={4} right={4}>
    <AnimatePresence>
      <Flex
        as={motion.div}
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        w="100%"
        px={theme.spacing.main}
        py="5"
        align="center"
        justify="space-between"
        bgColor={theme.colors.section1}
      >
        <NavbarLogo />
        {/* desktop */}
        <Flex alignItems={"center"}>
          <Hide below={"md"}>
            <Flex
              // mr={4}
              gap={4}
            >
              <NavbarElement title={"Home"} />
              <NavbarElement title={"About"} />
              <NavbarElement title={"Projects"} />
              <NavbarElement title={"Contact"} />
            </Flex>
          </Hide>

          <Hide above={"md"}>
            {/* mobile */}
            {/* <Menu>
              <MenuButton
                ml={4}
                py={3}
                px={3}
                as={Button}
                variant={"ghost"}
                aria-label={"Menu"}
                w={"100%"}
                style={{ cursor: "pointer" }}
              >
                <HamburgerIcon />
              </MenuButton>
              <MenuList>
                <ChakraLink href="/#">
                  <MenuItem>Home</MenuItem>
                </ChakraLink>
                <ChakraLink href="/#about">
                  <MenuItem>About</MenuItem>
                </ChakraLink>
                <ChakraLink href="/#projects">
                  <MenuItem>Profile</MenuItem>
                </ChakraLink>
              </MenuList>
            </Menu> */}
          </Hide>
        </Flex>
      </Flex>
    </AnimatePresence>
  );
};
