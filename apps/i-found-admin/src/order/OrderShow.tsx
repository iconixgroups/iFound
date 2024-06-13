import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const OrderShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="businessId" source="businessId" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="customerId" source="customerId" />
        <TextField label="deliveryAddress" source="deliveryAddress" />
        <TextField label="deliveryFee" source="deliveryFee" />
        <TextField label="deliveryType" source="deliveryType" />
        <TextField label="ID" source="id" />
        <TextField label="items" source="items" />
        <TextField label="orderDate" source="orderDate" />
        <TextField label="orderNumber" source="orderNumber" />
        <TextField label="status" source="status" />
        <TextField label="totalAmount" source="totalAmount" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
