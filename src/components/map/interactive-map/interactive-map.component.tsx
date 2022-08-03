import React, { FunctionComponent } from "react";
// import { UsMapIcon2 } from "../us-map/us-map-2.component";
import { UsMapIcon } from "../us-map/us-map.component";
import "./interactive-map.css";

type InteractiveMapProps = {
  activeStates?: any;
};

const InteractiveMap: FunctionComponent<InteractiveMapProps> = ({
  activeStates,
}) => {
  return (
    <div className="map-container">
      <UsMapIcon activeStates={activeStates} />
    </div>
  );
};

export default InteractiveMap;
