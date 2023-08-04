import React from "react";
import classes from './ParkCard.module.css'

const ParkCard = (props) => {
  console.log(props.park.images[1].url);
  return (
    <div className={classes.container}>
      <div>
      <img className={classes.img} src={props.park.images[0].url}></img>
      <h3>{props.park.fullName}, {props.park.states}</h3>
      <div>{props.park.weatherInfo}</div>
      </div>
    </div>
  );
};

export default ParkCard;
