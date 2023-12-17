import { Select } from "@radix-ui/themes";
import React from "react";

export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

const Selector: React.FC<{ options: Option[]; id: string }> = ({
  options,
  id,
}) => {
  return (
    <Select.Root defaultValue="0">
      <Select.Trigger id={id} />
      <Select.Content>
        {options.map((option) => (
          <Select.Group key={option.value}>
            {/* <Select.Label>{option.label}</Select.Label> */}
            <Select.Item
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </Select.Item>
          </Select.Group>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default Selector;
