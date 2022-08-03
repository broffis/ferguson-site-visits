import React, { FunctionComponent } from "react";
import { getSiteVists } from "../../../hooks/site-visits.hook";
import { SelectedFilterState } from "../../../types/filter";

type VisitTableProps = {
  filters: SelectedFilterState;
};

const VisitTable: FunctionComponent<VisitTableProps> = ({ filters }) => {
  getSiteVists(filters);
  return <div>VisitTable</div>;
};

export default VisitTable;
