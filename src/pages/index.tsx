import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Image,
  Flex,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer";
import About from "../components/About";
import theme from "../theme";
import Projects from "../components/Projects";

import { useEffect, useState } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      // setScrollY(window.scrollY);
    };

    // just trigger this so that the initial state
    // is updated as soon as the component is mounted
    // related: https://stackoverflow.com/a/63408216
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Flex
      height="100vh"
      overflowX={"hidden"}
      flexDir={"column"}
      bgColor={theme.colors.section1}
    >
      <Navbar />
      <Hero />
      <Image w={"100vw"} src="/first_wave0.svg" />
      <About />
      <Image
        transform={{ base: "rotate(180deg)" }}
        w={"100vw"}
        h={"100%"}
        src="/first_wave1.svg"
        bgColor={theme.colors.section3}
      />
      <Projects />
      <Footer>
        <Text>Footer</Text>
      </Footer>
    </Flex>
  );
};

export default Index;
