import { Box, Flex, Heading, ListRoot } from "@chakra-ui/react";
import { SidebarNav } from "./subComponents/sidebarNav";
export const Sidebar = () => {
  return (
    <Box w="280px" bgColor="bg.primary">
      <Flex
        py="40px"
        borderBottom="1px solid"
        borderColor="brand.gray"
        justify="center"
        gap="5px"
      >
        <Heading color="text-primary" size="2xl" fontWeight="bold">
          HORIZON
        </Heading>
        <Heading color="text-primary" size="2xl">
          FREE
        </Heading>
      </Flex>
      <ListRoot mt="30px" display="flex" flexDirection="column" gapY="20px">
        <SidebarNav />
      </ListRoot>
    </Box>
  );
};
