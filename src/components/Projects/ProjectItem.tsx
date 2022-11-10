import {
  AccordionItem,
  Text,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  Flex,
  Heading,
  CircularProgress,
  Image as ChakraImage,
  Link as ChakraLink,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import lodash from "lodash";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import _ from "lodash";

type Props = { data };

// TODO: add links that are stored in projects.json

function ProjectItem({ data }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <AccordionItem p={"20px"}>
      {AccordionHeader(data)}
      {/* Description section */}
      {data.description ? (
        <AccordionPanel pb={4}>
          <Heading fontSize={"1.5rem"} mb={"10px"}>
            Description
          </Heading>
          <Text fontSize={"1.2rem"}>{lodash.upperFirst(data.description)}</Text>
        </AccordionPanel>
      ) : (
        <></>
      )}
      {/* What I learned section */}
      {data.learned ? (
        <AccordionPanel pb={4}>
          <Heading fontSize={"1.5rem"} mb={"10px"}>
            What I learned
          </Heading>
          <Text fontSize={"1.2rem"}>{lodash.upperFirst(data.learned)}</Text>
        </AccordionPanel>
      ) : (
        <></>
      )}
      {/* Screenshot gallery */}
      <AccordionPanel pb={4}>
        <Heading fontSize={"1.5rem"} mb={"10px"}>
          Screenshots
        </Heading>
        {/* gallery */}
        {Gallery(selectedImage, data, setSelectedImage)}
      </AccordionPanel>
    </AccordionItem>
  );
}

function AccordionHeader(data: any) {
  return (
    <h2>
      <AccordionButton flexDir={["column", "row"]}>
        <Box
          display={"flex"}
          flex={"1"}
          flexDir={["column", "row"]}
          // alignItems={"center"}

          textAlign="left"
          gap={"1rem"}
          w={"100%"}
          h={"100%"}
        >
          <ChakraImage maxW={"300px"} maxH={"200px"} src={data.images[0]} />{" "}
          <Flex flexDir={"column"} h={"100%"}>
            <Heading fontSize={["1rem", "1.5rem", "2rem"]}>
              {lodash.upperFirst(data.name)}
            </Heading>
            <Flex wrap={"wrap"} gap={"10px"} mt={"10px"} w={"100%"}>
              {data.technologies.map((element, idx) => {
                return <ChakraImage key={idx} src={element} />;
              })}
            </Flex>
            <Flex wrap={"wrap"} gap={"10px"} mt={"10px"} w={"100%"}>
              {Object.keys(data.links).map((element, idx) => {
                return (
                  <ChakraLink
                    fontSize={"1.3rem"}
                    color={"blue.300"}
                    href={data[element]}
                    target={"_blank"}
                    rel="noopener noreferrer"
                  >
                    {_.upperFirst(element)}
                  </ChakraLink>
                );
              })}
            </Flex>
          </Flex>
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
  );
}

function Gallery(
  selectedImage: number,
  data: any,
  setSelectedImage: React.Dispatch<React.SetStateAction<number>>
) {
  return (
    // Images
    <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
      <Flex
        overflow={"hidden"}
        w={"100%"}
        h={"100%"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <ChakraImage
          loading={"lazy"}
          key={selectedImage}
          fallback={<CircularProgress isIndeterminate color="blue.300" />}
          src={data.images[selectedImage]}
        />
      </Flex>
      {/* Previous/Next buttons */}
      {data.images.length > 1 ? (
        <>
          <Flex alignItems={"center"} gap={"5px"} mt={"1rem"}>
            {selectedImage + 1} of {data.images.length}
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
          </Flex>{" "}
        </>
      ) : (
        <></>
      )}
    </Flex>
  );
}
export default ProjectItem;
