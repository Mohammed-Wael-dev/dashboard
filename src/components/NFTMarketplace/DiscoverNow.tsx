import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import discoverNow from "../../assets/discoverNow.webp";

export const DiscoverNow = () => {
  return (
    <Box h="300px" bgImage={`url(${discoverNow})`} gridColumn={{ base: "span 4", md: "span 2"}}>
      <Flex
        h="full"
        flexDir="column"
        justifyContent="center"
        gapY="20px"
        bgSize="cover"
        bgPos="center"
        
        p={{base: "30px", md: "50px"}}
      >
        <Heading w={{ base: "100%", lg: "50%" }} fontSize={{ base: "1.3rem", md: "1.8rem" }} color="white">
          Discover, collect, and sell extraordinary NFTs
        </Heading>
        <Text fontSize="0.8rem" w={{ base: "100%", lg: "50%" }} color="white">
          Enter in this creative world. Discover now the latest NFTs or start
          creating your own!
        </Text>
        <ButtonGroup>
          <Button borderRadius="xl" bgColor="white" color="black">Discover Now</Button>
          <Button h="fit" p="0" bgColor="transparent">Watch Video</Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};
