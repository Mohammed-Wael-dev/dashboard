import {Flex, Heading, Button} from "@chakra-ui/react";
export const HeaderWithBtn = ({headerTitle}: {headerTitle:string}) => {
  return (
          <Flex alignItems="center" justifyContent="space-between">
            <Heading size="md" fontWeight="semibold">{headerTitle}</Heading>
            <Button bgColor="bg.secondary" color="text.tertiary" size="sm" rounded="2xl">See all</Button>
          </Flex>
  )
}
