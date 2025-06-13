import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useSidebarHandler } from "../../store/useSidebarHandler";

import { Outlet } from "react-router";
export const Layout = () => {
  const windowWidth = useWindowWidth();
    const sidebarHandler = useSidebarHandler((state) => state.isOpen);
  
  return (
    <Flex position="static" top={0} left={0} minH="100vh">
      {windowWidth > 1300 ? <Sidebar /> : sidebarHandler && <Sidebar />}
      <Box w="100vw" flex={1} bgColor="bg.secondary">
        <Header />
        <Box >
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};
