import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Text,
  Link as ChakraLink,
  Image as ChakraImage,
} from "@chakra-ui/react";
import theme from "../theme";

export const Hero = () => {
  const RESUME_LINK: string = "https://bit.ly/3FydEG0";

  return (
    <Flex
      bgColor={theme.colors.section1}
      px={theme.spacing.main}
      w={"100%"}
      h={"100%"}
      id={'home'}
      justifyContent="space-between"
      alignItems="center"
      flexDir={["column", "row", "row"]}
      height="100vh"
      bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
      bgClip="text"
    >
      <Flex flexDir={"column"} gap={"1rem"} mb={[5, 0, 0]}>
        <Heading fontSize={["3rem", "4rem", "5rem"]}>
          Enzo
          <br />
          Falone
        </Heading>
        <Text fontSize={["1rem", "1.5rem", "2rem"]}>
          Aspiring Software Engineer
        </Text>
        <Flex>
          {/* resume button */}
          <Button
            as={"a"}
            size={"lg"}
            href={RESUME_LINK}
            target={"_blank"}
            rel="noopener noreferrer"
            colorScheme="blue"
            variant="outline"
            px={50}
            my={5}
          >
            Resume <ExternalLinkIcon ml="10px" />
          </Button>
        </Flex>
      </Flex>
      {/* My face or weird image (or both) */}
      <ChakraImage
        src="https://avatars.githubusercontent.com/u/20959424?v=4"
        w={["250px", "300px", "350px", "400px"]}
        h={["300px", "350px", "400px", "450px"]}
        ml={[3, 0, 0]}
        objectFit="cover"
        borderRadius={10}
        bgColor="blue.400"
      ></ChakraImage>
    </Flex>
  );
};

// Hero.defaultProps = {
//   title: "with-chakra-ui-typescript",
// };
