import { Field, Input, Fieldset } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
interface FormFields {
  register: any;
  errors: any;
  inputType: string[];
}
export const InputFields = ({ register, errors, inputType }: FormFields) => {
  const { t } = useTranslation();
  return (
    <Fieldset.Root>
      <Fieldset.Content>
        {inputType.map((item, index) => (
          <Field.Root key={index} invalid={!!errors[item]}>
            <Field.Label color="text.primary">{t(`signIn.form.inputFields.${item}`)}*</Field.Label>
            <Input
              type={item}
              {...register(item, { required: `t(signIn.form.inputFields.${item} is required` })}
              rounded="xl"
            />
            {errors[item] && (
              <Field.ErrorText>{errors[item].message}</Field.ErrorText>
            )}
          </Field.Root>
        ))}
      </Fieldset.Content>
    </Fieldset.Root>
  );
};
