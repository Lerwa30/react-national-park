import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import AuthContext from "../authContext";

const Profile = () => {
    const { userId } = useContext(AuthContext);
    const [likedParks, setLikedParks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`/userlikes/${userId}`)
            .then(res => {
                console.log(res.data)
                setLikedParks(res.data);
                setLoading(false); // Set loading to false once data is loaded
            })
            .catch(err => {
                console.error(err);
                setLoading(false); // Set loading to false on error
            });
    }, [userId]);

    const mappedLikes = likedParks.map(park => {
        <div key={park.id}>
            <h2>{park.name}</h2>
            {/* <h3>{park.state}</h3> */}
            <p>{park.description}</p>
        </div>
});

    return (
        <div>
            <h2>My Liked Parks</h2>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {mappedLikes}
                </div>
            )}
        </div>
    );
};

export default Profile;

