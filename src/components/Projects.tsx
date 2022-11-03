import { Container, Flex } from "@chakra-ui/react"
import theme from "../theme"

type Props = {}

function Projects({}: Props) {
  return (
    <Flex w={"100vw"} h={"600px"} id={'projects'} zIndex={'2'} mt={'-1px'} bgColor={theme.colors.section3}>
      <Container h={'600px'}>hello world</Container>
    </Flex>
  )
}

export default Projects