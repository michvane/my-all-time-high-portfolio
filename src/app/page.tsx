"use client";
import CurrencySelector from "./components/CurrencySelector";
import { useEffect, useState } from "react";

export default function Home() {
  const [jsonData, setJsonData] = useState({});

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("/api/getCurrencies");

      console.log(response);
      if (response.ok) {
        const data = await response.json();

        setJsonData(data);
      }
    };

    getData();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* {Object.keys(jsonData).map((key) => jsonData[key].name)} */}
        <CurrencySelector jsonData={jsonData} />
      </div>
    </main>
  );
}
