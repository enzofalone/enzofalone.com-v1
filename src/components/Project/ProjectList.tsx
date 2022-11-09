import {
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  Img,
  AccordionIcon,
  AccordionPanel,
  Box,
  Text,
} from "@chakra-ui/react";

import projectsJson from "../../../public/json/projects.json";
import theme from "../../theme";
import ProjectItem from "./ProjectItem";

type Props = {};

function ProjectList({}: Props) {
  return (
    <Flex
      flexDir={"column"}
      w={"100%"}
      bgColor={theme.colors.sectionBackground}
      borderRadius={"20px"}
      py={'30px'}
      px={['20px','30px','40px']}
    >
      <Accordion defaultIndex={[0]} allowMultiple>
        {projectsJson.projects.map((element, idx) => {
          return <ProjectItem key={idx} data={element} />;
        })}
      </Accordion>
    </Flex>
  );
}

export default ProjectList;
