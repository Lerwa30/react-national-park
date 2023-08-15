import React from "react";
import classes from './ParkCard.module.css'

const ParkCard = (props) => {
  return (
    <div className={classes.container}>
      <div>{props.park.images === undefined ? <span></span> : 
      <img className={classes.img} src={props.park.images[0].url}></img>}
      <h3>{props.park.fullName} {props.park.states}</h3>
      <p>{props.park.description}</p>
      </div>
    </div>
  );
};

export default ParkCard;
