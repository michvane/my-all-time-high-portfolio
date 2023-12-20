import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { TextField } from "@radix-ui/themes";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

interface Props {
  id?: string;
  value?: any;
  type: HTMLInputTypeAttribute;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  search?: boolean;
}

const Input: React.FC<Props> = (props) => {
  return (
    <TextField.Root>
      {props.search && (
        <TextField.Slot>
          <MagnifyingGlassIcon height="16" width="16" />
        </TextField.Slot>
      )}
      <TextField.Input {...props} />
    </TextField.Root>
  );
};

export default Input;
