import { Button, Text } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import _ from "lodash";
import React from "react";
import { scrollIntoSection } from "./Navbar";

type Props = {};

interface NavbarMobileElementProps {
  name: string;
  setShowMobileMenu: any;
}

export default function NavbarMobileElement({
  name,
  setShowMobileMenu,
}: NavbarMobileElementProps) {
  return (
    <AnimatePresence>
      <Button
        as={motion.div}
        initial={{ scale: 0, opacity: 0, y: '-3rem' }}
        animate={{ scale: 1, opacity: 1, y: '0' }}
        exit={{ scale: 0, opacity: 0, y: '3rem' }}
        zIndex={"5"}
        borderRadius={0}
        w={"100%"}
        flexGrow={1}
        onClick={(e) => {
          setShowMobileMenu(false);
          scrollIntoSection(e, name);
        }}
        cursor={"pointer"}
      >
        <Text fontSize={["2rem"]}>{_.upperFirst(name)}</Text>
      </Button>
    </AnimatePresence>
  );
}
