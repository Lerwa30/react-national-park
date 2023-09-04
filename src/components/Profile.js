import axios from 'axios';
import {useContext, useEffect, useState, useCallback} from 'react'
import AuthContext from "../authContext";

const Profile = () => {
    const {userId} =useContext(AuthContext);

    const [likedParks, setLikedParks] = useState([]);

    useEffect(() => {
        axios.get(`/userlikes/${userId}`)
        .then(res => setLikedParks(res.data))
        .catch(err => console.log(err))
    },[])

    const mappedLikes = likedParks.map(park => {
        return(
        <div>
            <h2>{park.name}</h2>
            <h3>{park.state}</h3>
            <p>{park.description}</p>

        </div>
        )
    })

  return (
    <div>
      <h2>My Liked Parks</h2>
      <div>
        {mappedLikes}
      </div>
    </div>
  );
};

export default Profile;
