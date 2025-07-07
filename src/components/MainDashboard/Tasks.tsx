import { Box, Flex, Text, Icon, List, Checkbox } from "@chakra-ui/react";
import { DropdownMenu } from "../common/DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";

export const Tasks = () => {
  const { t,i18n } = useTranslation();
  const listContentRaw = t("mainDashboard.tasks.tasksList", { returnObjects: true });
  const listContent = Array.isArray(listContentRaw) ? listContentRaw : [];
  return (
    <Box
      w="100%"
      h={{ md: "500px", lg: "300px" }}
      p="20px"
      bgColor="bg.primary"
      gridColumn={{ base: "span 4", md: "span 2", lg: "span 1" }}
      overflowY="auto"
      minWidth="0"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gapX="10px">
          <Icon
            p="10px"
            rounded="full"
            bgColor="bg.secondary"
            color="brand.purple"
          >
            <FontAwesomeIcon size="lg" icon={faCircleCheck} />
          </Icon>
          <Text fontWeight="semibold">{t("mainDashboard.tasks.title")}</Text>
        </Flex>
        <DropdownMenu />
      </Flex>
      <List.Root listStyle="none">
        {listContent.map((item, index) => (
          <Flex alignItems="center" key={index}>
            <Checkbox.Root dir={i18n.language === "ar" ? "rtl" : "ltr"} p="10px">
              <Checkbox.HiddenInput />
              <Checkbox.Control rounded="md"/>
              <Checkbox.Label>{item}</Checkbox.Label>
            </Checkbox.Root>
          </Flex>
        ))}
      </List.Root>
    </Box>
  );
};
