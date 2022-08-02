import { SelectOptionProps } from "./select-box";
import { mockSiteVisits } from "../data/site-visits.mock-data";

export const participantSelectOptions = (): SelectOptionProps[] => {
  const siteVisits = mockSiteVisits();

  let participants: any = [];

  siteVisits.forEach((visit) => {
    participants.push(visit.fullName);
    if (visit.otherAttendees.length) {
      participants.push(visit.otherAttendees);
    }
  });

  // Flatten nested array
  participants = participants.flatMap((val) => val);

  // Get unique values
  participants = participants.reduce((allNames, currName) => {
    if (!allNames.includes(currName)) {
      allNames.push(currName);
    }
    return allNames;
  }, []);

  return participants.map((val) => ({ name: val, value: val }));
};
