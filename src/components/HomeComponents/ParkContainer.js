import React from "react";
import { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import ParkCard from "../elements/ParkCard";
import classes from "./ParkSearch.module.css";

const ParkContainer = ({ parks }) => {
  const [search, setSearch] = useState("");
  console.log(parks)

  const arr = Object.values(parks)
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
    <div>
      <h2>Find a Park!</h2>
      <FaSearch id="search-icon" />
      <input
        className={classes.input}
        type="text"
        placeholder="Search for a park!"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      {search.length > 0 && <div>{parkDisplay}</div>}
    </div>
  );
};

export default ParkContainer;
