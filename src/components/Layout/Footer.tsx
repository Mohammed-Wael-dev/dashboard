import { Box, Flex, List, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box as="footer" my="20px" mx="30px" px="30px">
      <Flex fontSize={{ base: "0.6rem", md: "0.8rem" }} color="brand.gray" justifyContent="space-between">
        <Text>
          {t("footer.copyright")}
        </Text>
        <List.Root display="flex" flexDirection="row" listStyle="none" gapX="20px">
          <List.Item cursor="pointer">{t("footer.support")}</List.Item>
          <List.Item cursor="pointer">{t("footer.license")}</List.Item>
          <List.Item cursor="pointer">{t("footer.termsofUse")}</List.Item>
          <List.Item cursor="pointer">{t("footer.blog")}</List.Item>
        </List.Root>
      </Flex>
    </Box>
  );
};
