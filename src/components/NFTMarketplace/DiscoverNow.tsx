import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import discoverNow from "../../assets/discoverNow.webp";
import { useTranslation } from "react-i18next";

export const DiscoverNow = () => {
  const { t } = useTranslation();
  return (
    <Box
      h="300px"
      bgImage={`url(${discoverNow})`}
      gridColumn={{ base: "span 4", md: "span 2" }}
    >
      <Flex
        h="full"
        flexDir="column"
        justifyContent="center"
        gapY="20px"
        bgSize="cover"
        bgPos="center"
        p={{ base: "30px", md: "50px" }}
      >
        <Heading
          w={{ base: "100%", lg: "50%" }}
          fontSize={{ base: "1.3rem", md: "1.8rem" }}
          color="white"
        >
          {t("nftMarketplace.discoverNow.header")}
        </Heading>
        <Text fontSize="0.8rem" w={{ base: "100%", lg: "50%" }} color="white">
          {t("nftMarketplace.discoverNow.discription")}
        </Text>
        <ButtonGroup>
          <Button borderRadius="xl" bgColor="white" color="black">
            {t("nftMarketplace.discoverNow.buttons.discoverNow")}
          </Button>
          <Button borderRadius="xl" bgColor="white">
            {t("nftMarketplace.discoverNow.buttons.watchVideo")}
          </Button>
        </ButtonGroup>
      </Flex>
    </Box>
  );
};
