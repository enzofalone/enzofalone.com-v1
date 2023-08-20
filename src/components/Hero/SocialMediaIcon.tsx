import {
  Tooltip,
  Image as ChakraImage,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

type Props = {
  label: string;
  mediaLink: string;
  imgSrc: string;
};

export const SocialMediaIcon = ({ label, mediaLink, imgSrc }: Props) => {
  return (
    <Tooltip label={label}>
      <ChakraLink
        href={mediaLink}
        target={'_blank'}
        as={motion.a}
        whileHover={{ scale: 1.1 }}
        rel="noopener noreferrer"
      >
        <ChakraImage w={'3rem'} src={imgSrc} />
      </ChakraLink>
    </Tooltip>
  );
};
