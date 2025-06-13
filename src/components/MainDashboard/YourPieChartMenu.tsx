import {
  Portal,
  Select,
  createListCollection
} from "@chakra-ui/react";

export const YourPieChartMenu = () => {
    const frameworks = createListCollection({
        items:[

            {
                label: "Monthly",
                value: "monthly",
            },
            {
                label: "Weekly",
                value: "weekly",
            },
            {
                label: "Daily",
                value: "daily",
            },
        ]
});
  return (
      <Select.Root collection={frameworks} size="sm" width="100px">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger cursor="pointer">
          <Select.ValueText color="text.secondary" placeholder="Monthly" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner cursor="pointer">
          <Select.Content color="text.secondary">
            {frameworks.items.map((framework) => (
              <Select.Item cursor="pointer" item={framework} key={framework.value}>
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
