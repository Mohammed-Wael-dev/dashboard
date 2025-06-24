import { Box, Button, Heading, Text,Image } from "@chakra-ui/react";
import googleLogo from "../../assets/googleLogo.webp";
import { FormContent } from "./FormContent";

export const SignInForm = () => {
  return (
    <Box maxW="400px">
      <Heading as="h2" fontWeight="semibold" fontSize="2rem" mb={4}>
        Sign In
      </Heading>
      <Text mb="40px" fontSize="0.8rem" color="text.secondary">Enter your email and password to sign in!</Text>
      <Button py="25px" bgColor="bg.secondary" rounded="2xl" w="100%">
        <Image loading="lazy" w="15px" src={googleLogo} />
        <Text ms="5px" fontSize="0.8rem" color="text.primary">Sign in with Google</Text>
      </Button>
      <Box pos="relative" my="30px">
        <Text
        textAlign="center"
          pos="absolute"
          top="-12px"
          left="50%"
          transform="translateX(-50%)"
          w="25px"
          h="25px"
          bgColor="bg.primary"
          color="text.secondary"
          rounded="full"
        >
          or
        </Text>
        <Box bgColor="brand.lightGray" display="block" w="100%" h="2px"></Box>
      </Box>
      <FormContent />
    </Box>
  );
};
