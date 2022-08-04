import { FirebaseSiteVisit } from "../types/site-visit";

export const filterSiteVisits = (filters, data) => {
  const { state, site, participants } = filters;
  const stateFilters = state.map((filter) => filter.value);
  const siteFilters = site.map((filter) => filter.value);
  const particpantFilter = participants.map((filter) => filter.value);

  const filteredBySiteType: FirebaseSiteVisit[] = [];
  data.forEach((visit) => {
    if (siteFilters.some((e) => visit.siteTypes.includes(e))) {
      filteredBySiteType.push(visit);
    }
  });

  const filteredByParticipants: FirebaseSiteVisit[] = [];
  data.forEach((visit) => {
    let visitParticipants: any = [visit.associateName];

    // TODO: Use this if we add in participants
    // if (visit.otherAttendees.length) {
    //   visitParticipants.push(visit.otherAttendees);
    // }

    // visitParticipants = visitParticipants.flatMap((val) => val);

    if (particpantFilter.some((e) => visitParticipants.includes(e))) {
      filteredByParticipants.push(visit);
    }
  });

  const filteredByState: FirebaseSiteVisit[] = [];
  data.forEach((visit) => {
    if (visit.siteVisitAddress) {
      const addressArr = visit.siteVisitAddress.split(",");
      const stateZipVal = addressArr[addressArr.length - 1].trim();
      const [stateVal] = stateZipVal.split(" ");

      if (stateFilters.some((e) => e === stateVal.toUpperCase())) {
        filteredByState.push(visit);
      }
    }
  });

  let filteredVisits = [
    ...filteredByParticipants,
    ...filteredBySiteType,
    ...filteredByState,
  ];

  filteredVisits = filteredVisits.reduce<FirebaseSiteVisit[]>(
    (finalVisits, currentVisit) => {
      // Get ids from visits
      const filteredVisitIds = finalVisits.map((fv) => fv.id);

      // Add item if not already in array
      if (!filteredVisitIds.some((e) => e === currentVisit.id)) {
        finalVisits.push(currentVisit);
      }
      return finalVisits;
    },
    []
  );

  return filteredVisits;
};
