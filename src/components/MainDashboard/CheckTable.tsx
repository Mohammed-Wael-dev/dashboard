import { Box, Table, Text, Flex } from "@chakra-ui/react";

import { useState } from "react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import dataJson from "../../assets/database/data.json";
import { DropdownMenu } from "../common/DropdownMenu";
export const CheckTable = () => {
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
  const [tableData] = useState(dataJson);
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Box
    w="100%"
      h="500px"
      p="20px"
      bgColor="bg.primary"
      gridColumn={{ base: "span 4",md: "span 2", lg: "span 2" }}
      overflowY="auto"
      minWidth="0"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold">Check Table</Text>
        <DropdownMenu />
      </Flex>

      <Table.Root size={{ sm: "md", md: "sm", xl: "md" }}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Header key={headerGroup.id}>
            <Table.Row
              fontSize={{ base: "0.6rem", lg: "0.7rem", xl: "0.9rem" }}
            >
              {headerGroup.headers.map((header: any) => (
                <Table.ColumnHeader key={header.id} bgColor="bg.primary" color="text.secondary">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </Table.ColumnHeader>
              ))}
            </Table.Row>
          </Table.Header>
        ))}
        <Table.Body>
          {table.getRowModel().rows.map((row) => (
            <Table.Row key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Cell
                  key={cell.id}
                  bgColor="bg.primary"
                  fontSize={{ base: "0.6rem", lg: "0.7rem", xl: "0.9rem"}}
                  fontWeight="semibold"
                  py="10px"
                  border="none"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};
