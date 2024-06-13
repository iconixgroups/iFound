import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const CustomerUserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CustomerUsers"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
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
      </Datagrid>
    </List>
  );
};
