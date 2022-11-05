import { Box, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const NavbarLogo = () => {
  return (
    <Box
      as={motion.a}
      whileTap={{
        scale: 0.8,
        rotate: -90,
      }}
      whileHover={{
        scale: 1.1,
      }}
      style={{ cursor: "pointer" }}
      boxSize={["2rem", "3rem", "3rem"]}
      href={'/'}
    >
      <Image
        // style={{ filter: `${isDark ? "invert(0%)" : "invert(100%)"}` }}
        src={"/navbar_icon.svg"}
      ></Image>
    </Box>
  );
};
