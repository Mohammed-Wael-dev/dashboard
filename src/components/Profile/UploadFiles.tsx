import { Flex, Box, Heading, Text, Icon, Button } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
export const UploadFiles = () => {
  const { t } = useTranslation();
  return (
    <Flex alignItems="center" gapX="20px" h="full">
      <Flex
      cursor="pointer"
        rounded="2xl"
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        gapY="10px"
        bgColor="bg.secondary"
        h="full"
        w="full"
      >
        <Icon color="text.tertiary" fontSize="50px">
          <FontAwesomeIcon icon={faUpload} />
        </Icon>
        <Heading textAlign="center" color="text.tertiary" fontWeight="bold" size="xl">
          {t("profile.uploadFiles.upload.header")}
        </Heading>
        <Text textAlign="center" fontSize="0.7rem" fontWeight="semibold" color="text.secondary">
          {t("profile.uploadFiles.upload.discription")}
        </Text>
      </Flex>
      <Box mt="10px" me="15px" w="50%">
        <Heading size="lg">{t("profile.uploadFiles.header")}</Heading>
        <Text fontSize="0.8rem" color="brand.gray">
          {t("profile.uploadFiles.discription")}
        </Text>
        <Button
          bgColor="bg.tertiary"
          color="white"
          mt="20px"
          w="100%"
          rounded="2xl"
        >
          {t("profile.uploadFiles.button")}
        </Button>
      </Box>
    </Flex>
  );
};
