import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import profileBgImage from "../../assets/profileBgImg.webp";
import avaratIcon from "../../assets/avatar2.webp";
import { useTranslation } from "react-i18next";
export const SocialProfile = () => {
  const { t } = useTranslation();
  return (
    <Box>
      <Box
        rounded="2xl"
        bgImage={`url(${profileBgImage})`}
        bgAttachment="attachment"
        bgSize="cover"
        h="100px"
      ></Box>
      <Flex pos="relative" justifyContent="center" mt="-50px">
        <Image loading="lazy" src={avaratIcon} w="80px" h="80px" rounded="full" />
      </Flex>
      <Box textAlign="center" mt="10px">
        <Heading size="lg">Adela Parkson</Heading>
        <Text fontSize="0.8rem" color="brand.gray">
          {t("profile.socialProfile.title")}
        </Text>
      </Box>
      <Flex justifyContent="space-evenly" mt="20px">
        <Flex flexDir="column" alignItems="center">
          <Heading size="lg">12</Heading>
          <Text fontSize="0.8rem" color="brand.gray">
            {t("profile.socialProfile.posts")}
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Heading size="lg">9.7K</Heading>
          <Text fontSize="0.8rem" color="brand.gray">
            {t("profile.socialProfile.followers")}
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Heading size="lg">434</Heading>
          <Text fontSize="0.8rem" color="brand.gray">
            {t("profile.socialProfile.following")}
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
