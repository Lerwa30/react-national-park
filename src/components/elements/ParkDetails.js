import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ParkDetails = () => {
  const { code } = useParams();
  const [park, setPark] = useState({});

  useEffect(() => {
    axios.get(`https://developer.nps.gov/api/v1/parks?parkCode=${code}&api_key=VmoCKnr0bKehO0P57WIOTJoRumAUoOp65cybqGgR`).then((res) => {
      setPark(res.data.data[0]);
      console.log(res.data.data[0]);
    });
  }, []);

    return (
        <div>
          <div>{park.images === undefined ? <span></span> : 
          <img src={park.images[1].url}></img>}
          <h3>{park.fullName} {park.states}</h3>
          <p>{park.description}</p>
          </div>
        </div>
      );
};

export default ParkDetails;