import { Box, CloseButton, Flex, Heading, ListRoot, useBreakpointValue  } from "@chakra-ui/react";
import { SidebarNav } from "../sidebar/sidebarNav";

import { useSidebarHandler } from "../../store/useSidebarHandler";
import { useWindowWidth } from "../../hooks/useWindowWidth";
export const Sidebar = () => {
  const setSidebarHandler = useSidebarHandler((state) => state.toggleSidebar);
  const windowWidth = useWindowWidth();
  return (
    <Box
      zIndex={1}
      position={windowWidth > 1300 ? "static" : "absolute"}
      minH="100vh"
      h="100%"
      w="280px"
      bgColor="bg.primary"
    >
      {windowWidth <= 1300 && (
        <CloseButton
          onClick={() => setSidebarHandler()}
          position="absolute"
          top="10px"
          right="10px"
        />
      )}
      <Flex
        py="40px"
        borderBottom="1px solid"
        borderColor="brand.gray"
        justify="center"
        gap="5px"
      >
        <Heading color="text-primary" size="2xl" fontWeight="bold">
          HORIZON
        </Heading>
        <Heading color="text-primary" size="2xl">
          FREE
        </Heading>
      </Flex>
      <ListRoot mt="30px" display="flex" flexDirection="column" gapY="20px">
        <SidebarNav />
      </ListRoot>
    </Box>
  );
};
