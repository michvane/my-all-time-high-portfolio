import * as Select from "@radix-ui/react-select";
import styles from "./style.module.css";
import clsx from "clsx";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Text } from "@radix-ui/themes";

type Option = {
  label: string;
  value: string;
};

type ComboSelectProps = {
  options: Option[];
  jsonData: any;
  onChange: (value: string) => void;
  value?: string;
};

const ComboSelect: React.FC<ComboSelectProps> = ({
  jsonData,
  options,
  onChange,
  value,
}) => {
  const name = value ? jsonData[value]?.name : "";
  return (
    <Select.Root defaultValue="0" value={value} onValueChange={onChange}>
      <Select.Trigger
        className={clsx(
          "w-3/5 rounded-none border-none shadow-none cursor-pointer flex justify-between items-center truncate",
          styles.select
        )}
      >
        <Select.Value aria-label={value}>{name}</Select.Value>
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon width={20} height={20} className="font-bold" />
        </Select.Icon>
      </Select.Trigger>
      <Select.Content
        position="popper"
        sideOffset={6}
        className="border-2 border-[#edcfcf1f] bg-[#121113] rounded-xl min-w-[150px]"
      >
        <Select.Viewport className="max-h-80">
          <Select.Group>
            <Text as="p" className="p-2">
              Search coming soon!
            </Text>
          </Select.Group>
          <Select.Separator className="h-[1px] m-1 bg-[#edcfcf1f]" />
          <Select.Group>
            {options.map((option) => (
              <Select.Item
                key={option.value}
                value={option.value}
                className="cursor-pointer px-2 py-2"
              >
                {option.label}
              </Select.Item>
            ))}
          </Select.Group>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  );
};

export default ComboSelect;
