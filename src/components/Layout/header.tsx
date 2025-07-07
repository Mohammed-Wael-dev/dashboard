import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router";
import { useNavStore } from "../../store/useNavStore";
import { HeaderToolbar } from "../header/headerToolbar";
import { useWindowWidth } from "../../hooks/useWindowWidth";
import { useTranslation } from "react-i18next";

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const navigator = useNavStore((state) => state.navigator);
  const setNavigator = useNavStore((state) => state.setNavigator);
  const windowWidth = useWindowWidth();

  return (
    <Box as="header" my="20px" mx="30px">
      <Box>
        <Flex fontSize="0.8rem" gapX="10px">
          <NavLink onClick={() => setNavigator("Main Dashboard")} to="/">
            <Text
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              color="text.primary"
              fontFamily="DM Sans, sans-serif"
            >
              {t("header.navigation.pages")}
            </Text>
          </NavLink>
          <Text userSelect="none">/</Text>
          <NavLink to={location.pathname}>
            <Text
              cursor="pointer"
              _hover={{ textDecoration: "underline" }}
              color="text.primary"
              fontFamily="DM Sans, sans-serif"
            >
              {t(`header.navigation.currentPage.${navigator.replace(/\s/g, "-").toLowerCase()}`)}
            </Text>
          </NavLink>
        </Flex>
        <Flex
          mt={windowWidth <= 650 ? "10px" : "0px"}
          gapY={windowWidth <= 650 ? "10px" : "0px"}
          flexDir={windowWidth <= 650 ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Heading size="3xl">{t(`header.navigation.currentPage.${navigator.replace(/\s/g, "-").toLowerCase()}`)}</Heading>
          <HeaderToolbar />
        </Flex>
      </Box>
    </Box>
  );
};
