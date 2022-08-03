import React, { FunctionComponent } from "react";
import { UsMapIcon } from "../us-map/us-map.component";
import { stateSelectOptions } from "../../../constants/location";
import "./interactive-map.css";
import { StateOption } from "../../../types/states";

type InteractiveMapProps = {
  onStateClicked: (val) => void;
  activeStates: StateOption[];
};

const InteractiveMap: FunctionComponent<InteractiveMapProps> = ({
  activeStates,
  onStateClicked,
}) => {
  const handleStateClicked = (val) => {
    const [stateClicked] = stateSelectOptions.filter(
      (state) => state.value === val.toUpperCase()
    );

    onStateClicked(stateClicked);
  };
  return (
    <div className="map-container">
      <UsMapIcon activeStates={activeStates} clickState={handleStateClicked} />
    </div>
  );
};

export default InteractiveMap;
