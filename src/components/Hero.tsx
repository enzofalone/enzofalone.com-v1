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
  useToast,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import { AnimatePresence, motion } from "framer-motion";
import { FC } from "react";
import theme from "../theme";

const RESUME_LINK: string = "/resume.pdf";

const socialMedia: any = {
  github: "https://github.com/enzofalone",
  linkedin: "https://www.linkedin.com/in/enzofalone",
  email: "mailto:enzofalone123@gmail.com",
};

export const Hero = () => {
  const toast = useToast();

  const showEmailToast = () => {
    toast({
      title: "Copied to clipboard!",
      description: `now ${socialMedia.email} is copied into your clipboard!`,
      status: "success",
      duration: 5000,
      isClosable: true,
    });
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
        id={"home"}
        justifyContent={["none", "space-between"]}
        alignItems="center"
        flexDir={["column", "row", "row", "row"]}
        bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
        bgClip="text"
      >
        <Flex flexDir={"column"} mb={[5, 0, 0]}>
          <Heading fontSize={["3rem", "4rem", "5rem"]}>
            Enzo
            <br />
            Falone
          </Heading>
          <Text fontSize={["1rem", "1.5rem", "2rem"]} m={0}>
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
            <HStack
              w={"100%"}
              justifyContent={["center", "flex-start"]}
              gap={2}
            >
              <SocialMediaIcon
                label={"enzofalone"}
                mediaLink={socialMedia.github}
                imgSrc={"/icons/github.svg"}
              />
              <SocialMediaIcon
                label={"Enzo Falone"}
                mediaLink={socialMedia.linkedin}
                imgSrc={"/icons/linkedin.svg"}
              />

              <SocialMediaIcon
                label={"enzofalone123@gmail.com"}
                mediaLink={socialMedia.email}
                imgSrc={"/icons/gmail.svg"}
              />
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

interface SocialMediaIconProps {
  label: string;
  mediaLink: string;
  imgSrc: string;
}

const SocialMediaIcon: FC<SocialMediaIconProps> = ({
  label,
  mediaLink,
  imgSrc,
}) => {
  return (
    <Tooltip label={label}>
      <ChakraLink
        href={mediaLink}
        target={"_blank"}
        as={motion.a}
        whileHover={{ scale: 1.1 }}
        rel="noopener noreferrer"
      >
        <ChakraImage w={"3rem"} src={imgSrc} />
      </ChakraLink>
    </Tooltip>
  );
};
