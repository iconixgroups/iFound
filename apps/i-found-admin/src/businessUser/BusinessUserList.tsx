import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const BusinessUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BusinessUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
