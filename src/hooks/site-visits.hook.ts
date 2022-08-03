import { SiteVisit } from "src/components/types/site-visit";
import { mockSiteVisits } from "src/data/site-visits.mock-data";

export const getSiteVists = (filters) => {
  console.log("getSiteVisits", { filters });

  const { state, site, participants } = filters;
  const stateFilters = state.map((filter) => filter.value);
  const siteFilters = site.map((filter) => filter.value);
  const particpantFilter = participants.map((filter) => filter.value);
  const siteVists = mockSiteVisits();

  const filteredBySiteType: SiteVisit[] = [];
  siteVists.forEach((visit) => {
    if (siteFilters.some((e) => e === visit.locationType)) {
      filteredBySiteType.push(visit);
    }
  });

  const filteredByParticipants: SiteVisit[] = [];
  siteVists.forEach((visit) => {
    let visitParticipants: any = [visit.fullName];

    if (visit.otherAttendees.length) {
      visitParticipants.push(visit.otherAttendees);
    }

    visitParticipants = visitParticipants.flatMap((val) => val);

    if (particpantFilter.some((e) => visitParticipants.includes(e))) {
      filteredByParticipants.push(visit);
    }
  });

  const filteredByState: SiteVisit[] = [];
  siteVists.forEach((visit) => {
    const addressArr = visit.address.split(",");
    const stateZipVal = addressArr[addressArr.length - 1].trim();
    const [stateVal] = stateZipVal.split(" ");
    console.log(stateVal);

    if (stateFilters.some((e) => e === stateVal)) {
      filteredByState.push(visit);
    }
  });

  let filteredVisits = [
    ...filteredByParticipants,
    ...filteredBySiteType,
    ...filteredByState,
  ];

  console.log({ filteredVisits });

  filteredVisits = filteredVisits.reduce<SiteVisit[]>(
    (finalVisits, currentVisit) => {
      const filteredVisitIds = finalVisits.map((fv) => fv.id);
      console.log({ filteredVisitIds });

      if (!filteredVisitIds.some((e) => e === currentVisit.id)) {
        finalVisits.push(currentVisit);
      }
      return finalVisits;
    },
    []
  );
  console.log({ filteredVisits });
  return filteredVisits;
};
