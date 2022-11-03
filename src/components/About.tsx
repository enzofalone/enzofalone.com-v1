import { Container, Divider, Flex, Heading, Text } from "@chakra-ui/react";
import theme from "../theme";

type Props = {};

export default function About({}: Props) {
  return (
    <Flex
      w={"100vw"}
      h={"600px"}
      id={"about"}
      mb={"-2"}
      zIndex={1}
      bgColor={theme.colors.section2}
      pb={20}
    >
      <Flex
        px={theme.spacing.main}
        flexDir={"column"}
        alignItems={["center", "flex-start"]}
      >
        <Heading fontSize={["3rem", "4rem", "5rem"]}>
          About
          <br />
          Me
        </Heading>
        <Divider my={10} />
        <Text fontSize={"larger"}>
          My name is Enzo Falone and I was born in Venezuela. I came to the
          United States in 2017 to begin a new life and pursue my passion of
          being a Software Engineer.
        </Text>
        <br />
        <Text fontSize={"larger"}>
          What pushes me forward in my career is helping individuals to gain
          knowledge or succeed in their daily lives with tools I can make with
          my software engineering skills, writing readable, scalable, and
          efficient code for teammates to also maintain and build on top of it
          which is one of my main goals.
        </Text>
        <br />
        <Text fontSize={"larger"}>
          My hobbies include playing rhythm games, creating games and
          motorcycles!
        </Text>
      </Flex>
    </Flex>
  );
}
