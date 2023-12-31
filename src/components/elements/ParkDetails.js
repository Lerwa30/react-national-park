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
        </div>
      )}
      <div className={classes.display}>
      <div className={classes.test}>
      <section className={classes.info_container}>
        <h4>About {park.name}</h4>
        <p>{park.description}</p>
        <a href={park.url}>
        Click to view more details about {park.name} from the NPS website.
      </a>
      </section>
      <section className={classes.directions}>
        <h4>Directions to the Park</h4>
        <p>{park.directionsInfo}</p>
        <a href={park.directionsUrl}>Click here for detailed NPS directions</a>
      </section>
      <section className={classes.weather_container}>
        <h4>Weather Info</h4>
        <p>{park.weatherInfo}</p>
      </section>
      </div>
      <div className={classes.test}>
      </div> 

      <section className={classes.activities_container}>
        <h4>Activities</h4>
        {park.activities === undefined ? (
          <span></span>
        ) : (
          <h5>
            {park.activities.map((item, index) => {
              return (
                <ul key={index}>
                  <li key={index}>{item.name}</li>
                </ul>
              );
            })}
          </h5>
        )}
      </section>
      </div>
    </div>
  );
};

export default ParkDetails;
