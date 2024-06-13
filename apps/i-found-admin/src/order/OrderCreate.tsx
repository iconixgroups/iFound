import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="businessId" source="businessId" />
        <TextInput label="customerId" source="customerId" />
        <TextInput label="deliveryAddress" multiline source="deliveryAddress" />
        <NumberInput label="deliveryFee" source="deliveryFee" />
        <SelectInput
          source="deliveryType"
          label="deliveryType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <DateTimeInput label="orderDate" source="orderDate" />
        <TextInput label="orderNumber" source="orderNumber" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="totalAmount" source="totalAmount" />
      </SimpleForm>
    </Create>
  );
};
