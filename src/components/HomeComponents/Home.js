import { useState, useEffect } from "react";
import axios from "axios";

import ParkCard from "../elements/ParkCard";
import ParkDetails from "../elements/ParkDetails";
import ParkContainer from "./ParkContainer";

const Home = () => {
  const [randomPark, setRandomPark] = useState({});
  const [parks, setParks] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://developer.nps.gov/api/v1/parks?api_key=VmoCKnr0bKehO0P57WIOTJoRumAUoOp65cybqGgR"
      )
      .then((res) => {
        console.log(res.data.data);
        const index = Math.floor(Math.random() * 50);
        setRandomPark(res.data.data[index]);
        console.log(res.data.data[index]);
        setParks(res.data.data);
        console.log(parks)
      });
  }, []);

  return (
    <div>
      <ParkContainer parks={parks} />
      <ParkCard park={randomPark} />
      
    </div>
  );
};

export default Home;
