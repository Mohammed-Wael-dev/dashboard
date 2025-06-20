import { Flex, Grid } from "@chakra-ui/react";
import { DiscoverNow } from "../components/NFTMarketplace/DiscoverNow";
import { TopCreators } from "../components/NFTMarketplace/TopCreators";
import { TrendingNFTs } from "../components/NFTMarketplace/TrendingNFTs";
import { History } from "../components/NFTMarketplace/History";
import { RecentlyAdded } from "../components/NFTMarketplace/RecentlyAdded";

export const NFTMarketplace = () => {
  return (
    <Grid
      css={{ "& > * > *": { borderRadius: "3xl" } }}
      gap="20px"
      mx="30px"
      gridTemplateColumns={"1fr 1fr 1fr"}
    >
      <Flex gridColumn={{ base: "span 4", md: "span 2"}} flexDir="column" gapY="20px">
        <DiscoverNow />
        <TrendingNFTs />
        <RecentlyAdded />
      </Flex>
      <Flex gridColumn={{ base: "span 4", md: "span 1"}} flexDir="column" gapY="20px">
        <TopCreators />
        <History />
      </Flex>
    </Grid>
  );
};
