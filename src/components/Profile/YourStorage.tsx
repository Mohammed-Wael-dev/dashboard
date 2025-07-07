import { Box, Flex, Heading, Icon, Text, Progress } from "@chakra-ui/react";
import { HeaderWithMenu } from "../common/HeaderWithMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
export const YourStorage = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <HeaderWithMenu headerTitle="" />
      <Flex mb="10px" flexDir={"column"} alignItems="center">
        <Icon
          bgColor="bg.secondary"
          p="15px"
          w="40px"
          rounded="full"
          fontSize="40px"
          color="text.tertiary"
        >
          <FontAwesomeIcon icon={faCloudArrowUp} />
        </Icon>
        <Box textAlign="center" mt="10px">
          <Heading size="lg">{t("profile.yourStorage.title")}</Heading>
          <Text fontSize="0.8rem" color="brand.gray">
            {t("profile.yourStorage.discription")}
          </Text>
        </Box>
        <Flex w="full" justifyContent="space-between" mt={{base: "50px", md: "20px", lg: "30px" }} px="20px">
          <Text fontSize="0.8rem" color="brand.gray" cursor="pointer">
            25.6 {t("profile.yourStorage.gb")}
          </Text>
          <Text fontSize="0.8rem" color="brand.gray" cursor="pointer">
            50 {t("profile.yourStorage.gb")}
          </Text>
        </Flex>
      </Flex>
      <Progress.Root value={50} size="lg">
        <Progress.Track rounded="xl">
          <Progress.Range bgColor="brand.purple" w="25%" />
        </Progress.Track>
      </Progress.Root>
    </Box>
  );
};
