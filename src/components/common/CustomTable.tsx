import { Table } from "@chakra-ui/react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

interface CustomTableProps<T = any> {
  data: T[];
  columns: any[];
}
export const CustomTable = ({ data, columns }: CustomTableProps) => {
  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <Table.Root fontWeight="semibold" size={{ sm: "md", md: "sm", xl: "md" }}>
      <Table.Header>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Row
            bgColor="bg.primary"
            fontSize={{
              base: "0.5rem",
              sm: "0.8rem",
              md: "0.5rem",
              lg: "0.7rem",
              xl: "0.8rem",
            }}
            key={headerGroup.id}
          >
            {headerGroup.headers.map((header) => (
              <Table.ColumnHeader color="text.secondary" ps="0" key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </Table.ColumnHeader>
            ))}
          </Table.Row>
        ))}
      </Table.Header>
      <Table.Body>
        {table.getRowModel().rows.map((row) => (
          <Table.Row
            bgColor="bg.primary"
            fontSize={{
              base: "0.5rem",
              sm: "0.8rem",
              md: "0.5rem",
              lg: "0.7rem",
              xl: "0.8rem",
            }}
            key={row.id}
          >
            {row.getVisibleCells().map((cell) => (
              <Table.Cell
                border="none"
                color="text.primary"
                padding={{ base: "10px" }}
                ps="0"
                key={cell.id}
              >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
};
