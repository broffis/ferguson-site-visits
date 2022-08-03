import React, { FunctionComponent } from "react";
import "./selected-filters.css";

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

type FilterPillProps = {
  name?: string;
  value?: string;
  type?: string;
  onClick: (type, item) => void;
};

const FilterPill: FunctionComponent<FilterPillProps> = ({
  name,
  value,
  type,
  onClick,
}) => (
  <button
    onClick={() => onClick(type, { name, value })}
    className="filter-pill"
  >
    {`${capitalizeFirstLetter(type || "")}: ${name}`}
  </button>
);

type FilterOption = {
  name?: string;
  value?: string;
  type?: string;
};

type SelectedFiltersProps = {
  filters?: { [key: string]: FilterOption[] };
  onPillClick: (type, item) => void;
};
const SelectedFilters: FunctionComponent<SelectedFiltersProps> = ({
  filters,
  onPillClick,
}) => {
  const selectedFilters: FilterOption[] = [];
  if (filters) {
    for (const [key, values] of Object.entries(filters)) {
      values.forEach((val) => {
        const filter = {
          value: val.value,
          name: val.name,
          type: key,
        };
        selectedFilters.push(filter);
      });
    }
  }

  return (
    <div className="selected-filters">
      <p>Selected Filters:</p>
      <div className="selected-filters-list">
        {selectedFilters.map((filter, index) => (
          <FilterPill
            key={`pill=${index}`}
            name={filter.name}
            value={filter.value}
            type={filter.type}
            onClick={onPillClick}
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedFilters;
