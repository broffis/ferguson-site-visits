import React, { useState } from "react";
import DropdownInput from "src/components/common/dropdown-input/dropdown-input.component";
import DropdownSelect from "src/components/common/dropdown-select/dropdown-select.component";
import ExpandableFilters from "src/components/map/expandable-filters/expandable-filters.component";
import InteractiveMap from "src/components/map/interactive-map/interactive-map.component";
import { stateSelectOptions } from "src/constants/location";
import { participantSelectOptions } from "src/constants/participants";
import { siteTypeOptions } from "src/constants/site-type";
import SelectedFilters from "src/components/map/selected-filters/selected-filters.component";

import "./map.css";

type FilterOption = {
  name: string;
  value: string;
};

type SelectedFilterState = {
  [key: string]: FilterOption[];
};
const Map = () => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilterState>({
    state: [],
    site: [],
    participants: [],
  });

  const updateSelectedFilters = (type, item) => {
    const currSelectedFilters = selectedFilters;
    const filtersToUpdate = currSelectedFilters[type];
    let newFilters;

    if (filtersToUpdate.some((e) => e.value === item.value)) {
      newFilters = filtersToUpdate.filter((e) => e.value !== item.value);
    } else {
      newFilters = [...filtersToUpdate, item];
    }

    setSelectedFilters({
      ...currSelectedFilters,
      [type]: newFilters,
    });
  };

  return (
    <div className="page-container">
      <InteractiveMap />
      <div>
        <ExpandableFilters>
          <>
            <DropdownSelect
              label="State List"
              type="state"
              options={stateSelectOptions}
              activeOptions={selectedFilters.state}
              onClick={updateSelectedFilters}
            />
            <DropdownSelect
              label="Site type"
              type="site"
              options={siteTypeOptions}
              activeOptions={selectedFilters.site}
              onClick={updateSelectedFilters}
            />
            <DropdownInput
              label="Participants"
              type="participants"
              options={participantSelectOptions()}
              activeOptions={selectedFilters.participants}
              onClick={updateSelectedFilters}
            />
          </>
        </ExpandableFilters>
        <SelectedFilters
          filters={selectedFilters}
          onPillClick={updateSelectedFilters}
        />
      </div>
      <div>Table</div>
    </div>
  );
};

export default Map;
