import { Box, Flex, Switch } from "@chakra-ui/react";
import { HeaderWithMenu } from "../common/HeaderWithMenu";

export const Notification = () => {
  const data = [
    "Item comment notifications",
    "Buyer review notifications",
    "Rating reminders notifications",
    "Meetups near you notifications",
    "Company news notifications",
    "New launches and projectsm",
    "Monthly product changes",
    "Subscribe to newsletter",
    "Email me when someone follows me",
  ];
  return (
    <Box minH="fit" h="500px">
      <HeaderWithMenu headerTitle="Notifications" />
      <Flex mt="10px" flexDirection="column" gapY="10px">
        {data.map((item, index) => (
          <Switch.Root colorPalette="purple" pb="10px" key={index}>
            <Switch.HiddenInput />
            <Switch.Control/>
            <Switch.Label  fontSize="0.7rem" color="text.primary">{item}</Switch.Label>
          </Switch.Root>
        ))}
      </Flex>
    </Box>
  );
};
