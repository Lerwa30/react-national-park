import { useState } from "react";
import axios from "axios";
import {FaSearch} from "react-icons/fa"

import ParkCard from "../elements/ParkCard";
import classes from "./ParkSearch.module.css";

const ParkSearch = () => {
  const [input, setInput] = useState("");

  return (
    <div className={classes.searchbar}>
        <FaSearch id="search-icon" />
      <input className={classes.input}
        type="text"
        placeholder="Search for a park!"
        input={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
};

export default ParkSearch;
