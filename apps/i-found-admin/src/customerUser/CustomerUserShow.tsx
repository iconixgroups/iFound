import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const CustomerUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="addresses" source="addresses" />
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="fullName" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="rewardPoints" source="rewardPoints" />
        <TextField label="savedCards" source="savedCards" />
        <TextField label="state" source="state" />
        <TextField label="street" source="street" />
        <TextField label="transactionHistory" source="transactionHistory" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="walletBalance" source="walletBalance" />
        <TextField label="zipCode" source="zipCode" />
      </SimpleShowLayout>
    </Show>
  );
};
