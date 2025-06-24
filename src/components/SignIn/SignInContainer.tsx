import { Flex, Text } from "@chakra-ui/react";
import { NavLink } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { SignInForm } from "./SignInForm";
export const SignInFormContainer = () => {
  return (
    <Flex
      w={{base:"350px", md:"50%"}}
      px="20px"
      pos="relative"
      my="30px"
      flexDir="column"
      justifyContent="center"
    >
      <NavLink to="/">
        <Flex
          top="0"
          pos="absolute"
          fontSize="0.8rem"
          color="text.secondary"
          alignItems="center"
          gap="10px"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
          <Text>Back to Dashboard</Text>
        </Flex>
      </NavLink>
      <SignInForm />
    </Flex>
  );
};
