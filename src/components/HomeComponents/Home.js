import { useState, useEffect } from "react";
import axios from "axios";

import ParkCard from "../elements/ParkCard";
import ParkDetails from "../elements/ParkDetails";
import ParkContainer from "./ParkContainer";
import AltParkContainer from "./AltParkContainer";
import classes from "./ParkContainer.module.css";
import pic from "../assets/yosemite_img.webp";

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
          rgba(0, 0, 0, 0.8),
          rgba(0, 0, 0, 0.2)),
          url(${pic})`,
            backgroundSize: "cover",
          }}
        ></div>
        <AltParkContainer parks={parks} />
        {/* <ParkContainer parks={parks} /> */}
        <div className={classes.container}>
          <h2 style={{color: 'whitesmoke'}}>Park Spotlight:</h2>
          <ParkCard park={randomPark} />
        </div>
      </div>
    )
  );
};

export default Home;
