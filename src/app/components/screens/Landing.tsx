import { Button, Heading, Text } from "@radix-ui/themes";
import clsx from "clsx";
import React from "react";

const Landing: React.FC<{ className?: string; onScroll: () => void }> = ({
  className,
  onScroll,
}) => {
  return (
    <div className={clsx(className)}>
      <div className="flex flex-col max-w-4xl mt-12 sm:mt-0 items-center">
        <div
          className="p-4 rounded-2xl max-w-[600px]"
          style={{
            background: "linear-gradient(120deg,#e6d9ac,#e54666)",
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
        <Button onClick={onScroll} size="4">
          <Text weight="bold" size="6">
            Calculate now
          </Text>
        </Button>
      </div>
    </div>
  );
};

export default Landing;
