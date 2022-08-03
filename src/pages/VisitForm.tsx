import React, { useState, useEffect } from "react";
import "./VisitForm.css";
import { addVisit, getListofVisits } from "./firebase";

interface VForm {
  associateName: string;
  siteVisitDate: string;
  siteTypes: string[];
  siteVisitAddress: string;
  poc: string;
  goals: string;
  mainTakes: string;
  photoUrl: string;
  onSubmit: (e: any) => void;
}

const VisitForm = () => {
  const [associateName, setAssociateName] = useState<VForm["associateName"]>(
    ""
  );
  const [siteVisitDate, setSiteVisitDate] = useState<VForm["siteVisitDate"]>(
    ""
  );

  const [siteTypes, setSiteTypes] = useState<VForm['siteTypes']>([])
  const [siteVisitAddress, setSiteVisitAddress] = useState<
    VForm["siteVisitAddress"]
  >("");
  const [poc, setPoc] = useState<VForm["poc"]>("");
  const [goals, setGoals] = useState<VForm["goals"]>("");
  const [mainTakes, setMainTakes] = useState<VForm["mainTakes"]>("");
  const [photoUrl, setPhotoUrl] = useState<VForm["photoUrl"]>("");


  const handleSubmit: VForm["onSubmit"] = (e) => {
    e.preventDefault();
    console.log(
      associateName,
      siteVisitDate,
      siteTypes,
      siteVisitAddress,
      poc,
      goals,
      mainTakes,
      photoUrl
    );

    if (siteTypes.length === 0) {
      return alert('Please select a site type!')
    }

    if (
      associateName &&
      siteVisitDate &&
      siteTypes.length !== 0 &&
      siteVisitAddress &&
      poc &&
      goals &&
      mainTakes
    ) {
      addVisit(
        associateName,
        siteVisitDate,
        siteTypes,
        siteVisitAddress,
        poc,
        goals,
        mainTakes,
        photoUrl
      );
    }
  };

  const updateSiteTypes = (type: any) => {
    if (!siteTypes.includes(type.target.value)) {
      return setSiteTypes([...siteTypes, type.target.value])
    } else {
      return setSiteTypes(siteTypes.filter(el => el !== type.target.value))
    }
  }


  return (
    <div className="visitForm__container">
      <h1 className="visitForm__header">Share Your Visit</h1>
      <p className="visitForm__subtitle">
        Please submit one form per site visit
      </p>
      {/* Form begins here */}
      <form
        className="visitForm__form__container"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
        required
          className="visitForm__form__name"
          placeholder="Name"
          value={associateName}
          onChange={(e) => setAssociateName(e.target.value)}
        />
        <label className='visitForm__form__dateLabel'>Site visit date</label>
        <input
          required
          className="visitForm__form__date"
          name="Site visit date"
          type="date"
          value={siteVisitDate}
          onChange={(e) => setSiteVisitDate(e.target.value)}
        />
        <br></br>
        <label className='visitForm__form__siteLabel'>Please select at least one location type.</label>
        <div className="visitForm__form__checkboxRow">
          <input
            className="visitForm__form__type"
            type="checkbox"
            name="site_types"
            value="Counter"
            onChange={(e) => updateSiteTypes(e)}
          />
          <label>Counter</label>
          <br></br>
        </div>
        <div className="visitForm__form__checkboxRow">
          <input
            className="visitForm__form__type"
            type="checkbox"
            name="site_types"
            value="Distribution Center"
            onChange={(e) => updateSiteTypes(e)}
          />
          <label>Distribution Center</label>
          <br></br>
        </div>
        <div className="visitForm__form__checkboxRow">
          <input
            className="visitForm__form__type"
            type="checkbox"
            name="site_types"
            value="Warehouse"
            onChange={(e) => updateSiteTypes(e)}
          />
          <label>Warehouse</label>
          <br></br>
        </div>
        <div className="visitForm__form__checkboxRow">
          <input
            className="visitForm__form__type"
            type="checkbox"
            name="site_types"
            value="Fire & Fabrication"
            onChange={(e) => updateSiteTypes(e)}
          />
          <label>Fire & Fabrication</label>
          <br></br>
        </div>
        <div className="visitForm__form__checkboxRow">
          <input
            className="visitForm__form__type"
            type="checkbox"
            name="site_types"
            value="Showroom"
            onChange={(e) => updateSiteTypes(e)}
          />
          <label>Showroom</label>
          <br></br>
        </div>
        <div className="visitForm__form__checkboxRow">
          <input
            className="visitForm__form__type"
            type="checkbox"
            name="Otherite_types"
            value="Other"
            onChange={(e) => updateSiteTypes(e)}
          />
          <label>Other</label>
          <br></br>
        </div>

        <input
          required
          className="visitForm__form__address"
          placeholder="Site visit Address"
          value={siteVisitAddress}
          onChange={(e) => setSiteVisitAddress(e.target.value)}
        />
        <input
          required
          className="visitForm__form__poc"
          placeholder="Point of contact at site visit location"
          value={poc}
          onChange={(e) => setPoc(e.target.value)}
        />

        <textarea
          required
          className="visitForm__form__goals"
          placeholder="What were your goals for your site visit? What did you hop to learn?"
          value={goals}
          onChange={(e) => setGoals(e.target.value)}
        />
        <textarea
          required
          className="visitForm__form__mainTakes"
          placeholder="What were the main take aways from your site visit? Were there any direct ties to your work or work you know is being done within Digital Org?"
          value={mainTakes}
          onChange={(e) => setMainTakes(e.target.value)}
        />
        <label className='visitForm__form__uploadLabel'>Upload Photos of Visits</label>
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
