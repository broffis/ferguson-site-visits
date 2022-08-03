import React, { FunctionComponent } from "react";
import { getSiteVists } from "../../../hooks/site-visits.hook";
import { SelectedFilterState } from "../../../types/filter";
import { SiteVisit } from "../../../types/site-visit";

import "./visit-table.css";

const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  console.log({ dateString, date });
  return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
};

type VisitTableRowProps = {
  visit: SiteVisit;
};

const VisitTableRow: FunctionComponent<VisitTableRowProps> = ({ visit }) => {
  return (
    <tr className="visit-table-row data-row">
      <>
        <td className="visit-table-cell data-cell">{visit.fullName}</td>
        <td className="visit-table-cell data-cell">
          {formatDate(visit.startTime)}
        </td>
        <td className="visit-table-cell data-cell">{visit.locationType}</td>
        <td className="visit-table-cell data-cell">{visit.address}</td>
        <td className="visit-table-cell data-cell">{visit.pointOfContact}</td>
        <td className="visit-table-cell data-cell">
          <p className="visit-table-data overflow-text">Goals go here</p>
          <a
            className="visit-table-link view-more"
            href="https://mydigitalspace.sharepoint.com/sites/ProductUXCMSDigitalPassport/SitePages/Site-Visit-Location.aspx"
          >
            (view more)
          </a>
        </td>
        <td className="visit-table-cell data-cell">
          <p className="visit-table-data overflow-text">
            {visit.lessonsLearned}
          </p>
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
};

const VisitTable: FunctionComponent<VisitTableProps> = ({ filters }) => {
  const filteredVisits = getSiteVists(filters);
  console.log(filteredVisits);
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
            {filteredVisits.map((visit) => {
              return <VisitTableRow key={visit.id} visit={visit} />;
            })}
          </>
        </tbody>
      </table>
    </div>
  );
};

export default VisitTable;
