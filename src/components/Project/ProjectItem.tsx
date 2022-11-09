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
  Button,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import lodash from "lodash";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";
import { animate, AnimatePresence, motion } from "framer-motion";

type Props = { data };

function ProjectItem({ data }: Props) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [imgsLoaded, setImgsLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };

    Promise.all(data.images.map((image) => loadImage(image)))
      .then(() => setImgsLoaded(true))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <AccordionItem p={"20px"}>
      {AccordionHeader(data)}
      {/* Description section */}
      <AccordionPanel pb={4}>
        <Heading fontSize={"2rem"} mb={"10px"}>
          Description
        </Heading>
        {lodash.upperFirst(data.description)}
      </AccordionPanel>
      {/* What I learned section */}
      <AccordionPanel pb={4}>
        <Heading fontSize={"2rem"} mb={"10px"}>
          What I learned
        </Heading>
        {lodash.upperFirst(data.learned)}
      </AccordionPanel>
      {/* Screenshot gallery */}
      <AccordionPanel pb={4}>
        <Heading fontSize={"2rem"} mb={"10px"}>
          Screenshots
        </Heading>
        {/* gallery */}
        {Gallery(imgsLoaded, selectedImage, data, setSelectedImage)}
      </AccordionPanel>
    </AccordionItem>
  );
}

function AccordionHeader(data: any) {
  return (
    <h2>
      <AccordionButton>
        <Box
          display={"flex"}
          flex={"1"}
          flexDir={["column", "row"]}
          alignItems={"center"}
          textAlign="left"
          gap={"1rem"}
        >
          <ChakraImage w={"300px"} src={data.images[0]} />{" "}
          <Flex flexDir={"column"} h={"100%"}>
            <Text fontSize={["2rem", "2.5rem", "3rem"]}>
              {lodash.upperFirst(data.name)}
            </Text>
            <Flex wrap={"wrap"} gap={"10px"} mt={"10px"} w={"100%"}>
              {data.technologies.map((element, idx) => {
                return <ChakraImage src={element} />;
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
  imgsLoaded: boolean,
  selectedImage: number,
  data: any,
  setSelectedImage: React.Dispatch<React.SetStateAction<number>>
) {
  return (
    <Flex flexDir={"column"} alignItems={"center"} justifyContent={"center"}>
      {ScreenshotGallery(imgsLoaded, selectedImage, data)}
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
      </Flex>
    </Flex>
  );
}

function ScreenshotGallery(
  imgsLoaded: boolean,
  selectedImage: number,
  data: any
) {
  return (
    <Flex
      overflow={"hidden"}
      w={"100%"}
      h={"100%"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <AnimatePresence>
        {imgsLoaded ? (
          <ChakraImage
            key={selectedImage}
            fallback={<CircularProgress isIndeterminate color="blue.300" />}
            src={data.images[selectedImage]}
            width={"100%"}
            height={"100%"}
          />
        ) : (
          <CircularProgress isIndeterminate color="blue.300" />
        )}
      </AnimatePresence>
    </Flex>
  );
}

export default ProjectItem;
