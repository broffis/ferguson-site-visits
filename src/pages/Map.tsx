import React, { useCallback, useEffect, useState } from "react";
import DropdownInput from "../components/common/dropdown-input/dropdown-input.component";
import DropdownSelect from "../components/common/dropdown-select/dropdown-select.component";
import ExpandableFilters from "../components/map/expandable-filters/expandable-filters.component";
import InteractiveMap from "../components/map/interactive-map/interactive-map.component";
import { stateSelectOptions } from "../constants/location";
import { siteTypeOptions } from "../constants/site-type";
import SelectedFilters from "../components/map/selected-filters/selected-filters.component";
import { SelectedFilterState } from "../types/filter";
import VisitTable from "../components/map/visit-table/visit-table.component";
import { getListofVisits } from "./firebase";

import "./map.css";
import { participantSelectOptions } from "../hooks/participants";
import { FirebaseSiteVisit } from "../types/site-visit";

/**
 * TODO
 * * Use firebase data to populate table
 *    * pass firebase data into table
 *    * use selected filters
 */

const Map = () => {
  const [selectedFilters, setSelectedFilters] = useState<SelectedFilterState>({
    state: [],
    site: [],
    participants: [],
  });

  const [allVisits, setAllVisits] = useState<FirebaseSiteVisit[]>([]);

  const getAllFirebaseVisits = useCallback(async () => {
    const data = await getListofVisits();
    setAllVisits(data);
  }, []);

  useEffect(() => {
    getAllFirebaseVisits().catch(console.error);
  }, [getAllFirebaseVisits]);

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

  const interactiveMapClicked = (item) => {
    const currStateFilters = selectedFilters.state;

    setSelectedFilters({
      ...selectedFilters,
      state: [...currStateFilters, item],
    });
  };

  const hasSelectedFilter = () => {
    const allFilters = [
      ...selectedFilters.state,
      ...selectedFilters.site,
      ...selectedFilters.participants,
    ];
    return allFilters.length > 0;
  };

  return (
    <div className="page-container">
      <InteractiveMap
        activeStates={selectedFilters.state}
        onStateClicked={interactiveMapClicked}
      />
      {hasSelectedFilter() ? (
        <>
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
                  options={participantSelectOptions(allVisits)}
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
          <VisitTable filters={selectedFilters} />
        </>
      ) : (
        <p className="no-filters-label">Select a state to begin</p>
      )}
    </div>
  );
};

export default Map;
