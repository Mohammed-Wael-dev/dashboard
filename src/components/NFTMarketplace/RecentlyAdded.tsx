import { Box, Flex, Heading } from "@chakra-ui/react";
import meshGradiants from "../../assets/MeshGradiants.webp";
import meshGradient2 from "../../assets/meshGradiants2.webp";
import swapColor from "../../assets/swapColors.webp";
import { NFTCard } from "./NFTCard";
export const RecentlyAdded = () => {
const data = [
    {
      title: "Abstract Colors",
      img: meshGradiants,
      author: "Esthera Jackson",
      currentBid: 0.91
    },
    {
      title: "ETH AI Brain",
      img: meshGradient2,
      author: "Nick Wilson",
      currentBid: 0.7
    },
    {
      title: "Mesh Gradients",
      img: swapColor,
      author: "Will Smith",
      currentBid: 2.91
    }
  ]
  return (
    <Box gridColumn={{ base: "span 4", md: "span 2"}}>
      <Flex gapY="20px" flexDir={{ base: "column", md: "row"}} mx="10px" mb="10px" justifyContent="space-between" alignItems="center">
        <Heading fontWeight="semibold" size="2xl">Recently Added</Heading>
      </Flex>
      <Flex flexGrow="1" flexWrap="wrap" gapY="20px" justifyContent="space-between">{data.map(item => <NFTCard {...item}/>)}</Flex>
    </Box>
  )
}
