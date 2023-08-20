import { HamburgerIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  Flex,
  Hide,
  Menu,
  MenuButton,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import theme from '../../theme';
import { NavbarElement } from './NavbarElement';
import { NavbarLogo } from './NavbarLogo';
import NavbarMobileElement from './NavbarMobileElement';

export const scrollIntoSection = (e, tagName: string) => {
  let element = document.getElementById(tagName.toLowerCase());
  e.preventDefault();
  setTimeout(() => {
    element && element.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  }, 100);
};

export const Navbar = () => {
  const NAVBAR_HEIGHT: number = 64;

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const menuElements = ['home', 'about', 'projects'];

  const handleScroll = () => {
    let scrollPosition = window.scrollY;

    setScrollY(scrollPosition);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, true);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <Flex
        w={'100%'}
        h={'64px'}
        minH={'64px'}
        style={
          scrollY > NAVBAR_HEIGHT
            ? { boxShadow: '0px 6px 20px -5px rgba(0,0,0,0.5)' }
            : {}
        }
        transition={'box-shadow 300ms'}
        as={motion.div}
        initial={{ opacity: 0, y: -300 }}
        animate={{ opacity: 1, y: 0 }}
        zIndex={'10'}
        mx="auto"
        py="5"
        bgColor={theme.colors.section1}
        pos={'fixed'}
      >
        <Flex maxW={theme.maxWidth} px={[3,0]} justify="space-between" alignItems={'center'} mx='auto' grow={1}>
          <NavbarLogo />
          {/* desktop */}
          <Flex alignItems={'center'}>
            <Hide below={'md'}>
              <Flex
                gap={4}
              >
                {menuElements.map((name, idx) => {
                  return <NavbarElement key={idx} title={name} />;
                })}
              </Flex>
            </Hide>

            <Hide above={'md'}>
              {/* mobile */}
              <Flex>
                <Menu>
                  <MenuButton
                    onClick={(e) => setShowMobileMenu((prev) => !prev)}
                    as={Button}
                    variant={'ghost'}
                    aria-label={'Menu'}
                    style={{ cursor: 'pointer' }}
                  >
                    <HamburgerIcon />
                  </MenuButton>
                  {showMobileMenu ? (
                    <Flex
                      top={`${NAVBAR_HEIGHT}px`}
                      left={0}
                      w={'100%'}
                      h={`calc(100vh - ${NAVBAR_HEIGHT}px) `}
                      position={'fixed'}
                      bgColor={theme.colors.sectionBackground}
                      zIndex={'5'}
                    >
                      <Flex w={'100%'} flexDir={'column'} h={'100%'}>
                        {menuElements.map((name, idx) => {
                          return (
                            <NavbarMobileElement
                              key={idx}
                              setShowMobileMenu={setShowMobileMenu}
                              name={name}
                            />
                          );
                        })}
                      </Flex>
                    </Flex>
                  ) : (
                    <></>
                  )}
                </Menu>
              </Flex>
            </Hide>
          </Flex>
        </Flex>
      </Flex>
      <Container w={'100%'} h={'64px'}></Container>
    </>
  );
};
