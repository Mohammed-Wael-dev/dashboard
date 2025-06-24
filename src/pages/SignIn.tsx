import { Flex, Box, IconButton } from "@chakra-ui/react";
import { SignInFormContainer } from "../components/SignIn/SignInContainer";
import SignInInformation from "../assets/signInInformation.webp";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { Footer } from "../components/layout/Footer";
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
      {colorMode === "light" ? (
        <IconButton
          onClick={() => toggleColorMode()}
          pos="absolute"
          top="2%"
          left="96%"
          w="25px"
          h="25px"
          p="25px"
          rounded="full"
          bgColor="brand.purple"
          color="white"
          cursor="pointer"
        >
          <FontAwesomeIcon icon={faSun} />
        </IconButton>
      ) : (
        <IconButton
          onClick={() => toggleColorMode()}
          pos="absolute"
          top="2%"
          left="96%"
          w="25px"
          h="25px"
          p="25px"
          rounded="full"
          bgColor="brand.purple"
          color="white"
          cursor="pointer"
        >
          <FontAwesomeIcon icon={faMoon} />
        </IconButton>
      )}
    </Box>
  );
};
