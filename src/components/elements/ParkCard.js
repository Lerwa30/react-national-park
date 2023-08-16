import React from "react";
import classes from './ParkCard.module.css'

import { Link } from "react-router-dom";

const ParkCard = ({park}) => {
  return (
    <div className={classes.container}>
      <div>{park.images === undefined ? <span></span> : 
      <img className={classes.img} src={park.images[0].url}></img>}
      <h3>{park.fullName} {park.states}</h3>
      <p>{park.description}</p>
      <button>View Details</button>
      </div>
    </div>
  );
};

export default ParkCard;
