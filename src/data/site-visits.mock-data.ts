import { SiteVisit } from "../types/site-visit";

export const mockSiteVisits = (): SiteVisit[] => [
  {
    id: 1,
    startTime: "8/1/2022 14:26",
    endTime: "8/1/2022 14:26",
    email: "anna.white@ferguson.com",
    fullName: "Anna Test",
    address: "123 main st, Chico, CA 12345",
    pointOfContact: "",
    locationType: "Plumbing",
    otherAttendees: ["Emily"],
    photos: [
      "https://mydigitalspace-my.sharepoint.com/personal/emily_mccabe_ferguson_com/Documents/Apps/Microsoft%20Forms/Share%20Your%20Site%20Visit/Question/RafflePrize_Anna%20White.png",
    ],
    lessonsLearned: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra nisl vitae nisi laoreet congue. Suspendisse potenti. Nulla ligula nunc, sagittis nec efficitur eget, dictum et sapien. Donec scelerisque urna ut molestie ornare. Integer mauris odio, pharetra et nisl in, congue scelerisque enim. Duis sed urna ac ex cursus feugiat. Sed aliquet eleifend sapien ut euismod. Suspendisse rhoncus interdum diam sit amet tempus. Aenean lectus ligula, porttitor id accumsan eu, semper id nunc. ",
      "",
      "",
    ],
    additonalInfo: "",
    digitalHacks: "",
  },
  {
    id: 2,
    startTime: "8/1/2022 14:35",
    endTime: "8/1/2022 14:35",
    email: "anna.white@ferguson.com",
    fullName: "Test",
    address: "123 main st, Chico, CA 12345",
    pointOfContact: "",
    locationType: "HVAC",
    otherAttendees: ["Emily"],
    photos: [],
    lessonsLearned: [
      "XX",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra nisl vitae nisi laoreet congue. Suspendisse potenti. Nulla ligula nunc, sagittis nec efficitur eget, dictum et sapien. Donec scelerisque urna ut molestie ornare. Integer mauris odio, pharetra et nisl in, congue scelerisque enim. Duis sed urna ac ex cursus feugiat. Sed aliquet eleifend sapien ut euismod. Suspendisse rhoncus interdum diam sit amet tempus. Aenean lectus ligula, porttitor id accumsan eu, semper id nunc. ",
      "",
    ],
    additonalInfo: "",
    digitalHacks: "",
  },
  {
    id: 3,
    startTime: "8/3/2022 10:35",
    endTime: "8/3/2022 14:35",
    email: "anna.white@ferguson.com",
    fullName: "Fake Visit",
    address: "456 south ave, Newport News, VA 67890",
    pointOfContact: "",
    locationType: "Waterworks",
    otherAttendees: ["Emily"],
    photos: [],
    lessonsLearned: ["XX", "", ""],
    additonalInfo: "",
    digitalHacks: "",
  },
  {
    id: 4,
    startTime: "7/1/2022 14:35",
    endTime: "7/1/2022 14:35",
    email: "anna.white@ferguson.com",
    fullName: "Emily McCabe",
    address: "123 main st, Chico, CA 12345",
    pointOfContact: "",
    locationType: "Mechanical/Industrial",
    otherAttendees: ["Anna"],
    photos: [],
    lessonsLearned: ["XX", "", ""],
    additonalInfo: "",
    digitalHacks: "",
  },
  {
    id: 5,
    startTime: "10/1/2020 14:35",
    endTime: "10/1/2020 14:35",
    email: "anna.white@ferguson.com",
    fullName: "Test",
    address: "456 south ave, Newport News, VA 67890",
    pointOfContact: "",
    locationType: "Fire & Fabrication",
    otherAttendees: ["Emily"],
    photos: [],
    lessonsLearned: ["XX", "", ""],
    additonalInfo: "",
    digitalHacks: "",
  },
  {
    id: 6,
    startTime: "8/2/2022 14:35",
    endTime: "8/2/2022 14:35",
    email: "anna.white@ferguson.com",
    fullName: "McCabe Emily",
    address: "456 south ave, Newport News, VA 67890",
    pointOfContact: "",
    locationType: "Other",
    otherAttendees: ["Anna"],
    photos: [],
    lessonsLearned: [
      "XX",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pharetra nisl vitae nisi laoreet congue. Suspendisse potenti. Nulla ligula nunc, sagittis nec efficitur eget, dictum et sapien. Donec scelerisque urna ut molestie ornare. Integer mauris odio, pharetra et nisl in, congue scelerisque enim. Duis sed urna ac ex cursus feugiat. Sed aliquet eleifend sapien ut euismod. Suspendisse rhoncus interdum diam sit amet tempus. Aenean lectus ligula, porttitor id accumsan eu, semper id nunc. ",
      "",
    ],
    additonalInfo: "",
    digitalHacks: "",
  },
];
