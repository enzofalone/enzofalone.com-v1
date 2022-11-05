import { Container, Divider, Flex, Heading, Text } from "@chakra-ui/react"
import theme from "../theme"

type Props = {}

function Projects({}: Props) {
  return (
    <Flex
      w={"100vw"}
      h={"600px"}
      id={"projects"}
      mt={['-30px','-30px','-70px']}
      zIndex={1}
      bgColor={theme.colors.section3}
      pb={20}
    >
      <Flex
        px={theme.spacing.main}
        flexDir={"column"}
        alignItems={["center", "flex-start"]}
      >
        <Heading fontSize={["3rem", "4rem", "5rem"]}>
          Tools I use        
        </Heading>
        <Divider my={10} />
        <Text fontSize={"larger"}>
          Languages
        </Text>
        <br />
        <Text fontSize={"larger"}>
          My passion is to help individuals and communities to gain
          knowledge or succeed in their daily lives with tools I can make with
          my software engineering skills, writing readable, scalable, and
          efficient code for teammates to also maintain and build on top of it.
        </Text>
        <br />
        <Text fontSize={"larger"}>
          My hobbies include playing rhythm games, creating games and
          motorcycles!
        </Text>
      </Flex>
    </Flex>
  )
}

export default Projects