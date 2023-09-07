import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import AuthContext from "../../authContext";
import { Link } from 'react-router-dom';

const Profile = ({park}) => {
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

    const arr = Object.values(likedParks);
    const mappedLikes = arr.map(item => {
        return(
        <div key={item.id}>
            <h2>{item.name}</h2>
        
        </div>
)});

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

