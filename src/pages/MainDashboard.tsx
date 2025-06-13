import { Grid } from "@chakra-ui/react";
import { AccountSammary } from "../components/MainDashboard/AccountSammary";
import { WaveChart } from "../components/MainDashboard/WaveChart";
import { WeeklyRevenueChart } from "../components/MainDashboard/WeeklyRevenueChart";
import { CheckTable } from "../components/MainDashboard/CheckTable";
import { DailyTrafficChart } from "../components/MainDashboard/DailyTrafficChart";
import { YourPieChart } from "../components/MainDashboard/YourPieChart";
import { ComplexTable } from "../components/MainDashboard/ComplexTable";
export const MainDashboard = () => {
  return (
    <Grid
      css={{ "& > *": { borderRadius: "3xl" } }}
      gap="20px"
      mx="30px"
      gridTemplateColumns={"1fr 1fr 1fr 1fr"}
    >
      <AccountSammary />
      <WaveChart />
      <WeeklyRevenueChart />
      <CheckTable />
      <DailyTrafficChart />
      <YourPieChart />
      <ComplexTable />
    </Grid>
  );
};
