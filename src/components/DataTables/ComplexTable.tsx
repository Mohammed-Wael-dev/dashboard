import { HeaderWithMenu } from "../common/HeaderWithMenu";
import { Flex, Icon, Text, Progress, Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { CustomTable } from "../common/CustomTable";
export const ComplexTable = () => {
  const data = [
    {
      name: "Marketplace",
      status: (
        <Flex alignItems="center" gapX="5px">
          <Icon color="brand.green">
            <FontAwesomeIcon icon={faCircleCheck} />
          </Icon>
          <Text>Approved</Text>
        </Flex>
      ),
      date: "24.Jan.2021",
      progress: (
        <Progress.Root value={30} maxW="100px" size="sm">
          <Progress.Track rounded="xl">
            <Progress.Range bgColor="brand.purple" w="25%" />
          </Progress.Track>
        </Progress.Root>
      ),
    },
    {
      name: "Marketplace",
      status: (
        <Flex alignItems="center" gapX="5px">
          <Icon color="brand.red">
            <FontAwesomeIcon icon={faCircleXmark} />
          </Icon>
          <Text>Disable</Text>
        </Flex>
      ),
      date: "	30.Dec.2021",
      progress: (
        <Progress.Root value={30} maxW="100px" size="sm">
          <Progress.Track rounded="xl">
            <Progress.Range bgColor="brand.purple" w="25%" />
          </Progress.Track>
        </Progress.Root>
      ),
    },
    {
      name: "Marketplace",
      status: (
        <Flex alignItems="center" gapX="5px">
          <Icon color="brand.orange">
            <FontAwesomeIcon icon={faCircleExclamation} />
          </Icon>
          <Text>Error</Text>
        </Flex>
      ),
      date: "20.May.2021",
      progress: (
        <Progress.Root value={30} maxW="100px" size="sm">
          <Progress.Track rounded="xl">
            <Progress.Range bgColor="brand.purple" w="25%" />
          </Progress.Track>
        </Progress.Root>
      ),
    },
    {
      name: "Marketplace",
      status: (
        <Flex alignItems="center" gapX="5px">
          <Icon color="brand.green">
            <FontAwesomeIcon icon={faCircleCheck} />
          </Icon>
          <Text>Approved</Text>
        </Flex>
      ),
      date: "12.Jul.2021",
      progress: (
        <Progress.Root value={30} maxW="100px" size="sm">
          <Progress.Track rounded="xl">
            <Progress.Range bgColor="brand.purple" w="25%" />
          </Progress.Track>
        </Progress.Root>
      ),
    },
  ];
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
    {
      accessorKey: "status",
      header: "Status",
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
    <Box
    >
      <HeaderWithMenu headerTitle="Complex Table" />
      <CustomTable data={data} columns={columns} />
    </Box>
  );
};
