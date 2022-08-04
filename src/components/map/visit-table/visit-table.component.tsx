import React, { FunctionComponent, useEffect } from "react";
import { filterSiteVisits } from "../../../hooks/site-visits.hook";
import { SelectedFilterState } from "../../../types/filter";
import { FirebaseSiteVisit } from "../../../types/site-visit";

import "./visit-table.css";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

type VisitTableRowProps = {
  visit: FirebaseSiteVisit;
};

const VisitTableRow: FunctionComponent<VisitTableRowProps> = ({ visit }) => {
  return (
    <tr className="visit-table-row data-row">
      <>
        <td className="visit-table-cell data-cell">{visit.associateName}</td>
        <td className="visit-table-cell data-cell">
          {formatDate(visit.siteVisitDate)}
        </td>
        <td className="visit-table-cell data-cell">
          {visit.siteTypes.join(" | ")}
        </td>
        <td className="visit-table-cell data-cell">{visit.siteVisitAddress}</td>
        <td className="visit-table-cell data-cell">{visit.poc}</td>
        <td className="visit-table-cell data-cell">
          <p className="visit-table-data overflow-text">{visit.goals}</p>
          <a
            className="visit-table-link view-more"
            href="https://mydigitalspace.sharepoint.com/sites/ProductUXCMSDigitalPassport/SitePages/Site-Visit-Location.aspx"
          >
            (view more)
          </a>
        </td>
        <td className="visit-table-cell data-cell">
          <p className="visit-table-data overflow-text">{visit.mainTakes}</p>
          <a
            className="visit-table-link view-more"
            href="https://mydigitalspace.sharepoint.com/sites/ProductUXCMSDigitalPassport/SitePages/Site-Visit-Location.aspx"
          >
            (view more)
          </a>
        </td>
      </>
    </tr>
  );
};

type VisitTableProps = {
  filters: SelectedFilterState;
  visitData?: FirebaseSiteVisit[];
};

const VisitTable: FunctionComponent<VisitTableProps> = ({
  filters,
  visitData,
}) => {
  const visitTableData = filterSiteVisits(filters, visitData);

  return (
    <div>
      <p>Visits Table</p>
      <table className="visit-table">
        <thead className="visit-table-head">
          <tr className="visit-table-row header-row">
            <>
              <th className="visit-table-cell header-cell">Author</th>
              <th className="visit-table-cell header-cell">Visit Date</th>
              <th className="visit-table-cell header-cell">Location Type</th>
              <th className="visit-table-cell header-cell">Address</th>
              <th className="visit-table-cell header-cell">Location PoC</th>
              <th className="visit-table-cell header-cell">Goals</th>
              <th className="visit-table-cell header-cell">Takeaways</th>
            </>
          </tr>
        </thead>
        <tbody className="visit-table-body">
          <>
            {visitTableData.map((visit) => {
              return <VisitTableRow key={visit.id} visit={visit} />;
            })}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default VisitTable;
