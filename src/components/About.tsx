import { Divider, Flex, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import theme from '../theme';
import Container from './Container';

type Props = {};

export default function About({}: Props) {
  return (
    <Flex
      w={'100vw'}
      id={'about'}
      mb={'-2'}
      zIndex={1}
      bgColor={theme.colors.section2}
    >
      <Container>
        <Flex
          as={motion.div}
          initial={{ opacity: 0, x: '60%' }}
          whileInView={{ opacity: 1, x: 0 }}
          bgColor={theme.colors.sectionBackground}
          flexDir={'column'}
          p={10}
          borderRadius={'10px'}
        >
          <Heading fontSize={['2rem', '2.5rem']} mb={'30px'}>About Me</Heading>
          <Divider mb={'30px'} />
          <Flex flexDir={'column'}>
            <Text fontSize={'xl'}>
              My name is Enzo Falone and I was born in Venezuela. I came to the
              United States in 2017 to begin a new life and pursue my passion of
              being a Software Engineer!
            </Text>
            <br />
            <Text fontSize={'xl'}>
              My passion is to help individuals and communities to gain
              knowledge or succeed in their daily lives with tools I developed
              with my software engineering skills. Writing readable, scalable,
              and efficient code for teammates to also maintain and build on top
              of it is one of my primary objectives as a software engineer!
            </Text>
            <br />
            <Text fontSize={'xl'}>
              My hobbies include playing rhythm games, creating games and
              motorcycles!
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
}
