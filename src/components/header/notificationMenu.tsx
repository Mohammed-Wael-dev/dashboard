import { Menu, Portal, Flex, Text, Icon, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
export const NotificationMenu = () => {
  return (
    <Portal>
      <Menu.Positioner>
        <Menu.Content bgColor="bg.primary" w="400px" borderRadius="xl" p="10px">
          <Menu.ItemGroup>
            <Menu.ItemGroupLabel
              color="text.primary"
              p="10px"
              cursor="default"
              borderBottom="1px solid"
              borderColor="brand.lightGray"
              fontWeight="semibold"
            >
              <Flex justifyContent="space-between">
                <Text>Notification</Text>
                <Text>Mark all As Read</Text>
              </Flex>
            </Menu.ItemGroupLabel>
            <Menu.Item
              color="text.primary"
              cursor="pointer"
              value="0"
            >
              <Flex alignItems="center" gapX="10px">
                <Box bgColor="brand.purple" p="15px" borderRadius="md">
                  <Icon color="brand.white" fontSize="1.5rem">
                    <FontAwesomeIcon icon={faUpload} />
                  </Icon>
                </Box>
                <Box>
                <Text fontSize="0.8rem" fontWeight={"bold"}>New Update: Horizon UI Dashboard PRO</Text>
                <Text fontSize="0.6rem">A new update for your downloaded item is available!</Text>
                </Box>
              </Flex>
            </Menu.Item>
            <Menu.Item
              color="text.primary"
              cursor="pointer"
              value="1"
            >
              <Flex alignItems="center" gapX="10px">
                <Box bgColor="brand.purple" p="15px" borderRadius="md">
                  <Icon color="brand.white" fontSize="1.5rem">
                    <FontAwesomeIcon icon={faUpload} />
                  </Icon>
                </Box>
                <Box>
                <Text fontSize="0.8rem" fontWeight={"bold"}>New Update: Horizon UI Dashboard PRO</Text>
                <Text fontSize="0.6rem">A new update for your downloaded item is available!</Text>
                </Box>
              </Flex>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu.Content>
      </Menu.Positioner>
    </Portal>
  );
};
