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

export type FirebaseSiteVisit = {
  id: string;
  associateName: string;
  goals: string;
  mainTakes: string;
  photoUrl: string;
  poc: string;
  siteTypes: string[];
  siteVisitAddress: string;
  siteVisitDate: string;
};
