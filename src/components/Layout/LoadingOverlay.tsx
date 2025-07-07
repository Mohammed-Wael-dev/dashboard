import { Box, Flex, Spinner, Text } from "@chakra-ui/react";

export const LoadingOverlay = ({
  message = "Loading...",
}: {
  message?: string;
}) => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      w="100vw"
      h="100vh"
      bg="rgba(255, 255, 255, 0.8)"
      zIndex={9999}
    >
      <Flex
        w="100%"
        h="100%"
        justify="center"
        align="center"
        direction="column"
        gap={4}
      >
        <Spinner size="xl" color="brand.primary" />
        <Text fontWeight="semibold" fontSize="lg" color="gray.700">
          {message}
        </Text>
      </Flex>
    </Box>
  );
};
