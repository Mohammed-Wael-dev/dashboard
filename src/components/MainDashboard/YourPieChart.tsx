import { Box, Flex, Text, Heading } from "@chakra-ui/react";
import React, { Suspense } from "react";
const Chart = React.lazy(() => import("react-apexcharts"));
import { YourPieChartMenu } from "./YourPieChartMenu";
import { useTranslation } from "react-i18next";
export const YourPieChart = () => {
  const { t } = useTranslation();
  const options = {
    colors: ["rgb(66, 42, 251)", "rgb(106, 210, 255)", "rgb(247, 248, 254)"],
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    labels: ["Your files", "System", "empty"],
  };
  const series = [63, 25, 20];
  return (
    <Box
      h="500px"
      p="20px"
      bgColor="bg.primary"
      gridColumn={{ base: "span 4", md: "span 2", lg: "span 1" }}
      minWidth="0"
    >
      <Flex h="100%" justifyContent="space-between" flexDir="column">
        <Box>
          <Flex mb="20px" alignItems="center" justifyContent="space-between">
            <Text fontWeight="semibold">
              {t("mainDashboard.yourPieChart.title")}
            </Text>
            <YourPieChartMenu />
          </Flex>
          <Suspense>
            <Chart
              height="250px"
              width="100%"
              type="pie"
              options={options}
              series={series}
            />
          </Suspense>
        </Box>
        <Flex justifyContent="space-between" alignItems="end">
          <Box borderEnd="1px solid brand.lightGray">
            <Flex gapX="5px" alignItems="center">
              <Box
                display="block"
                w="10px"
                h="10px"
                borderRadius="full"
                bgColor="brand.purple"
              ></Box>
              <Text color="text.secondary" fontSize="0.9rem">
                Your Files
              </Text>
            </Flex>
            <Heading textAlign="center" size="xl" fontWeight="semibold">
              63%
            </Heading>
          </Box>
          <Box display="block" w="1px" h="50px" bgColor="brand.gray"></Box>
          <Box>
            <Flex gapX="5px" alignItems="center">
              <Box
                display="block"
                w="10px"
                h="10px"
                borderRadius="full"
                bgColor="brand.lightBlue"
              ></Box>
              <Text color="text.secondary" fontSize="0.9rem">
                System
              </Text>
            </Flex>
            <Heading textAlign="center" size="xl" fontWeight="semibold">
              25%
            </Heading>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
