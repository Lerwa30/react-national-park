import { useState, useEffect } from "react";
import axios from "axios";

import ParkCard from "./ParkCard";

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
  
  const ParkDisplay = parks.map((park) => {
    console.log(park)
    return (
        <ParkCard key={park.id} park={park} />
    )
  })

  return (
    <div>
        {ParkDisplay}
    </div>
  );
};

export default Home;
