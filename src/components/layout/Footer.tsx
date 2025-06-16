import { Box, Flex, List, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Box as="footer" my="20px" mx="30px" px="30px">
      <Flex fontSize="0.9rem" color="brand.gray" justifyContent="space-between">
        <Text>
          © 2025 Horizon UI. All Rights Reserved.
        </Text>
        <List.Root display="flex" flexDirection="row" listStyle="none" gapX="20px">
          <List.Item cursor="pointer">Support</List.Item>
          <List.Item cursor="pointer">License</List.Item>
          <List.Item cursor="pointer">Terms of Use</List.Item>
          <List.Item cursor="pointer">Blog</List.Item>
        </List.Root>
      </Flex>
    </Box>
  );
};
