import { useState, useEffect } from "react";
import axios from "axios";

import ParkCard from "../elements/ParkCard";
import ParkSearch from "./ParkSearch";

const Home = () => {
  const [randomPark, setRandomPark] = useState({});

  useEffect(() => {
    console.log("test")
    axios
      .get(
        "https://developer.nps.gov/api/v1/parks?api_key=VmoCKnr0bKehO0P57WIOTJoRumAUoOp65cybqGgR"
      )
      .then((res) => {
        console.log(res.data.data);
        const index = Math.floor(Math.random() * 50);
        setRandomPark(res.data.data[index]);
        console.log(res.data.data[index])
      });
  }, []);

  return (
    <div>
      <ParkSearch></ParkSearch>
      <ParkCard park={randomPark} />
    </div>
  );
};

export default Home;
