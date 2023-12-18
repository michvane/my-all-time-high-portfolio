import { Select } from "@radix-ui/themes";
import React, { FormEvent } from "react";

export interface Option {
  value: string;
  label: string;
  disabled?: boolean;
}

const Selector: React.FC<{
  options: Option[];
  id: string;
  handleCryptoSelection: (value: string) => void;
}> = ({ options, id, handleCryptoSelection }) => {
  return (
    <Select.Root defaultValue="0" onValueChange={handleCryptoSelection}>
      <Select.Trigger id={id} />
      <Select.Content>
        {options.map((option) => (
          <Select.Group key={option.value}>
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
