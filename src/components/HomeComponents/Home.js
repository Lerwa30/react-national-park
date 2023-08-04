import { useState, useEffect } from "react";
import axios from "axios";

import ParkCard from "../elements/ParkCard";
import ParkSearch from "./ParkSearch";

const Home = () => {
  const [parks, setParks] = useState([]);

  useEffect(() => {
    axios
    .get('https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=VmoCKnr0bKehO0P57WIOTJoRumAUoOp65cybqGgR')
    .then((res) =>{
        console.log(res.data.data);
        setParks(res.data.data);
    })
  }, [])
  
  const DisplayPark = parks.map((park) => {
    console.log(park)
    return (
      <div>
        <ParkSearch key={park.id}  park={park}></ParkSearch>
        <ParkCard park={park} />
        </div>
    )
  })

  return (
    <div>
        {DisplayPark}
    </div>
  );
};

export default Home;
