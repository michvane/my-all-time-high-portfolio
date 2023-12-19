import React, { useState } from "react";
import ComboSelect from "../calculator/ComboSelect";
import styles from "./style.module.css";
import clsx from "clsx";

const ComboInput: React.FC = () => {
  const [text, setText] = useState("Bitcoin");
  const [number, setNumber] = useState(0);

  const options = [
    { label: "Bitcoin", value: "Bitcoin" },
    { label: "Ethereum", value: "Ethereum" },
    { label: "Binance Coin", value: "Binance Coin" },
  ];

  const handleCryptoSelect = (value: string) => {
    setText(value);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumber(Number(event.target.value));
  };

  return (
    <div className="flex justify-center">
      <div className="flex max-w-[300px]">
        <input
          type="number"
          value={number}
          onChange={handleNumberChange}
          className={clsx("w-2/5", styles.cell)}
        />
        <ComboSelect
          options={options}
          value={text}
          onChange={handleCryptoSelect}
          jsonData={undefined}
        />
      </div>
    </div>
  );
};

export default ComboInput;
