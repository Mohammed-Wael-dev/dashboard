import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";
import { Outlet } from "react-router";
import { Footer } from "./Footer";

import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useSidebarHandler } from "../../store/useSidebarHandler";
export const Layout = () => {
  const windowWidth = useWindowWidth();
    const sidebarHandler = useSidebarHandler((state) => state.isOpen);
  
  return (
    <Flex bgColor="bg.primary" top={0} left={0} minH="100vh" overflowX="hidden">
      {windowWidth > 1300 ? <Sidebar /> : sidebarHandler && <Sidebar />}
      <Box as="main" flex={1} bgColor="bg.secondary">
        <Header />
        <Box >
          <Outlet />
        </Box>
        <Footer/>
      </Box>
    </Flex>
  );
};
