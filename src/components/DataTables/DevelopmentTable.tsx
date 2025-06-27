import { HeaderWithMenu } from "../common/HeaderWithMenu";
import { Icon, Text, Box, Flex } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobile,
  faDesktop,
  faLaptop,
} from "@fortawesome/free-solid-svg-icons";
import { CustomTable } from "../common/CustomTable";
import { ProgressBar } from "../common/ProgressBar";

export const DevelopmentTable = () => {
  const data = [
    {
      name: "Marketplace",
      tech: (
        <Flex gapX="5px">
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faMobile} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faDesktop} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faLaptop} />
          </Icon>
        </Flex>
      ),
      date: "12.Jan.2021",
      progress: <ProgressBar Barvalue={30} />,
    },
    {
      name: "Venus DB PRO",
      tech: (
        <Flex gapX="5px">
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faMobile} />
          </Icon>
        </Flex>
      ),
      date: "21.Feb.2021",
      progress: <ProgressBar Barvalue={30} />,
    },
    {
      name: "Venus DS",
      tech: (
        <Flex gapX="5px">
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faMobile} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faDesktop} />
          </Icon>
        </Flex>
      ),
      date: "13.Mar.2021",
      progress: <ProgressBar Barvalue={30} />,
    },
    {
      name: "Venus 3D Asset",
      tech: (
        <Flex gapX="5px">
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faMobile} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faDesktop} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faLaptop} />
          </Icon>
        </Flex>
      ),
      date: "24.Jan.2021",
      progress: <ProgressBar Barvalue={30} />,
    },
    {
      name: "Marketplace",
      tech: (
        <Flex gapX="5px">
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faMobile} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faLaptop} />
          </Icon>
        </Flex>
      ),
      date: "Oct 24, 2022",
      progress: <ProgressBar Barvalue={30} />,
    },
    {
      name: "Venus DB PRO",
      tech: (
        <Flex gapX="5px">
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faMobile} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faDesktop} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faLaptop} />
          </Icon>
        </Flex>
      ),
      date: "Oct 24, 2022",
      progress: <ProgressBar Barvalue={30} />,
    },
    {
      name: "Marketplace",
      tech: (
        <Flex gapX="5px">
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faMobile} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faDesktop} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faLaptop} />
          </Icon>
        </Flex>
      ),
      date: "12.Jan.2021",
      progress: <ProgressBar Barvalue={30} />,
    },
    {
      name: "Venus DB PRO",
      tech: (
        <Flex gapX="5px">
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faMobile} />
          </Icon>
        </Flex>
      ),
      date: "21.Feb.2021",
      progress: <ProgressBar Barvalue={30} />,
    },
    {
      name: "Venus DS",
      tech: (
        <Flex gapX="5px">
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faMobile} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faDesktop} />
          </Icon>
        </Flex>
      ),
      date: "13.Mar.2021",
      progress: <ProgressBar Barvalue={30} />,
    },
    {
      name: "Venus 3D Asset",
      tech: (
        <Flex gapX="5px">
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faMobile} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faDesktop} />
          </Icon>
          <Icon fontSize="0.8rem" color="text.secondary">
            <FontAwesomeIcon icon={faLaptop} />
          </Icon>
        </Flex>
      ),
      date: "24.Jan.2021",
      progress: <ProgressBar Barvalue={30} />,
    },
  ];
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
    {
      accessorKey: "tech",
      header: "Tech",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
    {
      accessorKey: "progress",
      header: "Progress",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
  ];
  return (
    <Box>
      <HeaderWithMenu headerTitle="Development Table" />
      <CustomTable data={data} columns={columns} />
    </Box>
  );
};
