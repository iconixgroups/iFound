import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="category" source="category" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="itemName" source="itemName" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="stock" source="stock" />
        <TextInput label="unitOfMeasurement" source="unitOfMeasurement" />
      </SimpleForm>
    </Create>
  );
};
