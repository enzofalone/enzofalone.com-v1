import { Flex } from '@chakra-ui/react';
import theme from '../../theme';
import Container from '../Container';
import ProjectList from './ProjectList';

type Props = {};

function Projects({}: Props) {
  return (
    <Flex
      w={'100vw'}
      id={'projects'}
      zIndex={1}
      bgColor={theme.colors.section3}
      mt={'-40px'}
    >
      <Container flexDir={'column'} alignItems={['center', 'flex-start']}>
        <ProjectList />
      </Container>
    </Flex>
  );
}

export default Projects;
