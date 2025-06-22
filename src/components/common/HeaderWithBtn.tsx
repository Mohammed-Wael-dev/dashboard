import {Flex, Heading, Button} from "@chakra-ui/react";
export const HeaderWithBtn = ({headerTitle}: {headerTitle:string}) => {
  return (
          <Flex alignItems="center" justifyContent="space-between">
            <Heading fontSize="0.9rem" fontWeight="semibold">{headerTitle}</Heading>
            <Button bgColor="bg.secondary" color="text.tertiary" size="sm" rounded="2xl">See all</Button>
          </Flex>
  )
}
