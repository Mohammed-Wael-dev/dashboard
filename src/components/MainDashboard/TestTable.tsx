import { Box, Table, Text, Flex } from "@chakra-ui/react";
import { useQuotes } from "../../hooks/useQuotes";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
import { DropdownMenu } from "../common/DropdownMenu";
import { useTranslation } from "react-i18next";

export const TestTable = () => {
  const { t } = useTranslation();

  const { data: quotes, isLoading, error } = useQuotes(6);
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
    {
      accessorKey: "author",
      header: "Author",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
    {
      accessorKey: "quote",
      header: "Quote",
      cell: (props: any) => <Text>{props.getValue()}</Text>,
    },
  ];
  const table = useReactTable({
    data: quotes || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Box
      w="100%"
      h="500px"
      p="20px"
      bgColor="bg.primary"
      gridColumn={{ base: "span 4", md: "span 2", lg: "span 2" }}
      overflowY="auto"
      minWidth="0"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold">{t("mainDashboard.testTable.title")}</Text>
        <DropdownMenu />
      </Flex>

      <Table.Root size={{ sm: "md", md: "sm", xl: "md" }}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Header key={headerGroup.id}>
            <Table.Row
              fontSize={{ base: "0.6rem", lg: "0.7rem", xl: "0.9rem" }}
            >
              {headerGroup.headers.map((header: any) => (
                <Table.ColumnHeader
                  key={header.id}
                  bgColor="bg.primary"
                  color="text.secondary"
                >
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
          {isLoading && (
            <Table.Row bgColor="transparent">
              <Table.Cell border="none" colSpan={3}>
                <Text>Loading...</Text>
              </Table.Cell>
            </Table.Row>
          )}
          {!isLoading && !quotes?.length && (
            <Table.Row bgColor="transparent">
              <Table.Cell border="none" colSpan={3}>
                <Text>No data</Text>
              </Table.Cell>
            </Table.Row>
          )}
          {error && (
            <Table.Row bgColor="transparent">
              <Table.Cell border="none" colSpan={3}>
                <Text>{error.message}</Text>
              </Table.Cell>
            </Table.Row>
          )}
          {table.getRowModel().rows.map((row) => (
            <Table.Row key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Table.Cell
                  key={cell.id}
                  bgColor="bg.primary"
                  fontSize={{ base: "0.6rem", lg: "0.7rem", xl: "0.9rem" }}
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
