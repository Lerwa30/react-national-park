import React from "react";
import { useState, useEffect } from "react";

const ParkDetails = (props) => {
    return (
        <div>
          <div>{props.park.images === undefined ? <span></span> : 
          <img src={props.park.images[1].url}></img>}
          <h3>{props.park.fullName} {props.park.states}</h3>
          <p>{props.park.description}</p>
          </div>
        </div>
      );
};

export default ParkDetails;