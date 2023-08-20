import React from "react";
import { useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import ParkCard from "../elements/ParkCard";
import classes from "./ParkContainer.module.css";

const ParkContainer = ({ parks }) => {
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
          }}
        />
        </div>
        {search.length > 2 && (
          <div className={classes.container}>{parkDisplay}</div>
        )}
    
    </section>
  );
};

export default ParkContainer;
