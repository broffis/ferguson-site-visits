import React, { FunctionComponent } from "react";
import "./selected-filters.css";

type FilterPillProps = {
  name?: string;
  value?: string;
};
const FilterPill: FunctionComponent<FilterPillProps> = ({ name, value }) => (
  <button className="filter-pill">{name}</button>
);

type FilterOption = {
  name?: string;
  value?: string;
};

type SelectedFiltersProps = {
  filters?: { [key: string]: FilterOption[] };
};
const SelectedFilters: FunctionComponent<SelectedFiltersProps> = ({
  filters,
}) => {
  console.log(filters);
  const selectedFilters: FilterOption[] = [];
  if (filters) {
    for (const [key, values] of Object.entries(filters)) {
      values.forEach((val) => {
        const filter = { value: val.value, name: `${key}: ${val.name}` };
        console.log(filter);
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
          />
        ))}
      </div>
    </div>
  );
};

export default SelectedFilters;
