"use client";
import Landing from "./components/screens/Landing";
import { useRef, useState } from "react";
import Calculator from "./components/screens/Calculator";
import clsx from "clsx";

export default function Home() {
  const [screen, setScreen] = useState<"landing" | "calculator">("landing");

  const onScroll = () => {
    setScreen("calculator");
  };
  return (
    <main className="relative flex max-h-screen min-h-screen min-w-[100vw] max-w-[100vw] overflow-x-hidden flex-row">
      <Landing
        onScroll={onScroll}
        className={clsx(
          "flex absolute left-1/2 transform -translate-x-1/2 sm:translate-y-1/3 sm:mt-[60px] transition duration-300 ease-in-out delay-150 w-full justify-center px-6",
          screen === "calculator" ? "-translate-x-[200%]" : ""
        )}
      />
      <Calculator
        className={clsx(
          "absolute left-1/2 transform translate-x-[200%] duration-300 ease-in-out delay-150 w-full flex justify-center px-6",
          screen === "calculator" ? "!-translate-x-1/2" : ""
        )}
      />
    </main>
  );
}
