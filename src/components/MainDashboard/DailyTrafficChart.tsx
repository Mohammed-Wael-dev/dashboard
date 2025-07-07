import { Box, Flex, Heading, Text, Icon } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import Chart from "react-apexcharts";
import { useTranslation } from "react-i18next";
export const DailyTrafficChart = () => {
  const { t } = useTranslation();
  const options = {
    colors: ["rgb(66, 42, 251)"],
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
        columnWidth: "40%",
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
      categories: ["00", "04", "08", "12", "14", "16", "18"],
    },
    yaxis: {
      show: false,
    },
  };
  const series = [
    {
      name: "Data Traffic",
      data: [20, 30, 40, 20, 45, 50, 30],
    },
  ];
  return (
    <Box
      h="500px"
      p="20px"
      bgColor="bg.primary"
      gridColumn={{ base: "span 4", md: "span 2", lg: "span 1" }}
      minWidth="0"
    >
      <Flex>
        <Box fontSize={{ md: "sm", lg: "xs" }} w="100%">
          <Text fontWeight="semibold" color="text.secondary">
            {t("mainDashboard.dailyTrafficChart.title")}
          </Text>
          <Flex gapX="5px" alignItems="center">
            <Heading mb="10px" fontWeight="semibold" size="2xl">
              2.579
            </Heading>
            <Text fontSize="xs" fontWeight="semibold" color="text.secondary">
              {t("mainDashboard.dailyTrafficChart.visitors")}
            </Text>
          </Flex>
        </Box>
        <Flex
          alignItems="center"
          fontSize="sm"
          fontWeight="bold"
          color="brand.green"
        >
          <Icon>
            <FontAwesomeIcon icon={faCaretUp} />
          </Icon>
          <Text fontSize="0.7rem"> +2.45%</Text>
        </Flex>
      </Flex>
      <Chart height="400px" width="100%" type="bar" options={options} series={series} />
    </Box>
  );
};
