export type SiteVisit = {
  id: number;
  startTime: string;
  endTime: string;
  email: string;
  fullName: string;
  address: string;
  pointOfContact: string;
  locationType: string;
  otherAttendees: string[];
  photos: string[];
  lessonsLearned: string[];
  additonalInfo: string;
  digitalHacks: string;
};
