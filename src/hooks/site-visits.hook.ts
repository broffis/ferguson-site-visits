import { SiteVisit, FirebaseSiteVisit } from "../types/site-visit";
import { mockSiteVisits } from "../data/site-visits.mock-data";
import { getListofVisits } from "../pages/firebase";

export const getSiteVists = (filters) => {
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

    if (stateFilters.some((e) => e === stateVal)) {
      filteredByState.push(visit);
    }
  });

  let filteredVisits = [
    ...filteredByParticipants,
    ...filteredBySiteType,
    ...filteredByState,
  ];

  filteredVisits = filteredVisits.reduce<SiteVisit[]>(
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

export const getFirebaseVisits = async () => {
  const firebaseApiVisits = await getListofVisits();
  return firebaseApiVisits;
};
// export const getFirebaseVisits = async (filters) => {
//   const { state, site, participants } = filters;
//   const stateFilters = state.map((filter) => filter.value);
//   const siteFilters = site.map((filter) => filter.value);
//   const particpantFilter = participants.map((filter) => filter.value);

//   const firebaseApiVisits = await getListofVisits();

//   const filteredBySiteType: FirebaseSiteVisit[] = [];
//   firebaseApiVisits.forEach((visit) => {
//     console.log(visit);
//     if (siteFilters.some((e) => visit.siteTypes.includes(e))) {
//       filteredBySiteType.push(visit);
//     }
//   });

//   const filteredByParticipants: FirebaseSiteVisit[] = [];
//   firebaseApiVisits.forEach((visit) => {
//     let visitParticipants: any = [visit.associateName];

//     // TODO: Use this if we add in participants
//     // if (visit.otherAttendees.length) {
//     //   visitParticipants.push(visit.otherAttendees);
//     // }

//     // visitParticipants = visitParticipants.flatMap((val) => val);

//     if (particpantFilter.some((e) => visitParticipants.includes(e))) {
//       filteredByParticipants.push(visit);
//     }
//   });

//   const filteredByState: FirebaseSiteVisit[] = [];
//   firebaseApiVisits.forEach((visit) => {
//     if (visit.siteVisitAddress) {
//       const addressArr = visit.siteVisitAddress.split(",");
//       const stateZipVal = addressArr[addressArr.length - 1].trim();
//       const [stateVal] = stateZipVal.split(" ");

//       if (stateFilters.some((e) => e === stateVal.toUpperCase())) {
//         filteredByState.push(visit);
//       }
//     }
//   });

//   let filteredVisits = [
//     ...filteredByParticipants,
//     ...filteredBySiteType,
//     ...filteredByState,
//   ];

//   filteredVisits = filteredVisits.reduce<FirebaseSiteVisit[]>(
//     (finalVisits, currentVisit) => {
//       // Get ids from visits
//       const filteredVisitIds = finalVisits.map((fv) => fv.id);

//       // Add item if not already in array
//       if (!filteredVisitIds.some((e) => e === currentVisit.id)) {
//         finalVisits.push(currentVisit);
//       }
//       return finalVisits;
//     },
//     []
//   );

//   console.log("final filtered visits", filteredVisits);

//   return filteredVisits;
// };
