import React, { FunctionComponent } from "react";
import { getSiteVists } from "src/hooks/site-visits.hook";
import { SelectedFilterState } from "src/types/filter";

type VisitTableProps = {
  filters: SelectedFilterState;
};

const VisitTable: FunctionComponent<VisitTableProps> = ({ filters }) => {
  getSiteVists(filters);
  return <div>VisitTable</div>;
};

export default VisitTable;
