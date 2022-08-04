import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  onSnapshot,
  query,
} from "firebase/firestore";
import { FirebaseSiteVisit } from "../types/site-visit";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyDD1i_5BKRnkgciOUT-pAaX689-BvnYLZk",
  authDomain: "ferguson-digital-passport.firebaseapp.com",
  projectId: "ferguson-digital-passport",
  storageBucket: "ferguson-digital-passport.appspot.com",
  messagingSenderId: "427498596093",
  appId: "1:427498596093:web:07029f2c121123cc18c094",
  measurementId: "G-1LC0PPZ6LV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

const getListofVisits = async () => {
  const results: {}[] = [];
  const querySnapshot = await getDocs(collection(db, "visits"));
  querySnapshot.forEach((doc) =>
    results.push({
      ...doc.data(),
      id: doc.id,
    })
  );
  return results as FirebaseSiteVisit[];
};

const getRealTimeVisits = async () => {
  const visits = await query(collection(db, "visits"));
  const unsubscribe = onSnapshot(visits, (snapshot) => {
    const results: any[] = [];
    snapshot.forEach((doc) => {
      results.push(doc);
    });
  });
};

const addVisit = async (
  associateName: string,
  siteVisitDate: string,
  siteTypes: string[],
  siteVisitAddress: string,
  poc: string,
  goals: string,
  mainTakes: string,
  photoUrl: string
) => {
  const visit = await addDoc(collection(db, "visits"), {
    associateName: associateName,
    siteVisitDate: siteVisitDate,
    siteTypes: siteTypes,
    siteVisitAddress: siteVisitAddress,
    poc: poc,
    goals: goals,
    mainTakes: mainTakes,
    photoUrl: photoUrl,
  });
  console.log("Visit has been added", visit.id);
  if (visit.id) {
    alert("Submission Successful!");
  } else {
    alert("Error");
  }
};

export { getListofVisits, addVisit };
