import React, { useState } from "react";
import { SelectedCrypto } from ".";
import Input from "../input";
import Selector, { Option } from "../selector";
import ComboSelect from "./ComboSelect";
import styles from "./style.module.css";
import clsx from "clsx";

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
  const handleCryptoSelection = (value: string) => {
    onSelectedCurrency(value, selectedCrypto.amount, index);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectedCurrency(selectedCrypto.currency, event.target.value, index);
  };

  const options: Option[] = Object.keys(jsonData).map((key) => {
    const crypto = jsonData[key];
    return { value: key, label: crypto.name };
  });

  return (
    <div className="flex justify-center">
      <div className="flex max-w-[300px]">
        <input
          type="number"
          value={selectedCrypto.amount}
          onChange={handleInputChange}
          className={clsx("w-2/5", styles.input)}
        />
        <ComboSelect
          options={options}
          value={selectedCrypto.currency}
          jsonData={jsonData}
          onChange={handleCryptoSelection}
        />
      </div>
    </div>
  );
};

export default CryptoSelector;
