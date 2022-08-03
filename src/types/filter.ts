export type PillFilterOption = {
  name?: string;
  value?: string;
  type?: string;
};

export type FilterOption = {
  name: string;
  value: string;
};

export type SelectedFilterState = {
  [key: string]: FilterOption[];
};
