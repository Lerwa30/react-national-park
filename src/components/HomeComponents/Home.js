import { useState, useEffect } from "react";
import axios from "axios";

import ParkCard from "../elements/ParkCard";
import AltParkContainer from "./AltParkContainer";
import classes from "./ParkContainer.module.css";
import pic from "../assets/park_pic4.jpeg";

const Home = () => {
  const [randomPark, setRandomPark] = useState({});
  const [parks, setParks] = useState({});
  const [isLoading, setIsLoading] = useState(true);

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
        console.log(parks);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }

  return (
    !isLoading && (
      <div className={classes.page}>
        <div
          className={classes.pic}
          style={{
            background: `linear-gradient(
          190deg,
          rgba(0, 0, 0, 0.3),
          rgba(0, 0, 0, 0.1)),
          url(${pic})`,
            backgroundSize: "cover",
          }}
        ></div>
        <AltParkContainer parks={parks} />
        {/* <ParkContainer parks={parks} /> */}
        <h2 style={{color: 'black', textDecoration: 'underline', textAlign: 'center'}}>Park Spotlight</h2>
        <div className={classes.container}>
          <ParkCard park={randomPark} />
        </div>
        <footer>
          <a target='_blank' href='https://github.com/Lerwa30'>Created by Leroy P</a><br></br>
          <a target='_blank' href='https://www.nps.gov/subjects/developer/index.htm'>Powered by the National Park API</a>
        </footer>
      </div>
    )
  );
};

export default Home;
