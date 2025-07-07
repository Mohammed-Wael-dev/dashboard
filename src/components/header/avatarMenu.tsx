import { Menu, Portal } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const AvatarMenu = () => {
  const { t } = useTranslation();
  return (
    <Portal>
      <Menu.Positioner>
        <Menu.Content bgColor="bg.primary" borderRadius="xl" p="10px">
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel
              color="text.primary"
              p="10px"
              cursor="default"
              borderBottom="1px solid"
              borderColor="brand.lightGray"
              fontWeight="semibold"
            >
              {t("header.avatar.title")}
            </Menu.ItemGroupLabel>
            <Menu.Item
              color="text.primary"
              cursor="pointer"
              value="profile-settings"
            >
              {t("header.avatar.menu.profileSettings")}
            </Menu.Item>
            <Menu.Item
              color="text.primary"
              cursor="pointer"
              value="newsletter-settings"
            >
              {t("header.avatar.menu.newsletterSettings")}
            </Menu.Item>
            <Menu.Item color="brand.red" cursor="pointer" value="log-out">
              {t("header.avatar.menu.logout")}
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  );
};
