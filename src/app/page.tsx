"use client";
import { Button, Heading, Text } from "@radix-ui/themes";
import Calculator from "./components/calculator";
import Web3 from "./components/web3";
import ComboInput from "./components/input/ComboInput";
import Landing from "./components/screens/Landing";
import { LegacyRef, MutableRefObject, useRef } from "react";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);

  const onScroll = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <Landing className="flex justify-center">
        <div className="max-w-4xl w-full items-center justify-center font-mono text-sm flex flex-col">
          <div
            className="p-4 rounded-2xl max-w-[600px]"
            style={{
              background: "linear-gradient(90deg,#fdf1cb,#b01041)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <Heading
              as="h1"
              align="center"
              size="8"
              className="uppercase font-extrabold"
            >
              <em>Your All Time High Portfolio Calculator</em>
            </Heading>
          </div>
          <div className="text-center mb-12 max-w-[440px]">
            <Text size="4">
              Calculate how much your portfolio would be worth if every coin you
              hold would reach their all time high!
            </Text>
          </div>
          <Button onClick={onScroll} size="4" className="bg-[#bf3e5d]">
            <Text weight="bold" size="6">
              Calculate now
            </Text>
          </Button>
        </div>
      </Landing>
      {/* <Web3 /> */}
      <Landing className="flex">
        <div
          ref={ref}
          className="h-fit flex flex-col max-w-[400px] mt-12 sm:mt-20 justify-center"
        >
          <div
            className="sm:p-4 rounded-2xl max-w-[600px]"
            style={{
              background: "linear-gradient(90deg,#fdf1cb,#b01041)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            <Heading
              as="h2"
              align="center"
              size={{ initial: "7", sm: "8" }}
              className="uppercase font-extrabold"
            >
              <em>What coins do you hodl?</em>
            </Heading>
          </div>
          <div className="text-center mb-6 sm:mb-12 max-w-[440px]">
            <Text size={{ initial: "2", sm: "3" }}>
              Enter the amount you currently hold of each coin to calculate your
              all time high portfolio value.
            </Text>
          </div>
          <Calculator />
        </div>
      </Landing>
    </main>
  );
}
