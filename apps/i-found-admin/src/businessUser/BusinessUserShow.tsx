import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const BusinessUserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="businessName" source="businessName" />
        <TextField label="city" source="city" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="itemCatalog" source="itemCatalog" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <TextField label="promotionCatalog" source="promotionCatalog" />
        <TextField label="state" source="state" />
        <TextField label="street" source="street" />
        <TextField label="subscriptionPlan" source="subscriptionPlan" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="vatNumber" source="vatNumber" />
        <TextField label="zipCode" source="zipCode" />
      </SimpleShowLayout>
    </Show>
  );
};
