import React, { FunctionComponent } from "react";
import filter from "./filter.svg";
import "./icons.css";

type FilterIconProps = {
  className?: string;
};
export const FilterIcon: FunctionComponent<FilterIconProps> = ({
  className,
}) => <img src={filter} alt="filter" className={`defaultIcon ${className}`} />;
