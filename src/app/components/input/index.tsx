import { TextField } from "@radix-ui/themes";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  RefAttributes,
} from "react";

interface Props {
  id: string;
  value: any;
  type: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const Input: React.FC<Props> = (props) => {
  return (
    <TextField.Root>
      <TextField.Input {...props} />
    </TextField.Root>
  );
};

export default Input;
