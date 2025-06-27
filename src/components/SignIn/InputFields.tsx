import { Field, Input, Fieldset } from "@chakra-ui/react";

interface FormFields {
  register: any;
  errors: any;
  inputType: string[];
}
export const InputFields = ({ register, errors, inputType }: FormFields) => {
  return (
    <Fieldset.Root>
      <Fieldset.Content>
        {inputType.map((item, index) => (
          <Field.Root key={index} invalid={!!errors[item]}>
            <Field.Label color="text.primary">{item[0].toUpperCase() + item.slice(1) + "*"}</Field.Label>
            <Input
              type={item}
              {...register(item, { required: `${item} is required` })}
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
