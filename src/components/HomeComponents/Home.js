import { useState, useEffect } from "react";
import axios from "axios";

import ParkCard from "../elements/ParkCard";
import ParkDetails from "../elements/ParkDetails";
import ParkContainer from "./ParkContainer";
import classes from './ParkContainer.module.css'

const Home = () => {
  const [randomPark, setRandomPark] = useState({});
  const [parks, setParks] = useState({});
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    axios
      .get(
        "https://developer.nps.gov/api/v1/parks?limit=471&api_key=VmoCKnr0bKehO0P57WIOTJoRumAUoOp65cybqGgR"
      )
      .then((res) => {
        console.log(res.data.data);
        const index = Math.floor(Math.random() * 472);
        setRandomPark(res.data.data[index]);
        console.log(res.data.data[index]);
        setParks(res.data.data);
        console.log(parks)
        
      }).finally(() => {
        setIsLoading(false);
      });
  }, []);

  if(isLoading) {
    return <>Loading...</>
  };

  return (
    !isLoading && 
    <div>
      <ParkContainer parks={parks} />
      <div className={classes.container}>
      <ParkCard park={randomPark} />
      </div>

    </div>
  );
};

export default Home;
