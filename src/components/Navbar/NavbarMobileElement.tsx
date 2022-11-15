import { Button } from "@chakra-ui/react";
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
    <Button

      borderRadius={0}
      w={"100%"}
      flexGrow={1}
      onClick={(e) => {
        setShowMobileMenu(false);
        scrollIntoSection(e, name);
        
      }}
    >
      {_.upperFirst(name)}
    </Button>
  );
}
