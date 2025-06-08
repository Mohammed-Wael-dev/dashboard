import { Link, Box, Flex, Text, Heading } from "@chakra-ui/react";
import { NavLink } from "react-router";
import { useStore } from "../store/useStore";
import { HeaderToolbar } from "./subComponents/headerToolbar";

export const Header = () => {
  const navigator = useStore((state) => state.navigator);
  const setNavigator = useStore((state) => state.setNavigator);
  return (
    <Box as="header" my="20px" mx="30px">
      <Box>
        <Flex fontSize="0.8rem" gapX="10px">
          <NavLink onClick={() => setNavigator("Main Dashboard")} to="/">
            <Link
              _hover={{ textDecorationColor: "text.primary" }}
              color="text.primary"
              fontFamily="DM Sans, sans-serif"
            >
              Pages
            </Link>
          </NavLink>
          <Text userSelect="none">/</Text>
          <NavLink to={window.location.pathname}>
            <Link
              _hover={{ textDecorationColor: "text.primary" }}
              fontFamily="DM Sans, sans-serif"
              color="text.primary"
            >
              {navigator}
            </Link>
          </NavLink>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Heading size="3xl">{navigator}</Heading>
          <HeaderToolbar />
        </Flex>
      </Box>
    </Box>
  );
};
