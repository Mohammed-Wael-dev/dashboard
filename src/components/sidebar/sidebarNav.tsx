import { Text, Icon, ListItem } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faHouse,
  faLock,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router";
import { useNavStore } from "../../store/useNavStore";
export const SidebarNav = () => {
  const navigationLinks = [
    {
      to: "/",
      icon: faHouse,
      label: "Main Dashboard",
    },
    {
      to: "/nft-marketplace",
      icon: faCartShopping,
      label: "NFT Marketplace",
    },
    {
      to: "/data-tables",
      icon: faChartSimple,
      label: "Data Tables",
    },
    {
      to: "/profile",
      icon: faUser,
      label: "Profile",
    },
    {
      to: "/sign-in",
      icon: faLock,
      label: "Sign In",
    },
    {
      to: "/rtl-admin",
      icon: faHouse,
      label: "RTL Admin",
    },
  ];
  interface NavItemProps {
    to: string;
    icon: any;
    label: string;
  }
    const setNavigator = useNavStore((state) => state.setNavigator);
  return (
    <>
      {navigationLinks.map(({ to, icon, label }: NavItemProps) => (
        <NavLink
          onClick={() => setNavigator(label)}
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
                {label}
              </Text>
            </ListItem>
          )}
        />
      ))}
    </>
  );
};
