import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const OfferEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="offerTitle" source="offerTitle" />
        <NumberInput step={1} label="quantityLimit" source="quantityLimit" />
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Edit>
  );
};
