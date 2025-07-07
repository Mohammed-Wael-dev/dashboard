import { Menu, Portal, Flex, Text, Icon, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
export const NotificationMenu = () => {
  const { t, i18n } = useTranslation();
  return (
      <Portal>
        <Menu.Positioner>
          <Menu.Content
            bgColor="bg.primary"
            w="400px"
            borderRadius="xl"
            p="10px"
          >
            <Menu.ItemGroup dir={i18n.language === "ar" ? "rtl" : "ltr"}>
              <Menu.ItemGroupLabel
                color="text.primary"
                p="10px"
                cursor="default"
                borderBottom="1px solid"
                borderColor="brand.lightGray"
                fontWeight="semibold"
              >
                <Flex
                  justifyContent="space-between"
                >
                  <Text>{t("header.notification.notificationHeader")}</Text>
                  <Text>{t("header.notification.markAll")}</Text>
                </Flex>
              </Menu.ItemGroupLabel>
              <Menu.Item dir="" color="text.primary" cursor="pointer" value="0">
                <Flex alignItems="center" gapX="10px">
                  <Box bgColor="brand.purple" p="15px" borderRadius="md">
                    <Icon color="brand.white" fontSize="1.5rem">
                      <FontAwesomeIcon icon={faUpload} />
                    </Icon>
                  </Box>
                  <Box>
                    <Text fontSize="0.8rem" fontWeight={"bold"}>
                      {t("header.notification.eachNotification.title")}
                    </Text>
                    <Text fontSize="0.6rem">
                      {t("header.notification.eachNotification.details")}
                    </Text>
                  </Box>
                </Flex>
              </Menu.Item>
              <Menu.Item color="text.primary" cursor="pointer" value="1">
                <Flex alignItems="center" gapX="10px">
                  <Box bgColor="brand.purple" p="15px" borderRadius="md">
                    <Icon color="brand.white" fontSize="1.5rem">
                      <FontAwesomeIcon icon={faUpload} />
                    </Icon>
                  </Box>
                  <Box>
                    <Text fontSize="0.8rem" fontWeight={"bold"}>
                      {t("header.notification.eachNotification.title")}
                    </Text>
                    <Text fontSize="0.6rem">
                      {t("header.notification.eachNotification.details")}
                    </Text>
                  </Box>
                </Flex>
              </Menu.Item>
            </Menu.ItemGroup>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
  );
};
