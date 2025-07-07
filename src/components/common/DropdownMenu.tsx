import {
  Portal,
  Menu,
  Flex,
  Text,
  Icon,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faStore,
  faLightbulb,
  faGear,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
export const DropdownMenu = () => {
  const { t, i18n } = useTranslation();
  const CheckTableMenuContent = [
    {
      icon: faUser,
      label: t("common.dropDownMenu.panel1"),
    },
    {
      icon: faStore,
      label: t("common.dropDownMenu.panel2"),
    },
    {
      icon: faLightbulb,
      label: t("common.dropDownMenu.panel3"),
    },
    {
      icon: faGear,
      label: t("common.dropDownMenu.panel4"),
    },
  ];
  interface MenuItemProps {
    icon: any;
    label: string;
  }
  return (
      <Menu.Root size="md" positioning={{ placement: "bottom-end" }}>
        <Menu.Trigger asChild>
          <Flex
            w="40px"
            h="40px"
            cursor="pointer"
            gapX="5px"
            justifyContent="center"
            alignItems="center"
            bgColor="bg.secondary"
            borderRadius="lg"
          >
            <Box textAlign="center">
              <Icon w="40px" textAlign="center" color="text.tertiary">
                <FontAwesomeIcon icon={faEllipsis} />
              </Icon>
            </Box>
          </Flex>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content bgColor="bg.primary" borderRadius="xl" p="10px">
              <Menu.ItemGroup dir={i18n.language === "ar" ? "rtl" : "ltr"}>
              {CheckTableMenuContent.map(
                ({ icon, label }: MenuItemProps, index: number) => (
                  <Menu.Item
                    key={index}
                    color="text.primary"
                    cursor="pointer"
                    value={label}
                  >
                    <Flex alignItems="center" color="text.secondary" gapX="10px">
                      <Icon w="15px">
                        <FontAwesomeIcon icon={icon} />
                      </Icon>
                      <Text fontSize="0.7rem">{label}</Text>
                    </Flex>
                  </Menu.Item>
                )
              )}
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
  );
};
