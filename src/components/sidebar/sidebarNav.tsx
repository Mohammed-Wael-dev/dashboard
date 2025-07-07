import { Text, Icon, ListItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faHouse,
  faLock,
  faUser,
  faEarthAmericas,
} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import { useNavStore } from "../../store/useNavStore";
import { useTranslation } from "react-i18next";
export const SidebarNav = () => {
  const { t, i18n } = useTranslation();
  const navigationLinks = [
    {
      to: "/",
      icon: faHouse,
      id: "main-dashboard",
    },
    {
      to: "/nft-marketplace",
      icon: faCartShopping,
      id: "nft-marketplace",
    },
    {
      to: "/data-tables",
      icon: faChartSimple,
      id: "data-tables",
    },
    {
      to: "/profile",
      icon: faUser,
      id: "profile",
    },
    {
      to: "/sign-in",
      icon: faLock,
      id: "sign-in",
    },
  ];
  interface NavItemProps {
    to: string;
    icon: any;
    id: string;
  }
  const setNavigator = useNavStore((state) => state.setNavigator);
  return (
    <>
      {navigationLinks.map(({ to, icon, id }: NavItemProps) => (
        <NavLink
          onClick={() => setNavigator(id)}
          key={to}
          to={to}
          children={({ isActive }: { isActive: boolean }) => (
            <ListItem ms="30px" display="flex" alignItems="center" gapX="15px">
              <Icon color={isActive ? "text.tertiary" : "brand.gray"}>
                <FontAwesomeIcon icon={icon} />
              </Icon>
              <Text
                fontFamily="DM Sans, sans-serif"
                color={isActive ? "text.primary" : "brand.gray"}
                fontSize="0.9rem"
                fontWeight="bold"
                letterSpacing="-0.01rem"
              >
                {t(`header.navigation.currentPage.${id}`, { defaultValue: id })}
              </Text>
            </ListItem>
          )}
        />
      ))}
      <ListItem
        onClick={() =>
          i18n.language === "en"
            ? i18n.changeLanguage("ar")
            : i18n.changeLanguage("en")
        }
        cursor="pointer"
        ms="30px"
        display="flex"
        alignItems="center"
        gapX="15px"
      >
        <Icon color="brand.gray">
          <FontAwesomeIcon icon={faEarthAmericas} />
        </Icon>
        <Text
          fontFamily="DM Sans, sans-serif"
          color="brand.gray"
          fontSize="0.9rem"
          fontWeight="bold"
          letterSpacing="-0.01rem"
        >
          {t("sidebar.language")}
        </Text>
      </ListItem>
    </>
  );
};
