import React from "react";
import { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import ParkCard from "../elements/ParkCard";
import classes from "./ParkContainer.module.css";

const ParkContainer = ({ parks }) => {
  const states = ['AL','AK','AS','AZ','AR','CA','CO','CT','DE','DC','FM','FL','GA',
    'GU','HI','ID','IL','IN','IA','KS','KY','LA','ME','MH','MD','MA',
    'MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND',
    'MP','OH','OK','OR','PW','PA','PR','RI','SC','SD','TN','TX','UT',
    'VT','VI','VA','WA','WV','WI','WY']

  const [search, setSearch] = useState("");
  console.log(parks);

  const arr = Object.values(parks);
  const parkDisplay = arr
    .filter((park, index) => {
      let name = park.fullName.toLowerCase();
      let searchInput = search.toLowerCase();
      return name.includes(searchInput);
    })
    .map((park, index) => {
      return <ParkCard park={park} />;
    });

  return (
    <section className={classes.section}>
      <div className={classes.searchbar}>
        <FaSearch size="1em" id="search-icon" />
        <input
          className={classes.input}
          type="text"
          placeholder="Search for a park!"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}></input>
        </div>
        {search.length > 2 && (
          <div className={classes.container}>{parkDisplay}</div>
        )}

{/* {states.map((state, index) => {
            <option>{state}</option>
          })} */}
    
    </section>
  );
};

export default ParkContainer;
