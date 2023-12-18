"use client";
import { Heading, Text } from "@radix-ui/themes";
import Calculator from "./components/calculator";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="max-w-2xl w-full items-center justify-center font-mono text-sm flex lg:mt-40 flex-col">
        <div
          className="p-4 rounded-2xl max-w-[400px]"
          style={{
            background: "linear-gradient(90deg,#fe57f7,#4d0eff)",
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
            <em>Your All Time High Portfolio</em>
          </Heading>
        </div>
        <div className="text-center mb-12 max-w-[440px]">
          <Text size="4">
            Calculate how much your portfolio would be worth if every coin would
            reach their all time high!
          </Text>
        </div>
        <Calculator />
      </div>
    </main>
  );
}
