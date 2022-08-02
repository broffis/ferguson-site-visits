import React, { useState } from "react";
import ExpandableFilters from "src/components/map/expandable-filters/expandable-filters.component";
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

  const updateSelectedFilters = (type, filters) => {
    const currSelectedFilters = selectedFilters;
    const newSelectedFilters = {
      ...currSelectedFilters,
      [type]: filters,
    };

    setSelectedFilters(newSelectedFilters);
  };

  return (
    <div className="page-container">
      <div>Map</div>
      <div>
        <ExpandableFilters
          updateGlobalFilterList={updateSelectedFilters}
          allFilters={selectedFilters}
        />
        <SelectedFilters filters={selectedFilters} />
      </div>
      <div>Table</div>
    </div>
  );
};

export default Map;
