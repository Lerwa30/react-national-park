import React from "react";
import classes from './ParkCard.module.css'
import ParkContainer from "../HomeComponents/ParkContainer";

import { Link } from "react-router-dom";

const ParkCard = (props) => {
  return (
    <div className={classes.container}>
      <div>{props.park.images === undefined ? <span></span> : 
      <img className={classes.img} src={props.park.images[0].url}></img>}
      <h3>{props.park.fullName} {props.park.states}</h3>
      <p>{props.park.description}</p>
      <Link to="/details"><button>View Details</button></Link>
      </div>
    </div>
  );
};

export default ParkCard;
