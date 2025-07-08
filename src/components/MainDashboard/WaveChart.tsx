import { Box, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import Chart from "react-apexcharts";
import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import { useColorMode } from "../ui/color-mode";

export const WaveChart = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  const options = {
    colors: ["rgb(66, 42, 251)", "rgb(106, 210, 255)"],
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
    chart: {
      id: "wave-chart",
      type: "line" as const,
      width: "100%",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth" as const,
      width: 4,
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
      categories: t("mainDashboard.waveChart.months", { returnObjects: true }),
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
      data: [50, 64, 48, 66, 49, 68],
    },
    {
      name: "Signal2",
      data: [30, 40, 24, 46, 20, 46],
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
        <Flex
          cursor="default"
          gapX="5px"
          alignItems="center"
          bgColor="bg.secondary"
          p="10px"
          borderRadius="lg"
        >
          <Icon color="text.secondary">
            <FontAwesomeIcon icon={faCalendar} />
          </Icon>
          <Text fontWeight="semibold" fontSize="xs" color="text.secondary">
            {t("mainDashboard.waveChart.thisMonth")}
          </Text>
        </Flex>
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
      <Box mt="20px" w="100%">
        <Heading mb="10px" fontWeight="semibold" size="3xl">
          $37.5K
        </Heading>
        <Text fontSize="xs" fontWeight="semibold" color="text.secondary">
          {t("mainDashboard.waveChart.totalSpent")}
        </Text>
        <Text fontSize="sm" fontWeight="bold" color="brand.green">
          <span style={{ fontSize: "0.6rem" }}>^</span> +2.45%
        </Text>
      </Box>
      <Chart
        height="300px"
        width="100%"
        type="line"
        options={options}
        series={series}
      />
    </Box>
  );
};
