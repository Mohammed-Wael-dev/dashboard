import { Flex, Box, IconButton } from "@chakra-ui/react";
import { SignInFormContainer } from "../components/SignIn/SignInContainer";
import SignInInformation from "../assets/signInInformation.webp";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { Footer } from "../components/Layout/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useColorMode } from "../components/ui/color-mode";

export const SignIn = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const windowWidth = useWindowWidth();
  return (
    <Box bgColor="bg.primary">
      <Flex
        gapX="20px"
        h="100vh"
        ms={{ md: "5%", xl: "20%" }}
        justifyContent="center"
      >
        <SignInFormContainer />
        {windowWidth > 800 && (
          <Box
            bgImage={`url(${SignInInformation})`}
            w="50%"
            bgSize="cover"
            bgPos="center"
          ></Box>
        )}
      </Flex>
      <Box pos="absolute" bottom="0" w="100%">
        <Footer />
      </Box>
      <IconButton
        onClick={toggleColorMode}
        position="fixed"
        top="1rem"
        right="1rem"
        w="40px"
        h="40px"
        p="0"
        rounded="full"
        bgColor="brand.purple"
        color="white"
        aria-label="Toggle color mode"
        zIndex={999}
      >
        <FontAwesomeIcon icon={colorMode === "light" ? faMoon : faSun} />
      </IconButton>
    </Box>
  );
};
