import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Items"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="attributes" source="attributes" />
        <TextField label="category" source="category" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="itemName" source="itemName" />
        <TextField label="price" source="price" />
        <TextField label="stock" source="stock" />
        <TextField label="unitOfMeasurement" source="unitOfMeasurement" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
