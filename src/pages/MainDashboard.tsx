import { Grid } from "@chakra-ui/react";
import { AccountSammary } from "../components/MainDashboard/AccountSummary";
import { WaveChart } from "../components/MainDashboard/WaveChart";
import { WeeklyRevenueChart } from "../components/MainDashboard/WeeklyRevenueChart";
import { CheckTable } from "../components/MainDashboard/CheckTable";
import { DailyTrafficChart } from "../components/MainDashboard/DailyTrafficChart";
import { YourPieChart } from "../components/MainDashboard/YourPieChart";
import { ComplexTable } from "../components/MainDashboard/ComplexTable";
import { Tasks } from "../components/MainDashboard/Tasks";
import { Calender } from "../components/MainDashboard/Calender";

export const MainDashboard = () => {
  return (
    <Grid
      css={{ "& > *": { borderRadius: "3xl" } }}
      gap="20px"
      mx="30px"
      // gridTemplateColumns={"1fr 1fr 1fr 1fr"}
      gridTemplateColumns={{
        base: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(4, 1fr)",
        xl: "repeat(4, 1fr)",
      }}
    >
      <AccountSammary />
      <WaveChart />
      <WeeklyRevenueChart />
      <CheckTable />
      <DailyTrafficChart />
      <YourPieChart />
      <ComplexTable />
      <Tasks />
      <Calender />
    </Grid>
  );
};
