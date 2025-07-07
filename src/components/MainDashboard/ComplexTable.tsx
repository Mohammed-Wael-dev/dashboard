import { Box, Text, Flex, Table, Icon, Progress } from "@chakra-ui/react";
import { DropdownMenu } from "../common/DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCircleXmark,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
export const ComplexTable = () => {
  const { t, i18n, ready } = useTranslation(undefined, { useSuspense: false });
  const data = useMemo(
    () => [
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
    ],
    [i18n.language, ready]
  );
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: t("mainDashboard.complexTable.table.name"),
        cell: (props: any) => <Text>{props.getValue()}</Text>,
      },
      {
        accessorKey: "status",
        header: t("mainDashboard.complexTable.table.status"),
        cell: (props: any) => props.getValue(),
      },
      {
        accessorKey: "date",
        header: t("mainDashboard.complexTable.table.date"),
        cell: (props: any) => <Text>{props.getValue()}</Text>,
      },
      {
        accessorKey: "progress",
        header: t("mainDashboard.complexTable.table.progress"),
        cell: (props: any) => props.getValue(),
      },
    ],
    [i18n.language, ready]
  );
  const table = useReactTable({
    data: data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  if (!ready) return <Text>Loading...</Text>;
  return (
    <Box
      w="100%"
      h={{ md: "500px", lg: "300px" }}
      p="20px"
      bgColor="bg.primary"
      gridColumn={{ base: "span 4", md: "span 2", lg: "span 2" }}
      overflowY="auto"
      minWidth="0"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Text fontWeight="semibold">{t("mainDashboard.complexTable.title")}</Text>
        <DropdownMenu />
      </Flex>
      <Table.Root size={{ sm: "md", md: "lg", xl: "md" }}>
        {table.getHeaderGroups().map((headerGroup) => (
          <Table.Header key={headerGroup.id}>
            <Table.Row
              fontSize={{
                base: "0.6rem",
                md: "0.8rem",
                lg: "0.7rem",
                xl: "0.9rem",
              }}
            >
              {headerGroup.headers.map((header) => (
                <Table.ColumnHeader
                  key={header.id}
                  bgColor="bg.primary"
                  color="text.secondary"
                >
                  {flexRender(
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
                  fontSize={{
                    base: "0.6rem",
                    md: "0.8rem",
                    lg: "0.7rem",
                    xl: "0.9rem",
                  }}
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
