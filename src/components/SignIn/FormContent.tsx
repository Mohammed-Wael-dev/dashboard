import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { Button, Stack, Flex, Checkbox, Text, Box } from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { InputFields } from "./InputFields";
import { useTranslation } from "react-i18next";
const getSchemaByFieldName = (fieldName: string) => {
  
  const name = fieldName.toLowerCase();
  switch (name) {
    case "email":
      return z.string().email(`Please enter a valid email address.`);
    case "password":
      return z.string().min(8, `Password must be at least 8 characters.`);
    case "phone":
      return z
        .string()
        .regex(/^\+?[\d\s-()+$*]+$/, "Please enter a valid phone number");
    case "name":
      return z.string().min(2, "Name must be at least 2 characters");
    case "url":
      return z.string().url("Please enter a valid URL");
    default:
      return z.string().min(1, "This field is required");
  }
};
const inputType = ["email", "password"];
const autoSchema = Object.fromEntries(
  inputType.map((item) => [item, getSchemaByFieldName(item.toLowerCase())])
);
const schema = z.object(autoSchema);
type FormFields = z.infer<typeof schema>;
export const FormContent = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFields>({
    resolver: zodResolver(schema),
  });
  const onSubmit = () => {
    navigate("/");
  };
  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Stack>
        <InputFields
          register={register}
          errors={errors}
          inputType={inputType}
        />
        <Flex justifyContent="space-between" px="5px">
          <Checkbox.Root dir={i18n.language === "ar" ? "rtl" : "ltr"}>
            <Checkbox.HiddenInput />
            <Checkbox.Control cursor="pointer" rounded="md" />
            <Checkbox.Label fontSize="0.7rem">
              {t("signIn.form.rememberMe")}
            </Checkbox.Label>
          </Checkbox.Root>
          <Text
            cursor="pointer"
            fontWeight="semibold"
            fontSize="0.7rem"
            color="text.tertiary"
          >
            {t("signIn.form.forgotPassword")}
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
          {t("signIn.form.signIn")}
        </Button>
        <Flex gapX="5px" px="5px">
          <Text fontWeight="semibold" fontSize="0.7rem" color="text.primary">
            {t("signIn.form.notRegestered")}
          </Text>
          <Text
            cursor="pointer"
            fontWeight="semibold"
            fontSize="0.7rem"
            color="text.tertiary"
          >
            {t("signIn.form.signUp")}
          </Text>
        </Flex>
      </Stack>
    </Box>
  );
};
