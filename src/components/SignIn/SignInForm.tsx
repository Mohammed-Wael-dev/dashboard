import { Box, Button, Heading, Text,Image } from "@chakra-ui/react";
import googleLogo from "../../assets/googleLogo.webp";
import { FormContent } from "./FormContent";
import { useTranslation } from "react-i18next";
export const SignInForm = () => {
  const { t } = useTranslation();
  return (
    <Box maxW="400px">
      <Heading as="h2" fontWeight="semibold" fontSize="2rem" mb={4}>
        {t("signIn.form.header")}
      </Heading>
      <Text mb="40px" fontSize="0.8rem" color="text.secondary">{t("signIn.form.discription")}</Text>
      <Button py="25px" bgColor="bg.secondary" rounded="2xl" w="100%">
        <Image loading="lazy" w="15px" src={googleLogo} />
        <Text ms="5px" fontSize="0.8rem" color="text.primary">{t("signIn.form.google")}</Text>
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
          {t("signIn.form.or")}
        </Text>
        <Box bgColor="brand.lightGray" display="block" w="100%" h="2px"></Box>
      </Box>
      <FormContent />
    </Box>
  );
};
