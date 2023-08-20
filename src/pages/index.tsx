import {
  Link as ChakraLink,
  Text,
  Image,
  Flex,
  Container,
} from "@chakra-ui/react";

import { Hero } from "../components/Hero/Hero";
import { Navbar } from "../components/Navbar/Navbar";
import { Footer } from "../components/Footer";
import About from "../components/About";
import theme from "../theme";
import Projects from "../components/Projects/Projects";

const Index = () => {
  return (
    <Flex
      flexDir={"column"}
      overflow={"hidden"}
      bgColor={theme.colors.section1}
      
    >
      <Navbar />
      <Flex w={"100%"} flexDir={"column"} bottom={0} overflowY={"scroll"} >
        <Hero />
        <Image w={"100vw"} src="/waves/first_wave0.svg" />
        <About />
        <Image
          transform={{ base: "rotate(180deg)" }}
          w={"100vw"}
          zIndex={0}
          my={-1}
          src="/waves/first_wave1.svg"
          bgColor={theme.colors.section3}
        />
        <Projects />
        <Footer>
          <Text fontSize={"1.2rem"}>
            {new Date().getFullYear()} &copy; Created by{" "}
            <ChakraLink
              href={"https://github.com/enzofalone"}
              target={"_blank"}
              rel="noopener noreferrer"
              textDecoration={"underline"}
            >
              Enzo Falone
            </ChakraLink>
          </Text>
        </Footer>
      </Flex>
    </Flex>
  );
};

export default Index;
