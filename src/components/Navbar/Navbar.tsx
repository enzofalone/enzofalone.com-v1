import {
  Link as ChakraLink,
  Flex,
  Hide,
  Menu,
  MenuButton,
  Button,
  MenuList,
  Container,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import theme from "../../theme";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarElement } from "./NavbarElement";
import { useEffect, useState } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NavbarMobileElement from "./NavbarMobileElement";

export const scrollIntoSection = (e, tagName: string) => {
  let element = document.getElementById(tagName.toLowerCase());
  e.preventDefault();
  setTimeout(() => {
    element && element.scrollIntoView({ behavior: "smooth" });
  }, 0);
};

export const Navbar = () => {
  const NAVBAR_HEIGHT: number = 64;

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  let navbarStyle = {};

  const handleScroll = () => {
    let scrollPosition = window.scrollY;

    setScrollY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, true);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <Flex position="fixed" alignItems={'center'} top={4} right={4}>
    <>
      <Flex
        w={"100%"}
        h={"64px"}
        minH={"64px"}
        style={
          scrollY > NAVBAR_HEIGHT
            ? { boxShadow: "0px 6px 20px -5px rgba(0,0,0,0.5)" }
            : {}
        }
        transition={"box-shadow 300ms"}
        alignItems={"center"}
        as={motion.div}
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        zIndex={4}
        px={theme.spacing.main}
        py="5"
        justify="space-between"
        bgColor={theme.colors.section1}
        pos={"fixed"}
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
            <Flex>
              <Menu>
                <MenuButton
                  onClick={(e) => setShowMobileMenu((prev) => !prev)}
                  as={Button}
                  variant={"ghost"}
                  aria-label={"Menu"}
                  style={{ cursor: "pointer" }}
                >
                  <HamburgerIcon />
                </MenuButton>
                {showMobileMenu ? (
                  <Flex
                    top={`${NAVBAR_HEIGHT}px`}
                    left={0}
                    w={"100%"}
                    h={`calc(100vh - ${NAVBAR_HEIGHT}px) `}
                    position={"fixed"}
                    bgColor={theme.colors.sectionBackground}
                    zIndex={"5"}
                  >
                    <Flex w={"100%"} flexDir={"column"} h={"100%"}>
                      <NavbarMobileElement
                        setShowMobileMenu={setShowMobileMenu}
                        name={"home"}
                      />
                      <NavbarMobileElement
                        setShowMobileMenu={setShowMobileMenu}
                        name={"about"}
                      />
                      <NavbarMobileElement
                        setShowMobileMenu={setShowMobileMenu}
                        name={"projects"}
                      />
                      <NavbarMobileElement
                        setShowMobileMenu={setShowMobileMenu}
                        name={"contact"}
                      />
                    </Flex>
                  </Flex>
                ) : (
                  <></>
                )}
              </Menu>
            </Flex>
          </Hide>
        </Flex>
      </Flex>
      <Container w={"100%"} h={"64px"}></Container>
    </>
  );
};
