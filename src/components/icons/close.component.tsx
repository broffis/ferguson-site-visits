import React, { FunctionComponent } from "react";
import close from "./close.svg";
import "./icons.css";

type CloseIconProps = {
  className?: string;
};
export const CloseIcon: FunctionComponent<CloseIconProps> = ({ className }) => (
  <img src={close} alt="close" className={`defaultIcon ${className}`} />
);
