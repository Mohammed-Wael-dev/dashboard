import { Flex, Heading } from "@chakra-ui/react";
import { DropdownMenu } from "./DropdownMenu";
export const HeaderWithMenu = ({headerTitle}: {headerTitle:string}) => {
  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Heading fontSize="0.9rem" fontWeight="semibold">{headerTitle}</Heading>
      <DropdownMenu />
    </Flex>
  );
};
