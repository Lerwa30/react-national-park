import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import classes from "./ParkDetails.module.css";

const ParkDetails = () => {
  const { code } = useParams();
  const [park, setPark] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://developer.nps.gov/api/v1/parks?parkCode=${code}&api_key=VmoCKnr0bKehO0P57WIOTJoRumAUoOp65cybqGgR`
      )
      .then((res) => {
        setPark(res.data.data[0]);
        console.log(res.data.data[0]);
      });
  }, []);

  return (
    <div>
      {park.images === undefined ? (
        <span></span>
      ) : (
        <div
          className={classes.img}
          style={{
            background: `linear-gradient(
                190deg,
                rgba(0, 0, 0, 0.8),
                rgba(0, 0, 0, 0.2)),
                url(${park.images[1].url})`,
            backgroundSize: "cover",
          }}
        >
      <div className={classes.about}>
        <h2>{park.fullName}</h2>
        <h3>{park.states}</h3>
      </div>
      </div>)}
      <p>{park.description}</p>
      <h4>Directions to the Park:</h4>
      <section className={classes.directions}>
        <p>{park.directionsInfo}</p>
        <a href={park.directionsUrl}>Click here for detailed NPS directions</a>
      </section>
      <p>{park.weatherInfo}</p>
      {park.activities === undefined ? (
        <span></span>
      ) : (
        <p>
          {park.activities.map((item) => {
            return (
              <ul>
                <li>{item.name}</li>
              </ul>
            );
          })}
        </p>
      )}
    </div>
  );
};

export default ParkDetails;
