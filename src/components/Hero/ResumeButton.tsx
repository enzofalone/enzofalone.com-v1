import { ExternalLinkIcon } from '@chakra-ui/icons';
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';

const RESUME_LINK: string = 'https://docs.google.com/document/d/1WkkNf5YDsDhgbdJ7gUb-p9VhklDdLZ1C/edit?usp=sharing&ouid=117322661560044784923&rtpof=true&sd=true';

type Props = {};

function ResumeButton(props: Props) {
  return (
    <Button
      w={'300px'}
      mx={['auto', '0', '0']}
      as={motion.a}
      whileTap={{ scale: 0.99 }}
      whileHover={{ scale: 1.01 }}
      size={'lg'}
      href={RESUME_LINK}
      target={'_blank'}
      rel="noopener noreferrer"
      colorScheme="facebook"
      my={5}
    >
      Resume <ExternalLinkIcon ml="10px" />
    </Button>
  );
}

export default ResumeButton;
