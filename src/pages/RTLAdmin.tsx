import { Box, Flex } from "@chakra-ui/react"
import { Header } from "../components/layout/header"
import { Footer } from "../components/layout/Footer"
import { Sidebar } from "../components/layout/sidebar"
import { useWindowWidth } from "../hooks/useWindowWidth"
import { useSidebarHandler } from "../store/useSidebarHandler"
import { MainDashboard } from "./MainDashboard"

export const RTLAdmin = () => {
  const windowWidth = useWindowWidth();
  const sidebarHandler = useSidebarHandler((state) => state.isOpen);
  return (
    <Flex dir="rtl" bgColor="bg.primary" top={0} left={0} minH="100vh" overflowX="hidden">
      {windowWidth > 1300 ? <Sidebar /> : sidebarHandler && <Sidebar />}
      <Box as="main" flex={1} bgColor="bg.secondary">
        <Header />
        <Box >
          <MainDashboard/>
        </Box>
        <Footer/>
      </Box>
    </Flex>
  )
}
