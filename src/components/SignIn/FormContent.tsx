import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import {
  Field,
  Fieldset,
  Input,
  Button,
  Stack,
  Flex,
  Checkbox,
  Text,
  Box,
} from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
type FormFields = z.infer<typeof schema>;
export const FormContent = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const onSubmit = (data: FormFields) => {
    console.log("Form submitted:", data);
    navigate("/");
  };
  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <Fieldset.Root>
          <Fieldset.Content>
            <Field.Root invalid={!!errors.email}>
              <Field.Label color="text.primary">Email*</Field.Label>
              <Input
                type="email"
                placeholder="mail@example.com"
                {...register("email", { required: "Email is required" })}
                rounded="xl"
              />
              {errors.email && (
                <Field.ErrorText>{errors.email.message}</Field.ErrorText>
              )}
            </Field.Root>
            <Field.Root invalid={!!errors.password}>
              <Field.Label color="text.primary">Password*</Field.Label>
              <Input
                type="password"
                {...register("password", {
                  required: "Password is required",
                })}
                rounded="xl"
              />
              {errors.password && (
                <Field.ErrorText>{errors.password.message}</Field.ErrorText>
              )}
            </Field.Root>
          </Fieldset.Content>
        </Fieldset.Root>
        <Flex justifyContent="space-between" px="5px">
          <Checkbox.Root>
            <Checkbox.HiddenInput />
            <Checkbox.Control cursor="pointer" rounded="md" />
            <Checkbox.Label fontSize="0.7rem">Kepp me logged In</Checkbox.Label>
          </Checkbox.Root>
          <Text
            cursor="pointer"
            fontWeight="semibold"
            fontSize="0.7rem"
            color="text.tertiary"
          >
            Forgot Password
          </Text>
        </Flex>
        <Button
          type="submit"
          my="10px"
          py="25px"
          bgColor="bg.tertiary"
          color="white"
          rounded="2xl"
          w="100%"
        >
          Sign In
        </Button>
        <Flex gapX="5px" px="5px">
          <Text fontWeight="semibold" fontSize="0.7rem" color="text.primary">
            Not registered yet?
          </Text>
          <Text
            cursor="pointer"
            fontWeight="semibold"
            fontSize="0.7rem"
            color="text.tertiary"
          >
            Create an account
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};
