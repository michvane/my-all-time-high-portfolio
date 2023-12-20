import React, { useState } from "react";
import { SelectedCrypto } from ".";
import Input from "../input";
import Selector, { Option } from "../selector";
import ComboSelect from "./ComboSelect";
import styles from "./style.module.css";
import clsx from "clsx";
import { CryptoInfo } from "@/types";

interface Props {
  cryptoList: CryptoInfo[];
  selectedCrypto: SelectedCrypto;
  onSelectedCurrency: (
    currency: string,
    amount: string | undefined,
    index: number
  ) => void;
  index: number;
}

const CryptoSelector: React.FC<Props> = ({
  cryptoList,
  selectedCrypto,
  onSelectedCurrency,
  index,
}) => {
  const handleCryptoSelection = (value: string) => {
    onSelectedCurrency(value, selectedCrypto.amount, index);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;
    if (Number(newValue) < 10 && newValue.indexOf(".") === 2) {
      newValue = newValue.slice(1);
    } else if (
      newValue.length > 1 &&
      newValue.startsWith("0") &&
      newValue.indexOf(".") === -1
    ) {
      newValue = newValue.slice(1);
    }

    onSelectedCurrency(selectedCrypto.currency, String(newValue), index);
  };

  const options: Option[] = Object.keys(cryptoList).map((key) => {
    const crypto = cryptoList[Number(key)];
    return { value: key, label: crypto.name };
  });

  return (
    <div className="flex w-full justify-center">
      <div className="flex w-full sm:max-w-[340px]">
        <input
          type="number"
          placeholder="0.0"
          value={
            selectedCrypto.amount === undefined ? "" : selectedCrypto.amount
          }
          onChange={handleInputChange}
          className={clsx("w-2/5", styles.input)}
        />
        <ComboSelect
          options={options}
          value={selectedCrypto.currency}
          cryptoList={cryptoList}
          onChange={handleCryptoSelection}
        />
      </div>
    </div>
  );
};

export default CryptoSelector;
