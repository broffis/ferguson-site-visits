import React, { FunctionComponent } from "react";
import { useState } from "react";
import DropdownInput from "src/components/common/dropdown-input/dropdown-input.component";
import DropdownSelect from "src/components/common/dropdown-select/dropdown-select.component";
import { participantSelectOptions } from "src/constants/participants";
import { stateSelectOptions } from "src/constants/location";
import { siteTypeOptions } from "src/constants/site-type";
import { CloseIcon } from "../../icons/close.component";
import { FilterIcon } from "../../icons/filter.component";

import "./expandable-filters.css";

type SelectOption = {
  name: string;
  value: string;
};

type ExpandableFiltersProps = {
  updateGlobalFilterList: Function;
  allFilters: any;
};

const ExpandableFilters: FunctionComponent<ExpandableFiltersProps> = ({
  allFilters,
  updateGlobalFilterList,
}) => {
  const [expandedFilters, setExpandedFilters] = useState(true); // => reset to false for deploy
  const [showFilters, setShowFilters] = useState(true); // => reset to false for deploy

  // const [selectedFilters] = useState(allFilters);

  const [selectedStates, setSelectedStates] = useState<SelectOption[]>([]);
  const [selectedSiteType, setSelectedSiteType] = useState<SelectOption[]>([]);
  const [selectedParticipants, setSelectedParticipants] = useState<
    SelectOption[]
  >([]);

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

  const toggleSelectState = (state) => {
    let currStateList = selectedStates;
    let newStateList;
    if (currStateList.includes(state)) {
      newStateList = currStateList.filter((selected) => selected !== state);
    } else {
      newStateList = [...currStateList, state];
    }

    setSelectedStates(newStateList);
    updateGlobalFilterList("State", newStateList);
  };

  const toggleSelectedSiteType = (type) => {
    let [currSiteType] = selectedSiteType;
    if (currSiteType === type) {
      setSelectedSiteType([]);
      updateGlobalFilterList("Site", []);
    } else {
      setSelectedSiteType([type]);
      updateGlobalFilterList("Site", [type]);
    }
  };

  const toggleSelectedParticipants = (participant) => {
    let currParticipantList = selectedParticipants;
    let newParticipantList;
    if (currParticipantList.includes(participant)) {
      newParticipantList = currParticipantList.filter(
        (selected) => selected !== participant
      );
    } else {
      newParticipantList = [...currParticipantList, participant];
    }

    setSelectedParticipants(newParticipantList);
    updateGlobalFilterList("Participants", newParticipantList);
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
          <DropdownSelect
            label="State List"
            options={stateSelectOptions}
            activeOptions={selectedStates}
            onClick={toggleSelectState}
          />
          <DropdownSelect
            label={
              !selectedSiteType[0] ? "Site type" : selectedSiteType[0].name
            }
            options={siteTypeOptions}
            activeOptions={selectedSiteType}
            onClick={toggleSelectedSiteType}
          />

          <DropdownInput
            label="Participants"
            options={participantSelectOptions()}
            activeOptions={selectedParticipants}
            onClick={toggleSelectedParticipants}
          />
        </div>
      )}
    </div>
  );
};

export default ExpandableFilters;
