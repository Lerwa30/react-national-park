import React from "react";
import { useState, useEffect } from "react";
import ParkCard from "../elements/ParkCard";
import classes from "./ParkContainer.module.css";

const AltParkContainer = ({ parks }) => {
  const stateArr = [
    "AL",
    "AK",
    "AS",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "DC",
    "FL",
    "GA",
    "GU",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MH",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "MP",
    "OH",
    "OK",
    "OR",
    "PW",
    "PA",
    "PR",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VI",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const [selectedState, setSelectedState] = useState(false);

  console.log(parks);

  const arr = Object.values(parks);
  const parkDisplay = arr
    .filter((park) => {
      let option = park.states;
      return option.includes(selectedState);
    })
    .map((park, index) => {
      console.log("test");
      return <ParkCard park={park} />;
    });


  return (
    <section className={classes.section}>
      <div className={classes.searchbar}>
        {/* <FaSearch size="1em" id="search-icon" /> */}
        <select
          className={classes.dropdown}
          value={selectedState}
          onChange={(e) => {
            setSelectedState(e.target.value);
          }}
        >
          <option value={null}>Find a National Park by State</option>

          {stateArr.map((state, index) => {
            return <option key={state} value={state}>{state}</option>;
          })}
        </select>
      </div>
      <div className={classes.container}> {parkDisplay}</div>
    </section>
  );
};

export default AltParkContainer;
