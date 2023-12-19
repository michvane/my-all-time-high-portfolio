import clsx from "clsx";
import React from "react";

const Landing: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => {
  return <div className={clsx("h-screen", className)}>{children}</div>;
};

export default Landing;
