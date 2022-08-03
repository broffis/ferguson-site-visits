import React, { FunctionComponent } from "react";
import chevronDown from "./chevron-down.svg";
import "./icons.css";

type ChevronDownProps = {
  className?: string;
};
export const ChevronDownIcon: FunctionComponent<ChevronDownProps> = ({
  className,
}) => (
  <img src={chevronDown} alt="filter" className={`defaultIcon ${className}`} />
);
