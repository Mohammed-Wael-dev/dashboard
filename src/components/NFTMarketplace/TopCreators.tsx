import { Box, Flex, Text, Image } from "@chakra-ui/react";
import { HeaderWithBtn } from "../common/HeaderWithBtn";
import { CustomTable } from "../common/CustomTable";
import { ProgressBar } from "../common/ProgressBar";

import user1 from "../../assets/user1.webp";
import user2 from "../../assets/user2.webp";
import user3 from "../../assets/user3.webp";
import user4 from "../../assets/user4.webp";
import user5 from "../../assets/user5.webp";

export const TopCreators = () => {
  const data = [
    {
      name: <Flex alignItems="center" gapX="5px">
        <Image loading="lazy" rounded="full" w="25px" h="25px" src={user1} />
        <Text color="text.primary">@maddison_c21</Text>
      </Flex>,
      artwork: "9821",
      rating: <ProgressBar Barvalue={30} />,
    },
    {
      name: <Flex alignItems="center" gapX="5px">
        <Image loading="lazy" rounded="full" w="25px" h="25px" src={user2} />
        <Text color="text.primary">@karl.will02</Text>
      </Flex>,
      artwork: "7032",
      rating: <ProgressBar Barvalue={30} />,
    },
    {
      name: <Flex alignItems="center" gapX="5px">
        <Image loading="lazy" rounded="full" w="25px" h="25px" src={user3} />
        <Text color="text.primary">@andreea.1z</Text>
      </Flex>,
      artwork: "5204",
      rating: <ProgressBar Barvalue={30} />,
    },
    {
      name: <Flex alignItems="center" gapX="5px">
        <Image loading="lazy" rounded="full" w="25px" h="25px" src={user4} />
        <Text color="text.primary">@abraham47.y</Text>
      </Flex>,
      artwork: "4309",
      rating: <ProgressBar Barvalue={30} />,
    },
    {
      name: <Flex alignItems="center" gapX="5px">
        <Image loading="lazy" rounded="full" w="25px" h="25px" src={user5} />
        <Text color="text.primary">@simmmple.web</Text>
      </Flex>,
      artwork: "3871",
      rating: <ProgressBar Barvalue={30} />,
    },
    {
      name: <Flex alignItems="center" gapX="5px">
        <Image loading="lazy" rounded="full" w="25px" h="25px" src={user5} />
        <Text color="text.primary">@horizon.ui</Text>
      </Flex>,
      artwork: "3152",
      rating: <ProgressBar Barvalue={30} />,
    },
    {
      name: <Flex alignItems="center" gapX="5px">
        <Image loading="lazy" rounded="full" w="25px" h="25px" src={user5} />
        <Text color="text.primary">@venus.sys</Text>
      </Flex>,
      artwork: "2907",
      rating: <ProgressBar Barvalue={30} />,
    },
  ];
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
    {
      accessorKey: "artwork",
      header: "Artwork",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
    {
      accessorKey: "rating",
      header: "Rating",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
  ];
  return (
    <Box
      gridColumn={{ base: "span 4", md: "span 1" }}
      bgColor="bg.primary"
      px="20px"
      py="10px"
      h="500px"
    >
      <HeaderWithBtn headerTitle="Top Creators" />
      <CustomTable data={data} columns={columns} />
    </Box>
  );
};
