import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import user1 from "../../assets/user1.webp";
import user2 from "../../assets/user2.webp";
import user3 from "../../assets/user3.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartOutline } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";

interface NFTCardData {
  title: string;
  img: any;
  author: string;
  currentBid: number;
  key?: number;
}
export const NFTCard = ({ title, img, author, currentBid }: NFTCardData) => {
  const [like, setLike] = useState(false);
  return (
    <Box
      w={{ base: "100%", xl: "fit" }}
      rounded="2xl"
      p="5px"
      bgColor="bg.primary"
    >
      <Flex justifyContent="center" alignItems="center">
        <Flex pos="relative" flexDir="column">
          <Box left="88%" top="10px" pos="absolute">
            {like ? (
              <Icon
                onClick={() => setLike(false)}
                color="white"
                rounded="full"
                p="5px"
                bgColor="brand.purple"
              >
                <FontAwesomeIcon icon={faHeart} />
              </Icon>
            ) : (
              <Icon
                onClick={() => setLike(true)}
                pos="absolute"
                color="white"
                rounded="full"
                p="5px"
                bgColor="brand.purple"
              >
                <FontAwesomeIcon icon={faHeartOutline} />
              </Icon>
            )}
          </Box>
          <Image rounded="2xl" src={img} />
          <Flex m="10px" flexDir="column" justifyContent="space-between">
            <Flex pos="relative" justifyContent="space-between">
              <Heading fontWeight="bold" color="text.primary" size="md">
                {title}
              </Heading>
              <Flex h="25px" w="85px" alignItems="center">
                <Image
                  pos="absolute"
                  border="1px solid white"
                  rounded="full"
                  w="25px"
                  h="25px"
                  src={user1}
                  zIndex="3"
                />
                <Image
                  pos="absolute"
                  ms="20px"
                  border="1px solid white"
                  rounded="full"
                  w="25px"
                  h="25px"
                  src={user2}
                  zIndex="2"
                />
                <Image
                  pos="absolute"
                  ms="40px"
                  border="1px solid white"
                  rounded="full"
                  w="25px"
                  h="25px"
                  src={user3}
                  zIndex="1"
                />
                <Flex
                  pos="absolute"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="0.7rem"
                  bgColor="bg.primary"
                  color="text.primary"
                  ms="60px"
                  border="1px solid white"
                  rounded="full"
                  h="full"
                  w="25px"
                >
                  +5
                </Flex>
              </Flex>
            </Flex>
            <Text fontSize="0.8rem" color="brand.gray">
              By {author}
            </Text>
          </Flex>
        </Flex>
        <Flex></Flex>
      </Flex>
      <Flex px="10px" justifyContent="space-between" alignItems="center" mt="10px">
        <Text fontWeight="semibold" fontSize="0.9rem" color="text.tertiary">
          Current Bid: {currentBid}ETH
        </Text>
        <Button bgColor="bg.tertiary" color="white" size="sm" rounded="2xl">
          Place bid
        </Button>
      </Flex>
    </Box>
  );
};
