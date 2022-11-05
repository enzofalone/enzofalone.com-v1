import {
  Link as ChakraLink,
  useColorMode,
  IconButton,
  Flex,
  Text,
  Icon,
  Image,
  Box,
  Button,
  useColorModeValue,
  Hide,
  Show,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  VStack,
  StackDivider,
  chakra,
} from "@chakra-ui/react";
import {
  SunIcon,
  MoonIcon,
  ChevronDownIcon,
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import { motion, isValidMotionProp, m, AnimatePresence } from "framer-motion";
import theme from "../../theme";
import { NavbarLogo } from "./NavbarLogo";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

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
            >
              <ChakraLink
                as={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={"#home"}
                marginEnd={3}
              >
                Home
              </ChakraLink>
              <ChakraLink
                as={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={"#about"}
                marginEnd={3}
              >
                About
              </ChakraLink>
              <ChakraLink
                as={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={"#projects"}
                marginEnd={3}
              >
                Projects
              </ChakraLink>
              <ChakraLink
                as={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href={"#contact"}
                // marginEnd={3}
              >
                Contact
              </ChakraLink>
            </Flex>
          </Hide>

          {/* <IconButton
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          aria-label="Toggle Theme"
          colorScheme="purple"
          onClick={toggleColorMode}
        /> */}
          {/* mobile menu (TODO: redesign this ew) */}
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
                <MenuItem as={"a"} href={"#home"}>
                  Home
                </MenuItem>
                <MenuItem as={"a"} href={"#about"}>
                  About
                </MenuItem>
                <MenuItem as={"a"} href={"#projects"}>
                  Projects
                </MenuItem>
                <MenuItem as={"a"} href={"#contact"}>
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

