import React from "react";
import classes from './ParkCard.module.css'

import { Link } from "react-router-dom";

const ParkCard = ({park}) => {
  const image = park.images[0].url;
  
  console.log(park)

  return (
    <div className={classes.container}>
      <div>{park.images[0].url === undefined ? <span></span> : 
      <img className={classes.img} src={image} alt='no img'/>}
      <h3>{park.fullName} {park.states}</h3>
      <p>{park.description}</p>
      <Link to={`/details/${park.parkCode}`}><button>View Details</button></Link>
      </div>
    </div>
  );
};

export default ParkCard;
