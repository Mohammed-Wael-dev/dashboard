import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import profileBgImage from "../../assets/profileBgImg.webp";
import profileImage from "../../assets/profileImg.webp";

export const SocialProfile = () => {
  return (
    <Box>
      <Box
        rounded="2xl"
        bgImage={`url(${profileBgImage})`}
        bgAttachment="attachment"
        bgSize="cover"
        h="100px"
      ></Box>
      <Flex pos="relative" justifyContent="center" mt="-50px">
        <Image src={profileImage} w="80px" h="80px" rounded="full" />
      </Flex>
      <Box textAlign="center" mt="10px">
        <Heading size="lg">Adela Parkson</Heading>
        <Text fontSize="0.8rem" color="brand.gray">
          Product Manager
        </Text>
      </Box>
      <Flex justifyContent="space-evenly" mt="20px">
        <Flex flexDir="column" alignItems="center">
          <Heading size="lg">12</Heading>
          <Text fontSize="0.8rem" color="brand.gray">
            Posts
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Heading size="lg">12</Heading>
          <Text fontSize="0.8rem" color="brand.gray">
            Posts
          </Text>
        </Flex>
        <Flex flexDir="column" alignItems="center">
          <Heading size="lg">12</Heading>
          <Text fontSize="0.8rem" color="brand.gray">
            Posts
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};
