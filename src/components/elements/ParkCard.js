import React from "react";
import classes from './ParkCard.module.css'

import { Link } from "react-router-dom";

const ParkCard = ({park}) => {
  const image = park.images[0].url;
  
  console.log(park)

  return (
    <div className={classes.park_card}>
      <div className={classes.img_container}>{park.images[0].url === undefined ? <span></span> : 
      <img className={classes.img} src={image} alt='no img'/>}
      <h3>{park.fullName}<br />{park.states}</h3>
      <p className={classes.description}>{park.description}</p>
      <Link to={`/details/${park.parkCode}`}><button>View Details</button></Link>
      </div>
    </div>
  );
};

export default ParkCard;
