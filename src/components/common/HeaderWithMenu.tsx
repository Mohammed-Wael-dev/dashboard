import { Flex, Heading } from "@chakra-ui/react";
import { DropdownMenu } from "./DropdownMenu";
import { useTranslation } from "react-i18next";
export const HeaderWithMenu = ({ headerTitle }: { headerTitle: string }) => {
  const { t } = useTranslation();
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Heading fontSize="0.9rem" fontWeight="semibold">
        {headerTitle == "" ? headerTitle : t(
          `common.headerWithMenu.${headerTitle.toLowerCase().replace(" ", "")}`
        )}
      </Heading>
      <DropdownMenu />
    </Flex>
  );
};
