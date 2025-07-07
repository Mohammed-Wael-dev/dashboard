import { Box, Flex, Switch } from "@chakra-ui/react";
import { HeaderWithMenu } from "../common/HeaderWithMenu";
import { useTranslation } from "react-i18next";
export const Notification = () => {
  const { t, i18n } = useTranslation();
  const rawNotifications = t("mainDashboard.tasks.tasksList", { returnObjects: true });
  const notifications = Array.isArray(rawNotifications) ? rawNotifications : [];
  return (
    <Box minH="fit" h="500px">
      <HeaderWithMenu headerTitle="Notifications" />
      <Flex mt="10px" flexDirection="column" gapY="10px">
        {notifications.map((item, index) => (
          <Switch.Root dir={i18n.language === "ar" ? "rtl" : "ltr"} colorPalette="purple" pb="10px" key={index}>
            <Switch.HiddenInput />
            <Switch.Control dir={i18n.language === "ar" ? "rtl" : "ltr"}/>
            <Switch.Label  fontSize="0.7rem" color="text.primary">{item}</Switch.Label>
          </Switch.Root>
        ))}
      </Flex>
    </Box>
  );
};
