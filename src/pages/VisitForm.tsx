import React, { useState, useEffect } from "react";
import "./VisitForm.css";
import {getListofVisits} from './firebase'


interface VForm {
  associateName: string;
  siteVisitDate: string;
  siteType: string;
  siteVisitAddress: string;
  poc: string;
  goals: string;
  mainTakes: string;
  photoUrl: string;
  onSubmit: (event: any) => void;
}

const VisitForm = () => {
  const [associateName, setAssociateName] = useState<VForm["associateName"]>(
    ""
  );
  const [siteVisitDate, setSiteVisitDate] = useState<VForm["siteVisitDate"]>(
    ""
  );
  const [siteType, setSiteType] = useState<VForm["siteType"]>("");
  const [siteVisitAddress, setSiteVisitAddress] = useState<
    VForm["siteVisitAddress"]
  >("");
  const [poc, setPoc] = useState<VForm["poc"]>("");
  const [goals, setGoals] = useState<VForm["goals"]>("");
  const [mainTakes, setMainTakes] = useState<VForm["mainTakes"]>("");
  const [photoUrl, setPhotoUrl] = useState<VForm["photoUrl"]>("");

  const handleSubmit: VForm["onSubmit"] = (event: any) => {
    
  };

  const visits = getListofVisits();
  console.log(visits)
  return (
    <div className="visitForm__container">
      <h1 className="visitForm__header">Share Your Visit</h1>
      <p>Please submit one form per site visit</p>
      {/* Form begins here */}
      <form className="visitForm__form__container">
        <div className='visitForm__form__row'>
        <input
          className="visitForm__form__name"
          placeholder="Name"
          value={associateName}
          onChange={(e) => setAssociateName(e.target.value)}
        />
        <div>
        <label>Site visit Date:</label>
        <input
          className="visitForm__form__date"
          name="Site visit date"
          type="date"
          value={siteVisitDate}
          onChange={(e) => setSiteVisitDate(e.target.value)}
        />
        </div>
     
        </div>
        <input
          className="visitForm__form__type"
          type="radio"
          name="site_types"
          value="Ferguson Distribution Center"
          onChange={(e) => setSiteType(e.target.value)}
        />
        <label>Ferguson Distribution Center</label>
        <br></br>
        <input
          className="visitForm__form__type"
          type="radio"
          name="site_types"
          value="Ferguson Showroom"
          onChange={(e) => setSiteType(e.target.value)}
        />
        <label>Ferguson Showroom</label>
        <br></br>
        <input
          className="visitForm__form__type"
          type="radio"
          name="site_types"
          value="Ferguson Branch"
          onChange={(e) => setSiteType(e.target.value)}
        />
        <label>Ferguson Branch</label>
        <br></br>
        <input
          className="visitForm__form__type"
          type="radio"
          name="site_types"
          value="Other"
          onChange={(e) => setSiteType(e.target.value)}
        />
        <label>Other</label>
        <br></br>
        <input
          className="visitForm__form__address"
          placeholder="Site visit Address"
          value={siteVisitAddress}
          onChange={(e) => setSiteVisitAddress(e.target.value)}
        />
        <input
          className="visitForm__form__poc"
          placeholder="Point of contact at site visit location"
          value={poc}
          onChange={(e) => setPoc(e.target.value)}
        />
        <input
          className="visitForm__form__goals"
          placeholder="What were your goals for your site visit? What did you hop to learn?"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        />
        <input
          className="visitForm__form__mainTakes"
          placeholder="What were the main take aways from your site visit? Were there any direct ties to your work or work you know is being done within Digital Org?"
          value={mainTakes}
          onChange={(e) => setMainTakes(e.target.value)}
        />
        <label>Upload Photos of Visits</label>
        <input
          className="visitForm__form__upload"
          type="file"
          name="img"
          accept="image/*"
        />
        <button
          className="visitForm__form__button"
          onSubmit={(e) => handleSubmit(e)}
        >
          Share Visit
        </button>
      </form>
    </div>
  );
};

export default VisitForm;
