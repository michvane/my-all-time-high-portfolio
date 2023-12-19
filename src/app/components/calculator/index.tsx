import { useEffect, useState } from "react";
import CurrencySelector from "./CurrencySelector";
import { Button, Heading, Text } from "@radix-ui/themes";
import { PlusIcon } from "@radix-ui/react-icons";

const DEFAULT_INPUT = { currency: "0", amount: undefined };

export type SelectedCrypto = {
  currency: string;
  amount: string | undefined;
};

const Calculator: React.FC = () => {
  const [selectedCryptos, setSelectedCryptos] = useState<SelectedCrypto[]>([
    DEFAULT_INPUT,
  ]);
  const [calculatedValue, setCalculatedValue] = useState<number>(0);

  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/getCurrencies");

      if (response.ok) {
        const data = await response.json();

        setJsonData(data);
      }
    };

    getData();
  }, []);

  const handleAddRow = () => {
    setCalculatedValue(0);

    const currentSelectedCryptos = selectedCryptos.slice();
    currentSelectedCryptos.push({ currency: "0", amount: undefined });
    setSelectedCryptos(currentSelectedCryptos);
  };

  const handleSelectedCurrency = (
    currency: string,
    amount: string | undefined,
    index: number
  ) => {
    setCalculatedValue(0);

    const currentSelectedCryptos = selectedCryptos.slice();

    if (!currentSelectedCryptos[index]) {
      currentSelectedCryptos.push({ currency, amount });
    } else {
      currentSelectedCryptos[index].currency = currency;
      currentSelectedCryptos[index].amount = amount;
    }

    setSelectedCryptos(currentSelectedCryptos);
  };

  const calculateValueAtATH = () => {
    const AthArray = selectedCryptos.map((selectedCrypto) => {
      // @ts-ignore
      const crypto = jsonData[selectedCrypto.currency];
      const athPrice = parseFloat(crypto.ath);
      const calculatedValueInATH = parseFloat(selectedCrypto.amount || '') * athPrice;

      return calculatedValueInATH;
    });

    const sum = AthArray.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    setCalculatedValue(sum);
  };

  return (
    <div>
      <div className="flex justify-center items-center flex-col gap-2 mb-4">
        <div className="flex w-full sm:w-[300px] justify-center flex-row gap-4">
          <label htmlFor="crypto-selector" className="w-2/5 text-left">
            <Text as="div" weight="bold" size={{ initial: "2", sm: "3" }}>
              Your holdings
            </Text>
          </label>
          <label htmlFor="entered-value" className="w-3/5 text-left">
            <Text as="div" weight="bold" size={{ initial: "2", sm: "3" }}>
              Select Crypto
            </Text>
          </label>
        </div>
        {selectedCryptos.map((selectedCrypto, index) => (
          <CurrencySelector
            key={index}
            jsonData={jsonData}
            selectedCrypto={selectedCrypto}
            onSelectedCurrency={handleSelectedCurrency}
            index={index}
          />
        ))}
      </div>
      <div className="flex mb-8">
        <Button onClick={handleAddRow} className="bg-[#bf3e5d]">
          <PlusIcon height={16} width={16} />
        </Button>
      </div>
      <div className="flex justify-center items-center flex-col">
        <Button size="2" onClick={calculateValueAtATH} className="bg-[#bf3e5d]">
          <Text weight="bold" size="4">
            Calculate
          </Text>
        </Button>

        {calculatedValue ? (
          <div className="flex flex-col items-center">
            <Heading as="h2" size="7" className="!mt-4">
              ${calculatedValue}
            </Heading>
            <Text>Looking good 😎</Text>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Calculator;
