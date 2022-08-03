import React, { FunctionComponent } from "react";
// import { FilterOption } from "src/components/types/filter";
import { getSiteVists } from "src/hooks/site-visits.hook";

type VisitTableProps = {
  // visits?: SiteVisit[];
  // filters: FilterOption[];
  filters: any;
};

const VisitTable: FunctionComponent<VisitTableProps> = ({ filters }) => {
  getSiteVists(filters);
  return <div>VisitTable</div>;
};

export default VisitTable;
