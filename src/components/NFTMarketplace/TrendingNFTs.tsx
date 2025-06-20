import { Box, Flex, Heading, List } from "@chakra-ui/react"
import abstractColor from "../../assets/abstractColor.webp"
import ATHAIbBrain from "../../assets/ATHAIBrain.webp"
import MeshGradiants from "../../assets/MeshGradiants.webp"
import { NFTCard } from "./NFTCard"
export const TrendingNFTs = () => {
  const data = [
    {
      title: "Abstract Colors",
      img: abstractColor,
      author: "Esthera Jackson",
      currentBid: 0.91
    },
    {
      title: "ETH AI Brain",
      img: ATHAIbBrain,
      author: "Nick Wilson",
      currentBid: 0.7
    },
    {
      title: "Mesh Gradients",
      img: MeshGradiants,
      author: "Will Smith",
      currentBid: 2.91
    }
  ]
  return (
    <Box gridColumn={{ base: "span 4", md: "span 2"}}>
      <Flex gapY="20px" flexDir={{ base: "column", md: "row"}} mx="10px" mb="10px" justifyContent="space-between" alignItems="center">
        <Heading fontWeight="semibold" size="2xl">Trending NFTs</Heading>
          <List.Root color="text.tertiary" display="flex" flexDir="row" gapX="20px" listStyle="none">
            <List.Item cursor="pointer">Art</List.Item>
            <List.Item cursor="pointer">Music</List.Item>
            <List.Item cursor="pointer">Collection</List.Item>
            <List.Item cursor="pointer">Sports</List.Item>
          </List.Root>
      </Flex>
      <Flex flexGrow="1" flexWrap="wrap" gapY="20px" justifyContent="space-between">{data.map(item => <NFTCard {...item}/>)}</Flex>
    </Box>
  )
}
