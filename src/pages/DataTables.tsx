import { Grid } from "@chakra-ui/react";
import { CheckTable } from "../components/DataTables/CheckTable";
import { ComplexTable } from "../components/DataTables/ComplexTable";
import { DevelopmentTable } from "../components/DataTables/DevelopmentTable";
import { FourColumnsTable } from "../components/DataTables/FourColumnsTable";

export const DataTables = () => {
  return (
    <Grid
      css={{
        "& > *": {
          borderRadius: "3xl",
          width: "100%",
          minH: "fit",
          padding: "20px",
          overflowY: "auto",
          minWidth: "0",
          backgroundColor: "bg.primary",
          gridColumn: { base: "span 2", md: "span 1" },
        },
      }}
      gap="20px"
      mx="30px"
      gridTemplateColumns={"1fr 1fr"}
    >
      <DevelopmentTable />
      <CheckTable />
      <FourColumnsTable />
      <ComplexTable />
    </Grid>
  );
};
