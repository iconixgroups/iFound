import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

export const OfferCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <div />
        <TextInput label="description" multiline source="description" />
        <NumberInput label="discountPercentage" source="discountPercentage" />
        <DateTimeInput label="endDate" source="endDate" />
        <TextInput label="offerTitle" source="offerTitle" />
        <NumberInput step={1} label="quantityLimit" source="quantityLimit" />
        <DateTimeInput label="startDate" source="startDate" />
      </SimpleForm>
    </Create>
  );
};
