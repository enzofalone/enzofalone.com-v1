import {
  CircularProgress,
  Flex,
  Heading,
  HStack,
  Image as ChakraImage,
  Link as ChakraLink,
  Text,
} from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import theme from '../../theme';
import ResumeButton from './ResumeButton';
import { SocialMediaIcon } from './SocialMediaIcon';

const socialMedia: any = {
  github: 'https://github.com/enzofalone',
  linkedin: 'https://www.linkedin.com/in/enzofalone',
  email: 'mailto:enzofalone123@gmail.com',
};

export const Hero = () => {
  return (
    <AnimatePresence>
      <Flex
        id={'hero'}
        as={motion.div}
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        bgColor={theme.colors.section1}
        maxW={theme.maxWidth}
        mx={'auto'}
        mt={10}
        w="100%"
        justifyContent={['center', 'space-between', 'space-between']}
        alignItems="center"
        flexDir={['column', 'row']}
        bgGradient="linear(to-l, heroGradientStart, heroGradientEnd)"
        bgClip="text"
      >
        <Flex as={'div'} flexDir={'column'} mb={[5, 0]}>
          <Heading fontSize={['3rem']} textAlign={['center', 'left']}>
            Enzo Falone
          </Heading>
          <Text fontSize={['1.5rem']} align={['center', 'left']} m={0}>
            Aspiring Software Engineer
          </Text>
          <Flex flexDir={'column'} w={['100%', '70%', '60%']}>
            {/* Resume button */}
            <ResumeButton />
            {/* Social media buttons */}
            <HStack
              w={'100%'}
              justifyContent={['center', 'flex-start']}
              gap={2}
            >
              <SocialMediaIcon
                label={'enzofalone'}
                mediaLink={socialMedia.github}
                imgSrc={'/icons/github.svg'}
              />
              <SocialMediaIcon
                label={'Enzo Falone'}
                mediaLink={socialMedia.linkedin}
                imgSrc={'/icons/linkedin.svg'}
              />
              <SocialMediaIcon
                label={'enzofalone123@gmail.com'}
                mediaLink={socialMedia.email}
                imgSrc={'/icons/gmail.svg'}
              />
            </HStack>
          </Flex>
        </Flex>

        {/* My face or weird image (or both) */}
        <ChakraImage
          fallback={<CircularProgress isIndeterminate color="blue.300" />}
          src="https://media.licdn.com/dms/image/C4E03AQFJNP4LPLHKcQ/profile-displayphoto-shrink_800_800/0/1659799994698?e=1698278400&v=beta&t=0hzbX5XsvRXTNH9y0k_lqC-kLVyNklO6vBwbdG_vLqc"
          w={['250px']}
          h={['250px']}
          borderRadius={'9999px'}
        ></ChakraImage>
      </Flex>
    </AnimatePresence>
  );
};
