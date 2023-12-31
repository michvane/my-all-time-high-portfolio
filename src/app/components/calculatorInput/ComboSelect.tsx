import * as Select from "@radix-ui/react-select";
import styles from "./style.module.css";
import clsx from "clsx";
import { ChevronDownIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import { CryptoInfo } from "@/types";
import Input from "../input";
import { useRef, useState } from "react";

type Option = {
  label: string;
  value: string;
};

type ComboSelectProps = {
  options: Option[];
  cryptoList: CryptoInfo[];
  onChange: (value: string) => void;
  value?: string;
};

const ComboSelect: React.FC<ComboSelectProps> = ({
  // TODO: Pass selected crypto
  cryptoList,
  options,
  onChange,
  value,
}) => {
  const [filteredOptions, setFilteredOptions] = useState<Option[]>(options);

  const name = value ? cryptoList[Number(value)]?.name : "";
  const imgSrc = value ? cryptoList[Number(value)]?.image : "";

  const handleSearch = (value: string) => {
    const filteredOptions = options.filter((option) =>
      option.label.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOptions(filteredOptions);
  };

  return (
    <Select.Root defaultValue="0" value={value} onValueChange={onChange}>
      <Select.Trigger
        onClick={() => console.log("clicked")}
        className={clsx(
          "w-3/5 rounded-none border-none shadow-none cursor-pointer flex flex-row justify-between items-center truncate",
          styles.select
        )}
      >
        <Select.Value aria-label={value}>
          <div className="flex justify-center items-center">
            <Image
              src={imgSrc}
              width={20}
              height={20}
              className=" mr-2"
              alt=""
            />
            {name}
          </div>
        </Select.Value>
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
            <div className="p-2">
              <Input
                search
                placeholder="Search"
                type={"text"}
                onChange={(e) => handleSearch(e.target.value)}
              />
            </div>
          </Select.Group>
          <Select.Separator className="h-[1px] m-1 bg-[#edcfcf1f]" />
          <Select.Group>
            {filteredOptions.map((option) => (
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
