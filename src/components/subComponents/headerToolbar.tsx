import {
  Input,
  Flex,
  IconButton,
  Avatar,
  Box,
  Menu,
} from "@chakra-ui/react";
import { useColorMode } from "../ui/color-mode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBell, faSun, faMoon } from "@fortawesome/free-regular-svg-icons";
import segun_adebayo from "../../assets/segun_adebayo.webp";
import { AvatarMenu } from "./avatarMenu";
import { NotificationMenu } from "./notificationMenu";

export const HeaderToolbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex alignItems="center" borderRadius="4xl" bgColor="bg.primary" p="10px">
      <Flex
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
          placeholder="Search..."
          w="150px"
        />
      </Flex>
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
              <Avatar.Image src={segun_adebayo} />
            </Avatar.Root>
          </Box>
        </Menu.Trigger>
        <AvatarMenu />
      </Menu.Root>
    </Flex>
  );
};
