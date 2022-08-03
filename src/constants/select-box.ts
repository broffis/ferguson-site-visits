export type SelectOptionProps = {
  name: string;
  value: string;
};

export type SelectBoxProps = {
  name?: string;
  options: SelectOptionProps[];
  ariaLabel: string;
  hideArrow?: boolean;
  automationHook?: string;
  analyticsHook?: string;
  className?: string;
  required?: boolean;
  id?: string;
  employee?: boolean;
} & Omit<JSX.IntrinsicElements["select"], "className">;
