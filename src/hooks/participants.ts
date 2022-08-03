import { SelectOptionProps } from "../constants/select-box";
import { FirebaseSiteVisit } from "../types/site-visit";

export const participantSelectOptions = (
  // visits: Promise<FirebaseSiteVisit[]>
  visits: FirebaseSiteVisit[]
): SelectOptionProps[] => {
  const siteVisits = visits;

  let participants: any = [];

  siteVisits.forEach((visit) => {
    participants.push(visit.associateName);
    // TODO: Use this is we add in partipants
    // if (visit.otherAttendees.length) {
    //   participants.push(visit.otherAttendees);
    // }
  });

  // Flatten nested array
  // participants = participants.flatMap((val) => val);

  // Get unique values
  participants = participants.reduce((allNames, currName) => {
    if (!allNames.includes(currName)) {
      allNames.push(currName);
    }
    return allNames;
  }, []);

  return participants.map((val) => ({ name: val, value: val }));
};
