import { Heading, Text } from "@radix-ui/themes";
import clsx from "clsx";
import CalculatorInput from "../calculatorInput";

const Calculator: React.FC<{ className: string }> = ({ className }) => {
  return (
    <div className={clsx(className)}>
      <div className="h-fit flex flex-col max-w-[400px] sm:max-w-[400px] mt-12 sm:mt-20 justify-center">
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
        <CalculatorInput />
      </div>
    </div>
  );
};

export default Calculator;
