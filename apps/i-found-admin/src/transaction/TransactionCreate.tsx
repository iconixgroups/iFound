import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="businessId" source="businessId" />
        <TextInput label="customerId" source="customerId" />
        <SelectInput
          source="paymentMethod"
          label="paymentMethod"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <div />
        <NumberInput label="transactionAmount" source="transactionAmount" />
        <DateTimeInput label="transactionDate" source="transactionDate" />
      </SimpleForm>
    </Create>
  );
};
