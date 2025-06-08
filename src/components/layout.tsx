import { Box, Flex } from "@chakra-ui/react";
import { Sidebar } from "./sidebar";
import { Header } from "./header";

import { Outlet } from "react-router";
export const Layout = () => {

  return (
    <Flex position="static" top={0} left={0} h="100vh">
      <Sidebar/>
      <Box flex={1} bgColor="bg.secondary">
        <Header/>
        <Box bgColor="brand.gray">
          <Outlet />
        </Box>
      </Box>
    </Flex>
  );
};
