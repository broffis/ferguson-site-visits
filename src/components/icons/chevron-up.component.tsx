import React, { FunctionComponent } from "react";
import chevronUp from "./chevron-up.svg";
import "./icons.css";

type ChevronUpProps = {
  className?: string;
};
export const ChevronUpIcon: FunctionComponent<ChevronUpProps> = ({
  className,
}) => (
  <img
    src={chevronUp}
    alt="Chevron Up"
    className={`defaultIcon ${className}`}
  />
);
