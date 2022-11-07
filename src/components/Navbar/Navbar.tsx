import {
  Link as ChakraLink,
  useColorMode,
  Flex,
  Button,
  Hide,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../../theme";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarElement } from "./NavbarElement";

export const scrollIntoSection = (e, tagName: string) => {
  let element = document.getElementById(tagName.toLowerCase());
  e.preventDefault();
  element && element.scrollIntoView({ behavior: "smooth" });
  console.log("woosh");
};

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  // const { colorMode, toggleColorMode } = useColorMode();
  // const isDark = colorMode === "dark";

  return (
    // <Flex position="fixed" alignItems={'center'} top={4} right={4}>
    <AnimatePresence>
      <Flex
        as={motion.div}
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        w="100%"
        px={[2, 5, 20, "15vw"]}
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
            <Menu>
              <MenuButton
                ml={4}
                py={3}
                px={3}
                as={Button}
                variant={"ghost"}
                aria-label={"Menu"}
                w={"100%"}
                style={{ cursor: "pointer" }}
                onClick={() => setShowMenu((prevVal) => !prevVal)}
              >
                <HamburgerIcon />
              </MenuButton>
              <MenuList>
                <MenuItem
                  onClick={(e) => {
                    scrollIntoSection(e, "home");
                  }}
                >
                  Home
                </MenuItem>
                <MenuItem
                  as={"a"}
                  href={"/"}
                  onClick={(e) => {
                    scrollIntoSection(e, "about");
                  }}
                >
                  About
                </MenuItem>
                <MenuItem
                  as={"a"}
                  href={"/"}
                  onClick={(e) => {
                    scrollIntoSection(e, "projects");
                  }}
                >
                  Projects
                </MenuItem>
                <MenuItem
                  as={"a"}
                  href={"/"}
                  onClick={(e) => {
                    scrollIntoSection(e, "contact");
                  }}
                >
                  Contact
                </MenuItem>
              </MenuList>
            </Menu>
          </Hide>
        </Flex>
      </Flex>
    </AnimatePresence>
  );
};
