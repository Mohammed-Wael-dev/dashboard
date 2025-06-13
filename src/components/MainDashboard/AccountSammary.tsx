import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChartSimple,
  faCommentsDollar,
  faWallet,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";

export const AccountSammary = () => {
  const AccountSammary = [
    {
      entity: "Earnings",
      icon: faChartSimple,
      amount: "$340",
    },
    {
      entity: "Spend this month",
      icon: faCommentsDollar,
      amount: "$642.39",
    },
    {
      entity: "Sales",
      icon: faChartSimple,
      amount: "$574.34",
    },
    {
      entity: "Your Balance",
      icon: faWallet,
      amount: "$1000",
    },
    {
      entity: "New Takes",
      icon: faChartSimple,
      amount: "145",
    },
    {
      entity: "Total Projects",
      icon: faHouse,
      amount: "$2433",
    },
  ];
  interface AccountSammaryProps {
    entity: string;
    icon: any;
    amount: string;
  }
  return (
    <Flex
      gridColumn="span 4"
      justifyContent="space-between"
      flexWrap="wrap"
      gap="10px"
    >
      {AccountSammary.map(({ entity, icon, amount }: AccountSammaryProps) => (
        <Flex
          px="20px"
          gapX="20px"
          alignItems="center"
          borderRadius="3xl"
          h="80px"
          bgColor="bg.primary"
          flexBasis={{base: "100%", md: "250px"}}
          key={entity}
          className="accountSammary"
        >
          <Flex alignItems="center" justifyContent="center" h="40px" w="40px" bg="bg.secondary" borderRadius="full">
            <Icon fontSize="1.3rem" color="text.tertiary">
              <FontAwesomeIcon icon={icon} />
            </Icon>
          </Flex>
          <Box className="accountSammaryEntity">
            <Heading size="xs" color="text.secondary">{entity}</Heading>
            <Text fontWeight="bold" color="text.primary" fontSize="1.2rem">{amount}</Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
