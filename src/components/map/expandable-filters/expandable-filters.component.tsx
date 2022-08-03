import React, { FunctionComponent, useState } from "react";
import { CloseIcon } from "../../icons/close.component";
import { FilterIcon } from "../../icons/filter.component";

import "./expandable-filters.css";

type ExpandableFiltersProps = {
  children?: JSX.Element;
};

const ExpandableFilters: FunctionComponent<ExpandableFiltersProps> = ({
  children,
}) => {
  const [expandedFilters, setExpandedFilters] = useState(true); // => reset to false for deploy
  const [showFilters, setShowFilters] = useState(true); // => reset to false for deploy

  const toggleDisplayFilters = () => {
    const currExpandState = expandedFilters;
    const currFilterState = showFilters;
    const timeout = currFilterState ? 0 : 250;
    console.log({
      currExpandState,
      currFilterState,
      timeout,
    });
    setExpandedFilters(!currExpandState);
    setShowFilters(!currFilterState);
  };

  return (
    <div
      className={`expandable-filters ${expandedFilters ? "open" : "closed"}`}
    >
      <button className="base-button" onClick={toggleDisplayFilters}>
        {expandedFilters ? <CloseIcon /> : <FilterIcon />}
      </button>
      {showFilters && (
        <div
          className={`selectable-filters ${showFilters ? "open" : "closed"}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};

export default ExpandableFilters;
