import React from "react";
import { useState, useEffect } from "react";

const ParkDetails = ({parks}) => {
    return (
        <div>
          <div>{parks.images === undefined ? <span></span> : 
          <img src={parks.images[1].url}></img>}
          <h3>{parks.fullName} {parks.states}</h3>
          <p>{parks.description}</p>
          </div>
        </div>
      );
};

export default ParkDetails;