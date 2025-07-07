import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
export const YourPieChartMenu = () => {
  const { t } = useTranslation();
  const frameworks = createListCollection({
    items: [
      {
        label: t("mainDashboard.yourPieChart.menu.monthly"),
        value: "monthly",
      },
      {
        label: t("mainDashboard.yourPieChart.menu.weekly"),
        value: "weekly",
      },
      {
        label: t("mainDashboard.yourPieChart.menu.daily"),
        value: "daily",
      },
    ],
  });
  return (
    <Select.Root collection={frameworks} size="sm" width="100px">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger cursor="pointer">
          <Select.ValueText color="text.secondary" placeholder={t("mainDashboard.yourPieChart.menu.monthly")} />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner cursor="pointer">
          <Select.Content color="text.secondary">
            {frameworks.items.map((framework) => (
              <Select.Item
                cursor="pointer"
                item={framework}
                key={framework.value}
              >
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
};
