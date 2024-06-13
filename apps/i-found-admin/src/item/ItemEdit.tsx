import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
} from "react-admin";

export const ItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="category" source="category" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="itemName" source="itemName" />
        <NumberInput label="price" source="price" />
        <NumberInput step={1} label="stock" source="stock" />
        <TextInput label="unitOfMeasurement" source="unitOfMeasurement" />
      </SimpleForm>
    </Edit>
  );
};
