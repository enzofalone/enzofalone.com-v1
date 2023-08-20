import { Flex, FlexProps } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import theme from '../theme';

const Container = (props: FlexProps) => {
  return (
    <Flex maxW={theme.maxWidth} w={'100%'} mx={'auto'} pb={'30px'} {...props}>
      {props.children}
    </Flex>
  );
};

export default Container;
