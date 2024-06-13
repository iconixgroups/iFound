import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const CustomerUserCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="city" source="city" />
        <TextInput label="email" source="email" type="email" />
        <TextInput label="fullName" source="fullName" />
        <TextInput label="phoneNumber" source="phoneNumber" />
        <NumberInput step={1} label="rewardPoints" source="rewardPoints" />
        <div />
        <TextInput label="state" source="state" />
        <TextInput label="street" source="street" />
        <div />
        <NumberInput label="walletBalance" source="walletBalance" />
        <NumberInput step={1} label="zipCode" source="zipCode" />
      </SimpleForm>
    </Create>
  );
};
