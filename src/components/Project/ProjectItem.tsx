import {
  AccordionItem,
  Text,
  AccordionButton,
  Img,
  AccordionIcon,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  CircularProgress,
  Image,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import lodash from "lodash";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { animate, AnimatePresence, motion } from "framer-motion";

type Props = { data };

function ProjectItem({ data }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <AccordionItem p={"20px"}>
      <h2>
        <AccordionButton>
          <Box
            display={"flex"}
            flex={"1"}
            flexDir={["column","row"]}
            alignItems={"center"}
            textAlign="left"
            gap={"1rem"}
          >
            <Img w={"300px"} src={data.images[0]} />{" "}
            <Flex flexDir={"column"} h={"100%"}>
              <Text fontSize={["2rem", "2.5rem", "3rem"]}>
                {lodash.upperFirst(data.name)}
              </Text>
              <Flex wrap={"wrap"} gap={"10px"} mt={"10px"} w={"100%"}>
                {data.technologies.map((element, idx) => {
                  return <Img src={element} />;
                })}
              </Flex>
            </Flex>
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Heading fontSize={"2rem"} mb={"10px"}>
          Description
        </Heading>
        {lodash.upperFirst(data.description)}
      </AccordionPanel>
      <AccordionPanel pb={4}>
        <Heading fontSize={"2rem"} mb={"10px"}>
          What I learned
        </Heading>
        {lodash.upperFirst(data.learned)}
      </AccordionPanel>
      <AccordionPanel pb={4}>
        <Heading fontSize={"2rem"} mb={"10px"}>
          Screenshots
        </Heading>
        {/* gallery */}
        <Flex
          flexDir={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Flex overflow={'hidden'}>
            <AnimatePresence>
              <motion.img
                key={selectedImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                src={data.images[selectedImage]}
                width={"100%"}
                height={"100%"}
              />
            </AnimatePresence>
          </Flex>
          <Flex alignItems={"center"} gap={"5px"} mt={"1rem"}>
            <Button
              leftIcon={<ArrowBackIcon />}
              colorScheme="teal"
              variant="outline"
              onClick={(e) =>
                setSelectedImage((prev) =>
                  prev - 1 < 0 ? data.images.length - 1 : prev - 1
                )
              }
            >
              Previous
            </Button>
            <Button
              rightIcon={<ArrowForwardIcon />}
              colorScheme="teal"
              variant="outline"
              onClick={(e) =>
                setSelectedImage((prev) =>
                  prev + 1 > data.images.length - 1 ? 0 : prev + 1
                )
              }
            >
              Next
            </Button>
          </Flex>
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}

export default ProjectItem;
