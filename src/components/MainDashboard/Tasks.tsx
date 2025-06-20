import { Box, Flex, Text, Icon, List, Checkbox } from "@chakra-ui/react";
import { DropdownMenu } from "../common/DropdownMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export const Tasks = () => {
  const listContent = [
    "Landing Page Design",
    "Mobile App Design",
    "Dashboard Builder",
    "Landing Page Design",
    "Dashboard Builder",
  ];
  return (
    <Box
      w="100%"
      h={{ md: "500px", lg: "300px" }}
      p="20px"
      bgColor="bg.primary"
      gridColumn={{ base: "span 4", md: "span 2", lg: "span 1" }}
      overflowY="auto"
      minWidth="0"
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Flex alignItems="center" gapX="10px">
          <Icon
            p="10px"
            rounded="full"
            bgColor="bg.secondary"
            color="brand.purple"
          >
            <FontAwesomeIcon size="lg" icon={faCircleCheck} />
          </Icon>
          <Text fontWeight="semibold">Tasks</Text>
        </Flex>
        <DropdownMenu />
      </Flex>
      <List.Root listStyle="none">
        {listContent.map((item) => (
          <Flex alignItems="center" key={item}>
            <Checkbox.Root p="10px">
              <Checkbox.HiddenInput />
              <Checkbox.Control rounded="md"/>
              <Checkbox.Label>{item}</Checkbox.Label>
            </Checkbox.Root>
          </Flex>
        ))}
      </List.Root>
    </Box>
  );
};
