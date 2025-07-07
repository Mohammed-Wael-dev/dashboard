import { Flex, Heading, Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const HeaderWithBtn = ({ headerTitle }: { headerTitle: string }) => {
  const { t } = useTranslation();
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Heading fontSize="0.9rem" fontWeight="semibold">
        {t(
          `common.headerWithBtn.${headerTitle.toLowerCase().replace(" ", "")}`
        )}
      </Heading>
      <Button
        bgColor="bg.secondary"
        color="text.tertiary"
        size="sm"
        rounded="2xl"
      >
        {t("common.headerWithBtn.seeAll")}
      </Button>
    </Flex>
  );
};
