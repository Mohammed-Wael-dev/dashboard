import { Input, Flex, IconButton, Avatar, Box, Menu } from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";
import { faBell, faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import avatarIcon from "../../assets/avatarIcon.webp";
import { AvatarMenu } from "./avatarMenu";
import { NotificationMenu } from "./notificationMenu";
import { useSidebarHandler } from "../../store/useSidebarHandler";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useTranslation } from "react-i18next";

export const HeaderToolbar = () => {
  const { t } = useTranslation();
  const { toggleColorMode, colorMode } = useColorMode();
  const windowWidth = useWindowWidth();
  const setSidebarHandler = useSidebarHandler((state) => state.toggleSidebar);
  return (
    <Flex w={windowWidth <= 650 ? "100%" : "auto"} alignItems="center" borderRadius="4xl" bgColor="bg.primary" p="10px">
      <Flex
      w={windowWidth <= 650 ? "100%" : "auto"}
        ps="10px"
        borderRadius="2xl"
        borderColor="transparent"
        bgColor="bg.secondary"
        alignItems="center"
      >
        <IconButton bgColor="transparent" color="text.secondary" size="xs">
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </IconButton>
        <Input
          size="sm"
          borderRadius="2xl"
          borderColor="transparent"
          bgColor="bg.secondary"
          placeholder={t(`header.search`)}
          maxW="150px"
        />
      </Flex>
      {windowWidth <= 1300 && (
        <IconButton onClick={setSidebarHandler} bgColor="transparent" color="text.secondary" size="sm">
          <FontAwesomeIcon icon={faBars} />
        </IconButton>
      )}
      <Menu.Root positioning={{ placement: "bottom-start" }}>
        <Menu.Trigger asChild>
          <Box>
            <IconButton bgColor="transparent" color="text.secondary" size="sm">
              <FontAwesomeIcon icon={faBell} />
            </IconButton>
          </Box>
        </Menu.Trigger>
        <NotificationMenu />
      </Menu.Root>
      <IconButton
        bgColor="transparent"
        color="text.secondary"
        size="sm"
        onClick={() => {
          toggleColorMode();
        }}
      >
        {colorMode === "dark" ? (
          <FontAwesomeIcon icon={faSun} />
        ) : (
          <FontAwesomeIcon icon={faMoon} />
        )}
      </IconButton>
      <Menu.Root positioning={{ placement: "bottom-start" }}>
        <Menu.Trigger asChild>
          <Box>
            <Avatar.Root size="sm" cursor="pointer">
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src={avatarIcon} />
            </Avatar.Root>
          </Box>
        </Menu.Trigger>
        <AvatarMenu />
      </Menu.Root>
    </Flex>
  );
};
