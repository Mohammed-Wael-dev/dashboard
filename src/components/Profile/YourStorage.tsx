import { Box, Flex, Heading, Icon, Text, Progress } from "@chakra-ui/react";
import { HeaderWithMenu } from "../common/HeaderWithMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
export const YourStorage = () => {
  return (
    <Box>
      <HeaderWithMenu headerTitle="" />
      <Flex mb="10px" flexDir={"column"} alignItems="center">
        <Icon
          bgColor="bg.secondary"
          p="15px"
          w="40px"
          rounded="full"
          fontSize="40px"
          color="text.tertiary"
        >
          <FontAwesomeIcon icon={faCloudArrowUp} />
        </Icon>
        <Box textAlign="center" mt="10px">
          <Heading size="lg">Your storage</Heading>
          <Text fontSize="0.8rem" color="brand.gray">
            Supervise your drive space in the easiest way
          </Text>
        </Box>
        <Flex w="full" justifyContent="space-between" mt={{base: "50px", md: "20px", lg: "30px" }} px="20px">
          <Text fontSize="0.8rem" color="brand.gray" cursor="pointer">
            25.6 GB
          </Text>
          <Text fontSize="0.8rem" color="brand.gray" cursor="pointer">
            50 GB
          </Text>
        </Flex>
      </Flex>
      <Progress.Root value={50} size="lg">
        <Progress.Track rounded="xl">
          <Progress.Range bgColor="brand.purple" w="25%" />
        </Progress.Track>
      </Progress.Root>
    </Box>
  );
};
