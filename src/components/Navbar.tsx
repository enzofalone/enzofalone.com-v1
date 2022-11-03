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
import { motion, isValidMotionProp, m } from "framer-motion";
import theme from "../theme";

export const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    // <Flex position="fixed" alignItems={'center'} top={4} right={4}>
    <Flex
      w="100%"
      px={[2, 5, 20, "15vw"]}
      py="5"
      align="center"
      justify="space-between"
      bgColor={theme.colors.section1}
    >
      <Box
        as={motion.div}
        whileTap={{
          scale: 0.8,
          rotate: -90,
        }}
        boxSize={["2rem", "3rem", "3rem"]}
      >
        <Image
          style={{ filter: `${isDark ? "invert(0%)" : "invert(100%)"}` }}
          src={"/navbar_icon.svg"}
        ></Image>
      </Box>
      {/* desktop */}
      <Flex alignItems={"center"}>
        <Hide below={"sm"}>
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
              href={'#contact'}
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
        <Hide above={"sm"}>
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
              <MenuItem as={'a'} href={'#home'}>Home</MenuItem>
              <MenuItem as={'a'} href={'#about'}>About</MenuItem>
              <MenuItem as={'a'} href={'#projects'}>Projects</MenuItem>
              <MenuItem as={'a'} href={'#contact'}>Contact</MenuItem>
              
            </MenuList>
          </Menu>
          {/* {showMenu && (
            <Flex
              w={"100vw"}
              h={"100vh"}
              zIndex={20}
              bgColor={"blue.700"}
              pos={"fixed"}
              top={0}
              left={0}
            >
              <VStack
                w={"100%"}
                divider={<StackDivider borderColor="black" />}
                spacing={2}
                h={"100%"}
              >
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  w="100%"
                  h="12%"
                  onClick={() => setShowMenu((prevVal) => !prevVal)}
                  color={"menuMobile"}
                >
                  <Text fontSize="2xl">Close Menu</Text>
                </Flex>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  w="100%"
                  h="12%"
                  color={"menuMobile"}
                >
                  <Text fontSize="2xl">Home</Text>
                </Flex>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  w="100%"
                  h="12%"
                  color={"menuMobile"}
                >
                  <Text fontSize="2xl">About</Text>
                </Flex>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  w="100%"
                  h="12%"
                  color={"menuMobile"}
                >
                  <Text fontSize="2xl">Projects</Text>
                </Flex>
                <Flex
                  justifyContent={"center"}
                  alignItems={"center"}
                  w="100%"
                  h="12%"
                  color={"menuMobile"}
                >
                  <Text fontSize="2xl">Contact</Text>
                </Flex>
              </VStack>
            </Flex>
          )} */}
        </Hide>
      </Flex>
    </Flex>
  );
};
