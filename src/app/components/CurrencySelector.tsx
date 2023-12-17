import React, { useState } from "react";

interface Props {
  jsonData: any;
}

const CryptoSelector: React.FC<Props> = ({ jsonData }) => {
  const [selectedCryptoId, setSelectedCryptoId] = useState("0");
  const [enteredValue, setEnteredValue] = useState("");
  const [calculatedValue, setCalculatedValue] = useState<number>();

  const handleCryptoSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    setSelectedCryptoId(event.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(event.target.value);
  };

  const calculateValueAtATH = () => {
    if (selectedCryptoId && enteredValue) {
      const selectedCrypto = jsonData[selectedCryptoId];
      const currentPrice = parseFloat(selectedCrypto.current_price);
      const athPrice = parseFloat(selectedCrypto.ath);

      console.log({ currentPrice, athPrice });

      const calculatedValueInATH = parseFloat(enteredValue) * athPrice;

      setCalculatedValue(calculatedValueInATH);
    }
  };

  return (
    <div>
      <label htmlFor="crypto-selector">Select Crypto:</label>
      <select
        id="crypto-selector"
        value={selectedCryptoId}
        onChange={handleCryptoSelection}
      >
        {Object.keys(jsonData).map((key) => (
          <option key={key} value={key}>
            {jsonData[key].name}
          </option>
        ))}
      </select>

      <label htmlFor="entered-value">Enter Value:</label>
      <input
        type="number"
        id="entered-value"
        value={enteredValue}
        onChange={handleInputChange}
      />

      <button onClick={calculateValueAtATH}>Calculate Value at ATH</button>

      <p>Value at ATH: {calculatedValue}</p>
    </div>
  );
};

export default CryptoSelector;
