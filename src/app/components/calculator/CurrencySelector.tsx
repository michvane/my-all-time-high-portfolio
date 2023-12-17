import React, { useState } from "react";
import { SelectedCrypto } from ".";
import Input from "../input";
import Selector, { Option } from "../selector";
import { Heading, Text } from "@radix-ui/themes";

interface Props {
  jsonData: any;
  selectedCrypto: SelectedCrypto;
  onSelectedCurrency: (currency: string, amount: string, index: number) => void;
  index: number;
}

const CryptoSelector: React.FC<Props> = ({
  jsonData,
  selectedCrypto,
  onSelectedCurrency,
  index,
}) => {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectedCurrency(selectedCrypto.currency, event.target.value, index);
  };

  const options: Option[] = Object.keys(jsonData).map((key) => {
    const crypto = jsonData[key];
    return { value: key, label: crypto.name };
  });

  return (
    <div className="flex">
      <div className="mr-4 flex flex-col w-40">
        <Selector id="crypto-selector" options={options} />
      </div>
      <div className="flex flex-col">
        <Input
          type="number"
          id="entered-value"
          value={selectedCrypto.amount}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default CryptoSelector;
