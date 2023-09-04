import React, { useContext, useState } from "react";
import axios from "axios";
import classes from "./ParkCard.module.css";
import { Link, useNavigate } from "react-router-dom";

import AuthContext from "../../authContext";

const ParkCard = ({ park }) => {
  const { token, userId } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState(park.fullName);
  const [state, setState] = useState(park.state);
  const [description, setDescription] = useState(park.description);
  const [status, setStatus] = useState(true);

  const likePark = (e) => {
    e.preventDefault();

    axios.post('/likes', {name, state, description, status, userId}, {
      headers: {
        authorization: token
      }
    })
    .then(() => {
      navigate('/profile')
    })
    .catch(err => console.log(err))
  }

  console.log(park);

  const imageUrl =
    park.images[0] && park.images[0].url ? park.images[0].url : null; //allows test of images before container renders

  return (
    <div className={classes.park_border}>
      <div className={classes.park_card}>
        <div className={classes.img_container}>
          {imageUrl ? (
            <img
              className={classes.img}
              src={imageUrl}
              alt="no img"
              loading="lazy"
            />
          ) : (
            <div className={classes.span_container}>
              <span>No Image Available</span>
            </div>
          )}
          <h3>{park.fullName}</h3>
          <h3 className={classes.states}>{park.states}</h3>
          <p className={classes.description}>{park.description}</p>
          <Link to={`/details/${park.parkCode}`}>
            <button className={classes.button}>View Details</button>
          </Link>
          <button className={classes.button} onClick={likePark}>Add Park to List</button>
        </div>
      </div>
    </div>
  );
};

export default ParkCard;
