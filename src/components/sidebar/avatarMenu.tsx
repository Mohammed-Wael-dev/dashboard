import { Menu, Portal } from "@chakra-ui/react";
export const AvatarMenu = () => {
  return (
    <Portal>
          <Menu.Positioner>
            <Menu.Content  bgColor="bg.primary" borderRadius="xl" p="10px">
              <Menu.ItemGroup>
                <Menu.ItemGroupLabel
                  color="text.primary"
                  p="10px"
                  cursor="default"
                  borderBottom="1px solid"
                  borderColor="brand.lightGray"
                  fontWeight="semibold"
                >
                  👋Hey,Adela
                </Menu.ItemGroupLabel>
                <Menu.Item
                  color="text.primary"
                  cursor="pointer"
                  value="profile-settings"
                >
                  Profile Settings
                </Menu.Item>
                <Menu.Item
                  color="text.primary"
                  cursor="pointer"
                  value="newsletter-settings"
                >
                  Newsletter Settings
                </Menu.Item>
                <Menu.Item
                  color="brand.red"
                  cursor="pointer"
                  value="log-out"
                >
                  Log Out
                </Menu.Item>
              </Menu.ItemGroup>
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
  )
}
