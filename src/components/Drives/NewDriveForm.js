import React from "react";
import { InputWrapper } from "../../styled/containers";
import { Input, Label, Select, Required } from "../../styled/forms";

export const NewDriveForm = ({
  driveNumber,
  capacity,
  quantity,
  setDriveNumber,
  setDriveCapacity,
  setDriveQuantity
}) => {
  return (
    <>
      <InputWrapper gridColumn="4/6" maxWidth="100px">
        <Label>
          Number <Required>*</Required>
        </Label>
        <Input
          placeholder="1"
          value={driveNumber}
          onChange={e => setDriveNumber(e.target.value)}
        />
      </InputWrapper>

      <InputWrapper gridColumn="6/8" maxWidth="100px">
        <Label>
          Capacity <Required>*</Required>
        </Label>
        <Select
          defaultValue={capacity}
          padding="16px 18px"
          onChange={e => setDriveCapacity(e.target.value)}
        >
          <option value="250GB">250GB</option>
          <option value="500GB">500GB</option>
          <option value="1TB">1TB</option>
          <option value="2TB">2TB</option>
        </Select>
      </InputWrapper>

      <InputWrapper gridColumn="8/10" maxWidth="100px">
        <Label>
          Quantity <Required>*</Required>
        </Label>
        <Input
          placeholder="1"
          value={quantity}
          onChange={e => setDriveQuantity(e.target.value)}
        />
      </InputWrapper>
    </>
  );
};
