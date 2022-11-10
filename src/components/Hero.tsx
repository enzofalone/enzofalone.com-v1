import { EmailIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Flex,
  Heading,
  Text,
  Image as ChakraImage,
  HStack,
  Tooltip,
  CircularProgress,
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import theme from "../theme";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export const Hero = () => {
  const RESUME_LINK: string = "/resume.pdf"; //"https://bit.ly/3FydEG0";
  const socialMedia: any = {
    github: "https://github.com/enzofalone",
    linkedin: "https://www.linkedin.com/in/enzofalone",
    email: "mailto:enzofalone123@gmail.com",
  };

  return (
    <AnimatePresence>
      <Flex
        as={motion.div}
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        mt={10}
        bgColor={theme.colors.section1}
        px={theme.spacing.main}
        w={"100%"}
        h={"100%"}
        id={"home"}
        justifyContent="space-between"
        alignItems="center"
        flexDir={["column", "row", "row", "row"]}
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
          <Flex flexDir={"column"} w={["100%", "100%", "70%", "60%"]}>
            {/* resume button */}
            <Button
              w={"100%"}
              as={motion.a}
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
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
            {/* social media buttons */}
            {/* <Flex flexDir={'row'} justifyContent={'space-between'}> */}
            <HStack
              w={"100%"}
              // justify={"space-between"}
              justifyContent={["center", "flex-start"]}
              gap={2}
            >
              <Tooltip label={socialMedia.github}>
                <Button
                  as={motion.a}
                  href={socialMedia.github}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  colorScheme="blue"
                >
                  <FaGithub />
                </Button>
              </Tooltip>
              <Tooltip label={socialMedia.linkedin}>
                <Button
                  as={motion.a}
                  href={socialMedia.linkedin}
                  target={"_blank"}
                  rel="noopener noreferrer"
                  colorScheme="blue"
                >
                  <FaLinkedin />
                </Button>
              </Tooltip>
            </HStack>
          </Flex>
        </Flex>

        {/* My face or weird image (or both) */}
        <ChakraImage
          fallback={<CircularProgress isIndeterminate color="blue.300" />}
          src="https://avatars.githubusercontent.com/u/20959424?v=4"
          w={["250px", "300px", "350px", "400px"]}
          h={["300px", "350px", "400px", "450px"]}
          ml={[3, 0, 0]}
          objectFit="cover"
          borderRadius={10}
          bgColor="blue.400"
        ></ChakraImage>
      </Flex>
    </AnimatePresence>
  );
};
