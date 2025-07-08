import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Chart from "react-apexcharts";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useColorMode } from "../ui/color-mode";
export const WeeklyRevenueChart = () => {
    const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const options = {
    colors: ["rgb(66, 42, 251)", "rgb(106, 210, 255)", "rgb(247, 248, 254)"],
    legend: {
      show: false,
    },
    grid: {
      yaxis: {
        lines: {
          show: false,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "30%",
        endingShape: "rounded",
        borderRadius: 8,
      },
    },
    stroke: {
      show: false,
      width: 0,
    },
    dataLabels: {
      enabled: false,
    },
    chart: {
      type: "bar" as const,
      id: "grouped-bar-chart",
      width: "100%",
      toolbar: {
        show: false,
      },
      stacked: true,
    },
    xaxis: {
      labels: {
        style: {
          colors: "rgb(163, 174, 208)",
        },
      },
      lines: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      categories: ["17", "18", "19", "20", "21", "22", "23", "24", "25"],
    },
    yaxis: {
      show: false,
    },
        tooltip: {
      theme: colorMode === "light" ? "light" : "dark",
    },
  };
  const series = [
    {
      name: "Signal1",
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    },
    {
      name: "Revenue Stream 2",
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    },
    {
      name: "Revenue Stream 3",
      data: [400, 370, 330, 390, 320, 350, 360, 320, 380],
    },
  ];
  return (
    <Box
      h="500px"
      p="20px"
      bgColor="bg.primary"
      gridColumn={{ base: "span 4", md: "span 2" }}
    >
      <Flex justifyContent="space-between">
        <Text fontWeight="semibold">{t("mainDashboard.weeklyRevenueChart.title")}</Text>
        <Flex
          cursor="default"
          gapX="5px"
          alignItems="center"
          bgColor="bg.secondary"
          p="10px"
          borderRadius="lg"
        >
          <Icon color="text.tertiary">
            <FontAwesomeIcon icon={faChartSimple} />
          </Icon>
        </Flex>
      </Flex>
      <Chart height="400px" width="100%" type="bar" options={options} series={series} />
    </Box>
  );
};
