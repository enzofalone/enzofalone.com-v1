import { AddIcon } from "@chakra-ui/icons";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Divider,
  Flex,
  Heading,
  Img,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import theme from "../../theme";
import ProjectList from "./ProjectList";

type Props = {};

function Projects({}: Props) {
  return (
    <Flex
      w={"100vw"}
      id={"projects"}
      zIndex={1}
      bgColor={theme.colors.section3}
      mt={"-40px"}
    >
      <Flex
        w={"100%"}
        px={theme.spacing.main}
        pb={"30px"}
        flexDir={"column"}
        alignItems={["center", "flex-start"]}
      >
        <Flex mb={"40px"}>
          <Heading fontSize={["2rem", "3rem", "4rem"]}>Projects</Heading>
        </Flex>
        {/* <Divider my={10} /> */}
        <ProjectList />
      </Flex>
    </Flex>
  );
}

export default Projects;
