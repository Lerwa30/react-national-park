import React from "react";
import classes from './ParkCard.module.css'
import { Link } from "react-router-dom";

const ParkCard = ({ park }) => {
  console.log(park);

  const imageUrl = park.images[0] && park.images[0].url ? park.images[0].url : null; //allows test of images before container renders

  return (
    <div className={classes.park_card}>
      <div className={classes.img_container}>
        {imageUrl ? (
          <img className={classes.img} src={imageUrl} alt='no img' loading='lazy' />
        ) : (
          <span>No Image Available</span>
        )}
        <h3>
          {park.fullName}
          <br />
          {park.states}
        </h3>
        <p className={classes.description}>{park.description}</p>
        <Link to={`/details/${park.parkCode}`}>
          <button className={classes.button}>View Details</button>
        </Link>
      </div>
    </div>
  );
};

export default ParkCard;