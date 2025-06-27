import { Box, Text } from "@chakra-ui/react";
import { HeaderWithMenu } from "../common/HeaderWithMenu";
import { CustomTable } from "../common/CustomTable";
import { useQuotes } from "../../hooks/useQuotes";
export const CheckTable = () => {
  const { data: quotes } = useQuotes(8);

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
  return (
    <Box>
      <HeaderWithMenu headerTitle="Check Table" />
      <CustomTable columns={columns} data={quotes || []} />
    </Box>
  );
};
