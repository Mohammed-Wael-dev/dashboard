import { Box, Checkbox, Text } from "@chakra-ui/react";
import { HeaderWithMenu } from "../common/HeaderWithMenu";
import { CustomTable } from "../common/CustomTable";

export const FourColumnsTable = () => {
const data = [
    {
      name: "Marketplace",
      progress: "75.5%",
      quantity: 2458,
      date: "12.Jan.2021",
    },
    {
      name: "Venus DB PRO",
      progress: "35.4%",
      quantity: 1485,
      date: "21.Feb.2021",
    },
    {
      name: "Venus DS",
      progress: "25%",
      quantity: 1024,
      date: "13.Mar.2021",
    },
    {
      name: "Venus 3D Asset",
      progress: "100%",
      quantity: 858,
      date: "24.Jan.2021",
    },
    {
      name: "Marketplace",
      progress: "75.5%",
      quantity: 258,
      date: "Oct 24, 2022",
    },
  ];
  const columns = [
    {
      accessorKey: "name",
      header: "Name",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
    {
      accessorKey: "progress",
      header: "Progress",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
    {
      accessorKey: "date",
      header: "Date",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
  ];
  return (
    <Box>
      <HeaderWithMenu headerTitle="Check Table" />
      <CustomTable columns={columns} data={data} />
    </Box>
  );
};
