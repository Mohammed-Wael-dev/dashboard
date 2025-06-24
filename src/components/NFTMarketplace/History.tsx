import { Box, Text, Image, Flex, Icon } from "@chakra-ui/react";
import { HeaderWithBtn } from "../common/HeaderWithBtn";
import colorfulHaven from "../../assets/colorfulHaven.webp";
import abstractColors from "../../assets/abstractColor.webp";
import ATHAiBrain from "../../assets/ATHAIBrain.webp";
import MeshGradiants from "../../assets/MeshGradiants.webp";
import meshGradiants2 from "../../assets/meshGradiants2.webp";
import swapColors from "../../assets/swapColors.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiamond } from "@fortawesome/free-solid-svg-icons";
export const History = () => {
  const data = [
    {
      title: "Colorful Heaven",
      img: colorfulHaven,
      author: "Mark Benjamin",
      bid: 0.4,
      time: "30s ago",
    },
    {
      title: "Abstract Colors",
      img: abstractColors,
      author: "Esthera Jackson",
      bid: 2.4,
      time: "30s ago",
    },
    {
      title: "ETH AI Brain",
      img: ATHAiBrain,
      author: "Nick Wilson",
      bid: 0.3,
      time: "50s ago",
    },
    {
      title: "Swipe Circles",
      img: MeshGradiants,
      author: "Peter Will",
      bid: 0.4,
      time: "20s ago",
    },
    {
      title: "Mesh Gradients",
      img: meshGradiants2,
      author: "Will Smith",
      bid: 0.4,
      time: "4h ago",
    },
    {
      title: "3D Cubes Art",
      img: swapColors,
      author: "Manny Gates",
      bid: 0.4,
      time: "2m ago",
    },
  ];
  return (
    <Box
      gridColumn={{ base: "span 4", md: "span 1" }}
      bgColor="bg.primary"
      px={{ base: "20px", md: "10px", xl: "20px" }}
      py="10px"
      minH="550px"
    >
      <HeaderWithBtn headerTitle="History" />
      <Flex flexDir="column" gapY="20px" mt="10px">
        {data.map((item, index) => (
          <Flex w="100%" justifyContent="space-between" key={index}>
            <Flex gapX="10px" alignItems="center">
              <Image
               loading="lazy"
                w="60px"
                h="60px"
                rounded="2xl"
                src={item.img}
                alt={item.title}
              />
              <Flex flexDir="column" gapY="5px">
                <Text
                  fontSize={{ base: "0.7rem", sm: "0.8rem", xl: "0.8rem" }}
                  fontWeight="semibold"
                >
                  {item.title}
                </Text>
                <Text
                  fontSize={{ base: "0.6rem", sm: "0.7rem", xl: "0.7rem" }}
                  color="gray.500"
                >
                  {item.author}
                </Text>
              </Flex>
            </Flex>
            <Flex alignItems="center" gapX="5px" justifyContent="center">
              <Icon fontSize={{ base: "0.6rem", sm: "0.7rem", xl: "0.8rem" }}>
                <FontAwesomeIcon icon={faDiamond} />
              </Icon>
              <Text
                fontSize={{ base: "0.6rem", sm: "0.7rem", xl: "0.8rem" }}
                fontWeight="semibold"
              >
                {item.bid} ETH
              </Text>
              <Text
                fontSize={{ base: "0.6rem", sm: "0.7rem", xl: "0.8rem" }}
                color="gray.500"
              >
                {item.time}
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};
