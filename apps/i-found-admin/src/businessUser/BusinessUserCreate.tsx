import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  NumberInput,
} from "react-admin";

export const BusinessUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="businessName" source="businessName" />
        <TextInput label="city" source="city" />
        <TextInput label="email" source="email" type="email" />
        <div />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <div />
        <TextInput label="state" source="state" />
        <TextInput label="street" source="street" />
        <SelectInput
          source="subscriptionPlan"
          label="subscriptionPlan"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="vatNumber" source="vatNumber" />
        <NumberInput step={1} label="zipCode" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
