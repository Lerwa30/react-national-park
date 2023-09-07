import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import AuthContext from "../../authContext";
import { Link } from 'react-router-dom';
import classes from './Profile.module.css';

const Profile = () => {
    const { userId, token } = useContext(AuthContext);
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

    const deleteLike = id => {
        axios.delete(`/likes/${id}`, {
            headers: {
                authorization: token
            }
        })
            .then(() => {
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
            })
            .catch(err => {
                console.log(err)
            })
    }


    const arr = Object.values(likedParks);
    const mappedLikes = arr.map(item => {
        return(
        <div key={item.id}>
            <h2>{item.name}</h2>
            <button onClick={() => deleteLike(item.id)}>x</button>
        </div>
)});

    return (
        <div>
            <div className={classes.list}>
            <h2>My Parks</h2>
            <div className={classes.list_container}>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    {mappedLikes}
                </div>
            )}
            </div>
            </div>
        </div>
    );
};

export default Profile;

